import React from 'react';
import './Left_content.css';
import Img1 from '../../../assets/book.svg';
import Img2 from '../../../assets/clock.svg';
import Img3 from '../../../assets/live.svg';
import Img4 from '../../../assets/degree.svg';
import Img5 from '../../../assets/ads.svg';

function Left_content() {
  return (
    <div className='col-md-6'>
        <h1 className='titel'>Access curated courses worth ₹ 
        <span className='close-price'>18,500</span> 
        at just 
        <span className='price'> ₹ 99</span> 
        per year!</h1>
        <div className='offer-list'>
          <div className='list d-flex align-items-center'>
            <div className='icon'>
              <img src={Img1} alt='' />
            </div>
            <p><span>100+ </span>Job relevant courses</p>
          </div>
          <div className='list d-flex align-items-center'>
            <div className='icon'>
              <img src={Img2} alt='' />
            </div>
            <p><span>20,000+ </span>Hours of content</p>
          </div>
          <div className='list d-flex align-items-center'>
            <div className='icon'>
              <img src={Img3} alt='' />
            </div>
            <p><span>Exclusive </span>webinar access</p>
          </div>
          <div className='list d-flex align-items-center'>
            <div className='icon'>
              <img src={Img4} alt='' />
            </div>
            <p>Scholarship worth<span> ₹94,500</span></p>
          </div>
          <div className='list d-flex align-items-center'>
            <div className='icon'>
              <img src={Img5} alt='' />
            </div>
            <p><span>Ad Free </span>learning experience</p>
          </div>
        </div>
    </div>
  )
}

export default Left_content
