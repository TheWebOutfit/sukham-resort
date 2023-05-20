import React from 'react'
import { AboutData } from '../utils/AboutData'
import About from './About'
const AboutComp = () => {
  return (
    <div>
      {
        AboutData.map((data)=>
            <About data={data} key={data.id}/>
        )
      }
    </div>
  )
}

export default AboutComp
