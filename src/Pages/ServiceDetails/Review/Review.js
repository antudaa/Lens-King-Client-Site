import React, { useEffect, useState } from 'react';



const Review = ({ data , user }) => {


    const { _id, service_name } = data;

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comments.value;

        const review = {
            serviceId: _id,
            user : user?.uid,
            img : user.photoURL,
            service : service_name,
            name: user.displayName,
            email: user.email,
            comment: comment,
        };


        if (comment.length < 4) {
            alert("Please give a reasonable comment Please...");
        } else {
            fetch(`http://localhost:5000/reviews`, {
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
                        alert('Thanks for your valuable Review...');
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

        </div>
    );
};

export default Review;