import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                    <img alt='' src="https://wiso.foxthemes.me/wp-content/uploads/2018/04/sam-burriss-435641-e1526906975869.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">My name is Alexa, <br />
                        I'm a photographer.
                        </h1>
                        <p className="py-6 text-xl">The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</p>

                        <p className="py-6 text-lg">My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!</p>
                        <Link>Read More >></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;