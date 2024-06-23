import React from 'react'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { NewsCart } from '../Component/NewsCart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div className='overflow-x-hidden'>
   

   
               <BrowserRouter>
               <Navbar/>
                
               <Routes>
                  <Route exact path='/' element={<Header/>}/>
                  <Route exact path='/general' element={<NewsCart cat= "general"/>}/>
                  <Route exact path='/science' element={<NewsCart cat= "science"/>}/>
                  <Route exact path='/sports' element={<NewsCart cat= "Sports"/>}/>
                  <Route exact path='/business' element={<NewsCart cat= "Business"/>}/>
                  <Route exact path='/technology' element={<NewsCart cat= "technology"/>}/>
                  <Route exact path='/health' element={<NewsCart cat= "Health"/>}/>
                  <Route exact path='/entertainment' element={<NewsCart cat= "Entertainment"/>}/>
               </Routes>
             
    </BrowserRouter>
     
    </div>
  )
}

export default Mainpage