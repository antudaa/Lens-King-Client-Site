import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review/Review';

const ServiceDetails = () => {

    const data = useLoaderData();

    const { _id, image_url, service_name, details, packages } = data;

    return (
        <div className='py-16 '>
            <div className="card w-full glass">
                <div className='w-2/3 mx-auto'>
                    <figure><img className='rounded-lg ' src={image_url} alt="car!" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{service_name}
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
            <Review></Review>
        </div>
    );
};

export default ServiceDetails;