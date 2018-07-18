import React, { Component } from 'react';
import Slider from 'react-slick';


export default class Slideshow extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <img src='Slides/slideshow_1' />
          </div>
          <div>
            <img src='Slides/slideshow_4' />
          </div>
          <div>
            <img src='Slides/slideshow_5' />
          </div>
          <div>
            <img src='Slides/slideshow_6' />
          </div>
        </Slider>
      </div>
    );
  }
}



