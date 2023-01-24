import React from 'react';
import './Slider.css';

const Slider = () => {



    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full' src={`https://i.ibb.co/ZG2GwT7/Lens-King-Banner.jpg`} alt='' />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h2 className='text-3xl md:text-5xl font-bold'>Welcome to Lens King</h2>
                    
                    <p className='my-6 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'>See the beauty of the world through my lens. We help you to capture your priceless emotions. <br /> I offer you a good service at an affordable price to capture your moments. I hope my skill and experience will impress you. Feel free to check my services and if you like it please give a review . Thank you . </p>
                    <div className='my-4'>
                        <button className='border text-white border-gray-300 py-2 px-5 hover:bg-white hover:text-black hover:border-none rounded-sm'>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;