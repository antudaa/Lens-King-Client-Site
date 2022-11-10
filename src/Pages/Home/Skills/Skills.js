import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';


const Skills = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 p-8'>
                        <h1 className='my-10 text-4xl text-start text-white font-bold'>My Skills</h1>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <div className="radial-progress text-yellow-700" style={{ "--value": "90", "--size": "4rem", "--thickness": "2px" }}><p className='text-white'>90%</p></div>
                                <h1 className='font-bold my-4 text-xl text-white'>PORTRAITS</h1>
                                <div>The world without photography will be meaningless to us if there is no light.</div>
                            </div>
                            <div>
                                <div className="radial-progress text-yellow-700" style={{ "--value": "80", "--size": "4rem", "--thickness": "2px" }}> <p className='text-white'>80%</p> </div>
                                <h1 className='font-bold my-4 text-xl text-white'>WEEDING</h1>
                                <div>The world without photography will be meaningless to us if there is no light.</div>
                            </div>
                            <div>
                                <div className="radial-progress text-yellow-700" style={{ "--value": "95", "--size": "4rem", "--thickness": "2px" }}><p className='text-white'>95%</p></div>
                                <h1 className='font-bold my-4 text-xl text-white'>STUDIO</h1>
                                <div>The world without photography will be meaningless to us if there is no light.</div>
                            </div>
                            <div>
                                <div className="radial-progress text-yellow-700" style={{ "--value": "75", "--size": "4rem", "--thickness": "2px" }}><p className='text-white'>75%</p></div>
                                <h1 className='font-bold my-4 text-xl text-white'>FASHION</h1>
                                <div>The world without photography will be meaningless to us if there is no light.</div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <PhotoProvider>
                            <PhotoView src='https://wiso.foxthemes.me/wp-content/uploads/2018/04/josh-applegate-211348.jpg'>
                                <img className="max-w-sm  rounded-lg shadow-2xl" src='https://wiso.foxthemes.me/wp-content/uploads/2018/04/josh-applegate-211348.jpg' alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;