import React from 'react';

import { FaUser } from 'react-icons/fa';


const MyReviewRow = ({ review ,user, handleDelete }) => {

    const { _id, service, name, email, comment} = review;


    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
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
                        {service}
                        <br />
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {email ? email : <p>Not found!</p>}

            </td>
            <td>
                {comment}
            </td>
            <td>
                <button className="btn btn-outline btn-warning mr-6">Edit</button>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
            </td>

        </tr>
    );
};

export default MyReviewRow;