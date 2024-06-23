import React from 'react'
import Feature  from '../Component/Feature'
import Weather from '../Component/Weather';
import { NewsData } from "./NewsData";


export const Header = () => {
  

  
  return (
    <div>

   
    <div className='flex flex-col md:flex-row gap-3 my-5 overflow-x-hidden'>
      {/* Feature Sec */}
      <div className='w-full h-4/6 md:w-11/12  '>
      <Feature/>

      </div>
      {/* weather report */}
      <div className='w-full  md:w-6/12 '>
        <Weather/>
      </div>
    </div>
    <NewsData/>
    </div>
  )
}
