import React from 'react'
import Activities from '../components/Activities'
import HotelFeatures from '../components/HotelFeatures'
import NearbyData from '../components/NearbyData'
import Slider from '../components/Slider'
import { ActivitiesData } from '../utils/ActivitiesData'
import {data} from '../utils/data'

const Home = () => {
  return (
    <div>
      <Slider />
      <NearbyData data={data} />
      <HotelFeatures />
      <Activities activity={ActivitiesData} />
    </div>
  )
}

export default Home