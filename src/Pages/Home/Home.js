import React from 'react';
import DynamicTitle from '../../Hooks/DynamicTitle';
import About from './About/About';
import MoreSkills from './MoreSkills/MoreSkills';
import Skills from './Skills/Skills';
import Slider from './Slider/Slider';

const Home = () => {

    DynamicTitle("Home");

    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Skills></Skills>
            <MoreSkills></MoreSkills>
        </div>
    );
};

export default Home;