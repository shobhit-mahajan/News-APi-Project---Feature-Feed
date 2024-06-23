import React, { useEffect, useState } from 'react'

export const Pagination = ({showperpage,onchangepagination,total}) => {
               const [counter,setcounter] = useState(1);
               useEffect(()=>{
                              const value = showperpage*counter;
                              onchangepagination(value-showperpage,value)
               },[counter])
               const onchangebutton = (type) =>{
                              if(type==='prev'){
                                             if(counter ===1){
                                                            setcounter(1)
                                                            alert("Your are up to date now")
                                             }else{
                                                            setcounter(counter-1)
                                             }
                              }else if(type==='next'){
                                             if(Math.ceil(total/showperpage)===counter){
                                                            setcounter(counter);
                                                            alert("Your are up to date now")
                                             }else{
                                                            setcounter(counter+1)
                                             }
                                             
                              }
               }
  return (
    <div className='w-1/2 text-center my-5 flex justify-between '>
             <span className='bg-blue-800 text-white px-3 py-2 cursor-pointer hover:bg-blue-500'onClick={()=>onchangebutton("prev")}>Previous</span>
             <span className='bg-blue-800 text-white px-3 py-2 cursor-pointer hover:bg-blue-500'onClick={()=>onchangebutton("next")}>Next</span>
    </div>
  )
}
