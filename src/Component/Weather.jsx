import React, { useEffect, useState } from 'react'
import { Modal } from './Modal';
import cloud from "../Images/cloud.gif"
import {Horoscopedata} from './Horoscopedata.json';
import './Weather.css'
const Weather = () => {
  const [showModal,setshowModal] = useState(false);
  const[sunsign,setsunsign]=useState('aries')
  const [zodicdata,setzodicdata]  =useState()
  const show = (names) =>{
    setshowModal(true);
    setsunsign(names)
  }
  let api = `http://sandipbgt.com/theastrologer/api/horoscope/${sunsign}/today`;
  
 
  const fetchdata = async(url) =>{
                  
                 try {
                   const res = await fetch(url);
                   const data = await res.json();
                  const  horoscopezodic = data.horoscope;
                  setzodicdata(horoscopezodic)
                  //  setsunsign(itemname)
                  
             
                 } catch (error) {
                   alert(error)
                 }
               }
              
               useEffect(()=>{
                fetchdata(api)
              },[sunsign])
  const [location,setlocation]=useState({
    name :'',
    temp:''
  })
  async function fetchweather(latitude,longitude){
let APIkey = "02400b410d6e40100634bb3fbf53a626";
let weatherapi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
    const res = await fetch(weatherapi)
    const dat = await res.json()
    const cityname = dat.name
    const temp = dat.main.temp;
    const celtemp = Math.floor((temp ) - 273.15)
    setlocation({name:cityname,temp:celtemp})
  
  }
  function success(pos){
    var cords = pos.coords;
    let latitude = cords.latitude;
    let longitude = cords.longitude;
    
    fetchweather(latitude,longitude)
  }
  function error(err){
    alert(err)
  }
  useEffect(()=>{
    if(navigator.geolocation){
      navigator.permissions
      .query({name:"geolocation"})
      .then(function(result){
        
        if(result.state === 'granted'){
          navigator.geolocation.getCurrentPosition(success,error)
        }
        else if(result.state === 'prompt'){
          navigator.geolocation.getCurrentPosition(success,error)
        }
        else if(result.state === 'denied'){
          alert("Please allow location")
        }
      });
    }else{
      alert("Geolocation is not availabe on your device")
    }
  },[])

  
 

  return (
    <>
    <div>
    <div className='weather_card w-full rounded-lg bg-white shadow-lg'>
    <div className='card  flex justify-evenly items-center text-center'>
        <img className='w-20' src={cloud}></img>
        <h4>{location.name}</h4>
        <h2 className='font-bold'>{location.temp}°C</h2>
      </div>
      <div className='flex jusitfy-center items-center '>

        <a href='https://weather.com/en-IN/weather' className='mx-auto pb-3 text-blue-500'>More on Weather</a>
      </div>
    </div>
     <div className='horoscope_card w-full flex flex-col items-center h-[450px] mt-4 overflow-y-scroll '>
          
            {Horoscopedata.map((items)=>{
             return <div className='zodic_card w-5/6 bg-indigo-200 my-3 text-center  py-2 cursor-pointer shadow-lg ' key={items.id}>
             <h2 className='text-[1.8rem]'>{items.symbol}</h2>
            <h2 className='uppercase font-bold'>{items.name}</h2>
            <p>{items.date}</p>
            <p className='text-blue-600' onClick={()=>show(items.name)} >Read</p>
            </div>
            
            })}
            {showModal && <Modal onClose={()=>setshowModal(false)} data={zodicdata}/>}
        
         
         
         
     </div>
          
    </div>
    </>
  )
}

export default Weather