import React, { useEffect, useState } from 'react';

const DisplayReview = ({ data, user }) => {

    const { _id } = data;

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`https://lens-king-server-antudaa.vercel.app/reviewsId?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
            .catch(error => console.log(error.message));
    }, [_id]);



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
                            review.map((rev, i) => (
                                <tr key={i}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{rev?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {rev?.email ? rev.email : <p>Not found!</p>}

                                    </td>
                                    <td>{rev?.comment}</td>
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