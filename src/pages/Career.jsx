import React from 'react'
import Finder from '../components/Finder'
import { jobs } from '../utils/jobs'



const Career = () => {
  return (
    <>
          <h1 className="text-center justify-start items-center mt-3 text-5xl font-serif font-bold">Jobs</h1>
    <div className="flex space-x-6 justify-center">

    {
      jobs.map((jobs) => 
      <Finder jobs={jobs} key={jobs.id}/>
      )
    }
    </div>
    </>
  )
}

export default Career
