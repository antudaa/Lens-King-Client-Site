import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';


const Card = ({ service }) => {

    const { image_url, _id, service_name, details, packages } = service;

    const detail = details.slice(0, 100);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image_url}>
                    <img src={image_url} alt="" />
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">
                    {service_name?.service_name}
                    <div className="badge badge-secondary">Rating : 4.5</div>
                </h2>
                <p>{`${detail?.detail}`}</p>
                <div className="card-actions justify-start mt-4">
                    <div className="badge badge-outline">{`Silver : ${packages.silver.price}`}</div>
                    <div className="badge badge-outline">{`Gold : ${packages.gold.price}`}</div>
                    <div className="badge badge-outline">{`Platinum : ${packages.platinum.price}`}</div>
                </div>
                <div className='card-actions my-4 justify-end'>
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-outline btn-success">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;