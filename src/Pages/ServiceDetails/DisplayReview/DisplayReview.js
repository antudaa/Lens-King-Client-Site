import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

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

    console.log(review);


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
                                                        user?.photoURL ?
                                                            <img
                                                                className='mx-3'
                                                                title={user?.displayName}
                                                                style={{ height: '36px', borderRadius: '50%' }}
                                                                src={user?.photoURL}
                                                                alt=''>
                                                            </img>
                                                            :
                                                            <FaUser className='mx-3' />
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{rev.name}</div>
                                                {/* <div className="text-sm opacity-50">United States</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {rev?.email ? rev.email : <p>Not found!</p>}

                                    </td>
                                    <td>{rev.comment}</td>
                                    {/* <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th> */}
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