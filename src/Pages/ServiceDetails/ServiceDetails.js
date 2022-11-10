import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import DynamicTitle from '../../Hooks/DynamicTitle';
import DisplayReview from './DisplayReview/DisplayReview';
import Review from './Review/Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';


const ServiceDetails = () => {

    const data = useLoaderData();

    DynamicTitle('Service-Details');


    const { user, logOut } = useContext(AuthContext);

    const { _id, image_url, service_name, details, packages } = data;

    return (
        <div className='py-16 '>
            <div className="card w-full glass">
                <div className='w-2/3 mx-auto'>
                    <figure>
                        <PhotoProvider>
                            <PhotoView src={image_url}>
                                <img className=" rounded-lg " src={image_url} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{service_name?.service_name}
                        <div className="badge badge-secondary">Rating : 4.5</div>
                    </h2>
                    <p>{details}</p>
                    <div className="card-actions justify-start mt-4">
                        <div className="badge badge-outline">{`Silver : ${packages.silver.price}`}</div>
                        <div className="badge badge-outline">{`Gold : ${packages.gold.price}`}</div>
                        <div className="badge badge-outline">{`Platinum : ${packages.platinum.price}`}</div>
                    </div>
                </div>
            </div>
            <DisplayReview
                key={_id}
                data={data}
                user={user}
                logOut={logOut}
            ></DisplayReview>
            {
                user?.uid ?
                    <Review
                        key={_id}
                        data={data}
                        user={user}
                    ></Review> :
                    <div className='mb-6 mt-12 text-center'>
                        <h1 className='text-2xl font-semibold mb-6 text-emerald-500'>Please login first to give a review!</h1>
                        <Link to='/login'>
                            <button className="btn btn-outline btn-primary">Login</button>
                        </Link>

                    </div>
            }
        </div>
    );
};

export default ServiceDetails;