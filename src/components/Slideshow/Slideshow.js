import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slideshow.css';
import slideshow1 from './Slides/slideshow_1.jpg';
import slideshow2 from './Slides/slideshow_4.jpg';
import slideshow3 from './Slides/slideshow_5.jpg';
import slideshow4 from './Slides/slideshow_6.jpg';


export default class Slideshow extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      autoplay: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplaySpeed: 4000
    };
    return (
        <Slider {...settings} className='slider'>
          <div>
           <img src={slideshow1} alt='tiny-arcade'/>
          </div>
          <div>
           <img src={slideshow2} alt='tiny-saber'/>
          </div>
          <div>
           <img src={slideshow3} alt='tiny-gps'/>
          </div>
          <div>
           <img src={slideshow4} alt='tiny-iot'/>
          </div>
        </Slider>
    );
  }
}



