import React from 'react'
import Activities from '../components/Activities'
import HotelFeatures from '../components/HotelFeatures'
import NearbyData from '../components/NearbyData'
import Room from '../components/Room'
import Slider from '../components/Slider'
import { ActivitiesData } from '../utils/ActivitiesData'
import {data} from '../utils/data'
import ActivityPack from '../components/ActivityPack'
import About from '../components/About'

import AboutComp from '../components/AboutComp'

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutComp />

      <Room />
      <NearbyData data={data} />
      <HotelFeatures />
      <Activities activity={ActivitiesData} />
      <ActivityPack/>
    </div>
  )
}

export default Home