import React from 'react'
import Gallery from '../components/GalleryImage'
import HotelFeatures from '../components/HotelFeatures'
import NearbyData from '../components/NearbyData'
import Slider from '../components/Slider'
import {data} from '../utils/data'

const Home = () => {
  return (
    <div>
      <Slider />
      <NearbyData data={data} />
      <HotelFeatures />
    </div>
  )
}

export default Home