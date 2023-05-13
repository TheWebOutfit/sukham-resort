import React from 'react'
import ActivitiesStruct from './ActivitiesStruct'

const Activities = ({activity}) => {
  return (
      <div className='bg-gradient-to-r from-[#DCD6F7] via-[#BBE1FA]  to-[#BBDED6]'>
          <h1 className='text-4xl font-bold text-center p-4'>
                Activites
            </h1>
    <div className='wrapp w-3/5 mx-auto text-center h-4/5 py-9'>
        {
            activity.map((activity) =>( 
                <ActivitiesStruct 
                activity={activity} 
                key={activity.id}   
                />
                ))
            }
    </div>
    </div>
  )
}

export default Activities