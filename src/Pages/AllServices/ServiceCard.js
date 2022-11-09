import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, image_url, service_id, service_name, details, packages } = service;
    const detail = details.slice(0, 200);


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className='lg:w-1/3'>
                        <figure><img className='rounded-lg' src={image_url} alt="Album" /></figure>
                    </div>
                    <div className="card-body lg:w-2/3">
                        <h2 className="card-title">
                            {service_name}
                            <div className="badge badge-secondary">Rating : 4.5</div></h2>
                        <p>{detail}</p>
                        <div className="card-actions justify-start mt-4">
                            <div className="badge badge-outline">{`Silver : ${packages.silver.price}`}</div>
                            <div className="badge badge-outline">{`Gold : ${packages.gold.price}`}</div>
                            <div className="badge badge-outline">{`Platinum : ${packages.platinum.price}`}</div>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/services/${_id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;