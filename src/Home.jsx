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
import ConInfo from './components/con-info/ConInfo';

const Home = ()=> {
  return (
    <>
      <Slider />
      <Category />
      <Discount />
      <Feature />
      <ProIphone />
      <Mobile />
      <ProLaptop/>
      <Laptop/>
      <ProAirpods/>
      <AirPods/>
      <DisDevices/>
      <ProDisTags/>
      <FeatureMulti />
      <ConInfo/>
    </>
  )
}

export default Home;