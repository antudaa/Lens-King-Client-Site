import React from 'react';
import DynamicTitle from '../../Hooks/DynamicTitle';
import About from './About/About';
import Slider from './Slider/Slider';

const Home = () => {

    DynamicTitle("Home");

    return (
        <div>
            <Slider></Slider>
            <About></About>
        </div>
    );
};

export default Home;