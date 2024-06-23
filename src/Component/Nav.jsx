import React, { useContext, useState } from 'react'
import { IoSearch } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa6";
import './Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
 

  return (
               <>
    <div className='flex w-full border justify-between mx-1 px-2 md:px-10 py-7 items-center shadow-sm flex-wrap overflow-hidden'>
               {/* logo */}
               
               <div className='text-[1.8rem] text-center b '>
               <Link to="/"><h2>Feature<span className='text-blue-800 font-bold'>Feed</span><span className='text-[2.5rem] text-orange-600'>.</span></h2> </Link>
               </div>
              
              
               {/* searchbar */}
               <div className='flex flex-row border-2 px-5 py-2 border-1 border-slate-200 bg-white items-center rounded-sm'>
                            <form> <input type='search' placeholder='search here...' className='w-60 md:w-80 outline-none'></input></form>
                              <IoSearch className='cursor-pointer text-lg'/>
               </div>
               {/* favourite */}
               <div className='fav flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-800 mt-2 md:mt-0'>
                              <p className='px-2'>Favourite</p><FaRegHeart/> 
               </div>
    </div>
               {/* // categories section */}
               <div className='border-b-2' >
                              <ul className='flex flex-col md:flex-row text-center justify-evenly items-center py-3'>
                                            <li className='cursor-pointer hover:text-blue-600'>
                                            <Link to="/general">
                                                            General
                                            </Link>
                                             </li>
                                            
                                             <li className='cursor-pointer hover:text-blue-600'>
                                             <Link to='/science' >Science</Link>
                                             </li>      
                                             <li className='cursor-pointer hover:text-blue-600'>
                                             <Link to='/sports' >Sports</Link>
                                             </li>    
                                             <li className='cursor-pointer hover:text-blue-600'>
                                             <Link to='/business' >Business</Link>
                                             </li>      
                                             <li className='cursor-pointer hover:text-blue-600'>
                                             <Link to='/technology' >Technology</Link>
                                             </li>   
                                             <li className='cursor-pointer hover:text-blue-600'>
                                             <Link to='/health' >Health</Link>
                                             </li>     
                                             <li className='cursor-pointer hover:text-blue-600'>
                                                          <Link to='/entertainment' >Entertainment</Link>
                                             </li>    
                                                             
                              </ul>
               </div>
               </>
  )
}

export default Nav