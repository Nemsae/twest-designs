import React from 'react';
import Slider from 'react-slick';

import "../../../../dist/assets/camden/camden_interior1";
import camdenMasterBath from './camden_masterBath.jpg';

export default class SimpleSlider extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <div><h3>[OUTSIDE] Chambers, Oakland CA</h3></div>
        <div><h3>[INSIDE] Chambers, Oakland CA</h3></div>
        <div><h3>[OUTSIDE] Camden, Oakland CA</h3></div>
        {/* <div><h3>[INSIDE] Camden, Oakland CA</h3></div> */}
        <div><img src={camdenMasterBath} alt="Camden Master Bath0000"/></div>
        <div><img src="./camden_masterBath.jpg" alt="Camden Master Bath"/></div>
        <div><img src="../../../../dist/assets/camden_interior1" alt="Camden Living Room"/></div>
        <div><img src="http://i.imgur.com/TOCfkRg.jpg" alt="Camden Living Room"/></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
}
