import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayReview = ({ data, user }) => {

    const { _id } = data;

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewsId?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
            .catch(error => console.log(error.message));
    }, []);



    return (
        <div className='my-16'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(rev => (
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    {
                                                        // user?.photoURL?
                                                        // <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />:
                                                        // <FaUser/>
                                                        review?.photoURL ?
                                                            <img
                                                                className='mx-3'
                                                                title={review?.displayName}
                                                                style={{ height: '36px', borderRadius: '50%' }}
                                                                src={review?.photoURL}
                                                                alt=''>
                                                            </img>
                                                            :
                                                            <FaUser className='mx-3' />
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{rev.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {rev?.email ? rev.email : <p>Not found!</p>}

                                    </td>
                                    <td>{rev.comment}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default DisplayReview;