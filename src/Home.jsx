import React from 'react'
import Slider from './components/slider/Slider';
import Category from './components/category-one/Category';
import Discount from './components/discount-sec/Discount';
import Feature from './components/feature-one/Feature';
import ProIphone from './components/promotion-iphone/ProIphone';
import Mobile from './components/mobile/Mobile';
import ProLaptop from './components/promotion-laptop/ProLaptop';
import Laptop from './components/laptop/Laptop';
import ProAirpods from './components/promotion-airpods/ProAirpods';
import AirPods from './components/airpods/AirPods';
import DisDevices from './components/discount-devices/DisDevices';
import ProDisTags from './components/Pro-dis-tags/ProDisTags';
import FeatureMulti from './components/feature-multi/FeatureMulti';
import ProFiveStars from './components/Pro-five-stars/ProFiveStars';
import CustomerReviews from './components/customer-reviews/CustomerReviews';
import ConInfo from './components/con-info/ConInfo';
import HeaderCart from './components/header-cart/HeaderCart';
import Header from './components/header/Header';

const Home = () => {

  return (
    <>
    <Header/>
      <Slider />
      <Category />
      <Discount />
      <Feature />
      <ProIphone />
      <Mobile />
      <ProLaptop />
      <Laptop />
      <ProAirpods />
      <AirPods />
      <DisDevices />
      <ProDisTags />
      <FeatureMulti />
      <ProFiveStars />
      <CustomerReviews />
      <ConInfo />
    </>
  )
}

export default Home;