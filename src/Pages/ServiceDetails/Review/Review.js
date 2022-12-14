import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Review = ({ data, user }) => {


    const { _id, service_name } = data;

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comments.value;

        const review = {
            serviceId: _id,
            user: user?.uid,
            img: user.photoURL,
            service: service_name,
            name: user.displayName,
            email: user.email,
            comment: comment,
        };


        if (comment.length < 4) {
            toast('Please give a reasonable comment Please...', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            fetch(`https://lens-king-server.vercel.app/reviews`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        form.reset();
                        toast('Thanks for your valuable Review...', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                })
                .catch(err => console.log(err.message));
        }

    }



    return (
        <div className='p-6'>
            <h1 className='text-4xl text-start font-semibold my-10'>Please review our service...</h1>


            <div>
                <form onSubmit={handleReview} action="">
                    <div className='my-6'>
                        <label className="label">
                            <span className="label-text">Comments</span>
                        </label>
                        <textarea name='comments' className="textarea textarea-info w-full" placeholder="Comments" required></textarea>
                    </div>
                    <div className='mt-10 text-center'>
                        <button type='submit' className="btn btn-outline btn-primary">Submit</button>

                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Review;