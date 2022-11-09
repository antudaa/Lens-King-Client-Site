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

            <div className='grid grid-cols-1 gap-10 pb-16'>
                {
                    services.map((service) => <ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>)

                }
            </div>

        </div>
    );
};

export default AllServices;