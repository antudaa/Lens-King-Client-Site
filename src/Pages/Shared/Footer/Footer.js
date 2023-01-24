import React from 'react';
import logo from '../../../images/newLogo.png';



const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#2E4053] text-[#D6EAF8]">
            <div>
                <div className='w-16 h-16 '>
                <img src={logo} alt="" />
                </div>
                <p className="font-bold">
                    LENS KING <br />Providing reliable service since 2008
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;