import React from 'react';
import Slider from 'react-slick';

import camdenLivingRoom from '../../../../dist/assets/camden/camden_livingRoom.jpg';
import camdenMasterBath from '../../../../dist/assets/camden/camden_masterBath.jpg';

//  http://stackoverflow.com/questions/31397137/img-tag-not-working-with-relative-path-in-src
//  <div><img src="http://localhost/dist/assets/camden/camden_livingRoom.jpg" alt="Camden Living Room00"/></div>

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
        <div><img src={camdenLivingRoom} alt="Camden Living Room"/></div>
        <div><img src={camdenMasterBath} alt="Camden Master Bath"/></div>
        <div><h3>[OUTSIDE] Chambers, Oakland CA</h3></div>
        <div><h3>[INSIDE] Chambers, Oakland CA</h3></div>
        <div><h3>[OUTSIDE] Camden, Oakland CA</h3></div>
        <div><h3>[INSIDE] Camden, Oakland CA</h3></div>
      </Slider>
    );
  }
}
