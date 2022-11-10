import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import DynamicTitle from '../../../Hooks/DynamicTitle';
import MyReviewRow from './MyReviewRow';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const MyReviews = () => {

    DynamicTitle('MyReviews');

    const [review, setReview] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://lens-king-server.vercel.app/reviewsUid?user=${user.uid}`)
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);


    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure? You want to delete this review!");
        if (proceed) {
            fetch(`https://lens-king-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert("Successfully deleted...")
                        toast.success('Successfully deleted ...', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        const remaining = review.filter(rev => rev._id !== id)
                        setReview(remaining);
                    }
                })
                .catch((error) => console.log(error.message));
        }
    }



    return (
        <div style={{ height: "70vh" }} className='my-20'>
            <div className='text-center my-20'>
                <h1 className='text-4xl text-sky-500'>All Your Reviews...</h1>
            </div>
            {
                review.length === 0 ?
                    <div className='text-center my-20'>
                        <h1 className='text-4xl text-sky-500'>No Reviews Found ...</h1>
                    </div> :
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>

                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Comments</th>
                                    <th>Delete/Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    review?.map(rev => (
                                        <MyReviewRow
                                            key={rev._id}
                                            handleDelete={handleDelete}
                                            user={user}
                                            review={rev}
                                        ></MyReviewRow>
                                    ))
                                }
                            </tbody>


                        </table>
                    </div>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReviews;