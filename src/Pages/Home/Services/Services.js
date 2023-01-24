import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Services = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('https://lens-king-server.vercel.app/homeServices')
            .then(res => res.json())
            .then(data => setService(data))
            .catch(error => console.log(error.message));
    }, [])
    


    return (
        <div>
            <h1 className='text-3xl md:text-5xl font-bold text-center pt-20 pb-8'>Services</h1>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Card
                    key={service._id}
                    service={service}
                    ></Card>)
                }
            </div>
            <div className='text-center py-12'>
                <Link to='/allServices' className="btn btn-outline btn-success">See All</Link>
            </div>
        </div>
    );
};

export default Services;