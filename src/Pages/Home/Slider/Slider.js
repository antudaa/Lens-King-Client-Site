import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';

const Slider = () => {



    return (
        <div className="carousel w-full my-10 rounded-lg">
            <div id="slide1" className="carousel-item relative w-full slider-img">
                <img alt='' src="https://themes.themegoods.com/photography/demo1/wp-content/uploads/2015/06/photo-1418225043143-90858d2301b4.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full slider-img">
                <img alt='' src="https://wiso.foxthemes.me/wp-content/uploads/2018/04/michal-grosicki-473054.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full slider-img">
                <img alt='' src="https://wiso.foxthemes.me/wp-content/uploads/2018/04/petr-ovralov-239614.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full slider-img">
                <img alt='' src="https://wiso.foxthemes.me/wp-content/uploads/2018/05/stock-photo-203371029.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;