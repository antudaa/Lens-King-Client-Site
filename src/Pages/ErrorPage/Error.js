import React from 'react';
import DynamicTitle from '../../Hooks/DynamicTitle';
import emoji from '../../images/shocked.png';

const Error = () => {

    DynamicTitle("Error");

    return (
        <div>
            <div className='my-16 text-center'>
                <img className='mx-auto' style={{height:'200px', width:'200px'}} src={emoji} alt="Images Not Fond..." />
                <h1 className='text-6xl font-semibold'>404</h1>
                <p>Something went wrong...</p>
            </div>
        </div>
    );
};

export default Error;