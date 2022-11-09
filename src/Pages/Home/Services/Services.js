import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeServices')
            .then(res => res.json())
            .then(data => setService(data))
            .catch(error => console.log(error.message));
    }, [])


    return (
        <div>
            <h1 className='text-6xl text-white text-center font-bold pt-20 pb-8'>Services</h1>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => (
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-56 rounded-lg' src={service.image_url} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {service.service_name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='text-center py-12'>
                <Link to='/allServices' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-success">See All</Link>
            </div>
        </div>
    );
};

export default Services;