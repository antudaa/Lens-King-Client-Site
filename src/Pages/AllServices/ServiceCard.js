import React from 'react';

const ServiceCard = ({ service }) => {

    const { _id, image_url, service_id, service_name, details, packages } = service;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {service_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;