import React from 'react'
import AboutPage from './AboutPage'
import { AboutData } from '../utils/AboutData'

const AboutPageComp = () => {
  return (
    <div>
      {
        AboutData.map((data)=>
        <AboutPage data={data} key={data.id}/>
    )
      }
    </div>
  )
}

export default AboutPageComp
