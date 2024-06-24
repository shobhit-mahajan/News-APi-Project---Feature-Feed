import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Header.css'; // Import your CSS file for styling

const Feature = () => {
  const [images, setImages] = useState([]); // Array to store image data
  const [slideIndex, setSlideIndex] = useState(0)




  useEffect(() => {
    // Fetch image data (replace with your actual image data source)
    const fetchImageData = async () => {
      const apikey = '7638e358d85641bd86073172b28b0918';
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`
        const newsdata = await fetch(url);
        const newsapidata = await newsdata.json()
        const Data = newsapidata.articles
  
      setImages(Data);
    };

    fetchImageData();
  }, []);
  const handleNextSlide = () => {
   //setSlideIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to first
   setSlideIndex(slideIndex===images.length-1?0:slideIndex+1); 
  };

  const handlePreviousSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    //setSlideIndex(slideIndex===images.length-1?0:slideIndex-1); // Handle negative index
  };
  useEffect(()=>{
    setTimeout(()=>{
      setSlideIndex(slideIndex===images.length-1?0:slideIndex+1)
    },3000)
  })
  console.log(images.length)
  return (
    <div className='slider-container'>
     <div className='sliderimg w-full  relative'>
     {images.map((image, index) => (
     
       <div key={index}
          className={slideIndex === index || (slideIndex === images.length - 1 && slideIndex === index-1) ? "slide active" : "slide hidden"}>
          <img src={image.urlToImage || "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} alt={image.description} className='image'/>
          <div className="content absolute bottom-0 bg-gray-400/55 text-center backdrop-blur-sm  w-full h-1/2 md:h-2/6  ">
          <a href={image.url} className='p-1 font-extrabold'>{image.title}</a>
            <p >{image.description}</p>
            
          </div>
        </div>
      
      ))}
      <button className="prev-button" onClick={handlePreviousSlide}>
        <FaArrowLeft />
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        <FaArrowRight />
      </button>
    </div>
  {/* <FaArrowRight className='indicator right' onClick={nextslide}/> */}
  </div>
    
  )
}

export default Feature
