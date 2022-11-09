import React from 'react';

const ServiceCard = ({ service }) => {

    const { _id, image_url, service_id, service_name, details, packages } = service;


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className='lg:w-1/3'>
                        <figure><img className='rounded-lg' src={image_url} alt="Album" /></figure>
                    </div>
                    <div className="card-body lg:w-2/3">
                        <h2 className="card-title">{service_name}</h2>
                        <p>{details}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;