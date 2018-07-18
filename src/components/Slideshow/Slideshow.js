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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
        <Slider {...settings} className='slider'>
          <div>
           <img src={slideshow1} />
          </div>
          <div>
           <img src={slideshow2} />
          </div>
          <div>
           <img src={slideshow3} />
          </div>
          <div>
           <img src={slideshow4} />
          </div>
        </Slider>
    );
  }
}



