import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DynamicTitle from '../../Hooks/DynamicTitle';
import ServiceCard from './ServiceCard';

const AllServices = () => {

    DynamicTitle('Services');

    const services = useLoaderData();


    return (
        <div>
            <h1 className='text-center text-5xl my-16 font-bold'>Our Services</h1>

            <div className='gird grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 pb-16'>
                {
                    // services.map((service) => <ServiceCard
                    //     key={service._id}
                    //     service={service}
                    // >
                    // </ServiceCard>)

                    services.map((service) => 
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={service.image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {service.service_name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{service.details}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>)
                }
            </div>

        </div>
    );
};

export default AllServices;