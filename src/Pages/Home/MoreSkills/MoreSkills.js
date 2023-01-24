import React from 'react';
import light from '../../../images/light.png';
import focusing from '../../../images/focusing.png';
import professional from '../../../images/professional.png';
import equipment from '../../../images/Equipment.png';
import ultraHd from '../../../images/ultra hd.png';
import vision from '../../../images/uique vission.png';

const MoreSkills = () => {
    return (
        <div className=" bg-base-200 pb-16">
            <h1 className='py-10 text-3xl md:text-5xl font-bold text-center'>Why Choose Me?</h1>
            <div>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                    <div className='text-center'>
                        <div className="radial-progress text-yellow-700" style={{ "--value": "100", "--size": "6rem", "--thickness": "2px" }}> <img style={{width: "60px"}} className='text-white' src={light} alt="" /> </div>
                        <h1 className='font-bold my-4 text-xl text-white'>LIGHT COMPOSURE</h1>
                        <div>The world without photography will be <br/> meaningless to us if there is no light.</div>
                    </div>
                    <div className='text-center'>
                        <div className="radial-progress text-yellow-700" style={{ "--value": "100", "--size": "6rem", "--thickness": "2px" }}> <img style={{width: "60px"}} className='text-white' src={professional} alt="" /></div>
                        <h1 className='font-bold my-4 text-xl text-white'>PROFESSIONAL SKILLS</h1>
                        <div>The world without photography will be <br/> meaningless to us if there is no light.</div>
                    </div>
                    <div className='text-center'>
                        <div className="radial-progress text-yellow-700" style={{ "--value": "100", "--size": "6rem", "--thickness": "2px" }}><img style={{width: "60px"}} className='text-white' src={equipment} alt="" /></div>
                        <h1 className='font-bold my-4 text-xl text-white'>PERFECT EQUIPMENT</h1>
                        <div>The world without photography will be <br/> meaningless to us if there is no light.</div>
                    </div>
                    <div className='text-center'>
                        <div className="radial-progress text-yellow-700" style={{ "--value": "100", "--size": "6rem", "--thickness": "2px" }}><img style={{width: "60px"}} className='text-white' src={ultraHd} alt="" /></div>
                        <h1 className='font-bold my-4 text-xl text-white'>ULTRA HD</h1>
                        <div>The world without photography will be <br/> meaningless to us if there is no light.</div>
                    </div>
                    <div className='text-center'>
                        <div className="radial-progress text-yellow-700" style={{ "--value": "100", "--size": "6rem", "--thickness": "2px" }}><img style={{width: "60px"}} className='text-white' src={vision} alt="" /></div>
                        <h1 className='font-bold my-4 text-xl text-white'>UNIQUE VISION</h1>
                        <div>The world without photography will be <br/> meaningless to us if there is no light.</div>
                    </div>
                    <div className='text-center'>
                        <div className="radial-progress text-yellow-700" style={{ "--value": "100", "--size": "6rem", "--thickness": "2px" }}><img style={{width: "60px"}} className='text-white' src={focusing} alt="" /></div>
                        <h1 className='font-bold my-4 text-xl text-white'>FOCUSING KNOWLEDGES</h1>
                        <div>The world without photography will be <br/> meaningless to us if there is no light.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreSkills;