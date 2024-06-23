import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Pagination } from './Pagination';

export const NewsCart = ({cat,searchQuery}) => {
               const [news,setnews] = useState([]);
              const [showperpage,setshowperpage]=useState(6)
               const [pagination,setpagination] = useState({
                start:0,
                end:showperpage
               })
               const onchangepagination = (start,end)=>{
                  setpagination({start:start,end:end})
               }
               const apikey = '7638e358d85641bd86073172b28b0918';
                const url = cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${apikey}`:
                `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`
                console.log(searchQuery)
                const fetchNewsApi = async(api) =>{
                              console.log(api)
                              const response = await fetch(api);
                              const newData = await response.json();
                              setnews(newData.articles);
                              
                              
                }
               useEffect(()=>{
                      fetchNewsApi(url)        
               },[cat])
              
  return (

    <div>
               <h2 className='text-[1.8rem] my-4 underline'>{cat?cat:"Top Heading"}</h2>
                              <div className='card flex flex-wrap justify-center items-center'>
               {news.slice(pagination.start,pagination.end).map((news,id)=>{
                            return(  
                              
                              <div key={id}className='cardcontent border-2 border-gray-200 transition-all shadow-md hover:shadow-2xl w-[350px] h-[550px] text-center p-4 overflow-hidden m-2 relative'>
                              
                                             <div className='absolute top-5 right-5 z-10'>
                                             <svg width="50px" height="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className='font-extrabold fill-white hover:fill-red-600 cursor-pointer'><path  d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>

                                             </div>
                                             <img src={news.urlToImage || "https://st.depositphotos.com/1006899/3776/i/450/depositphotos_37765339-stock-photo-news.jpg"} className='w-full rounded-md transition-all hover:opacity-80'></img>
                                             <h2 className='pt-1 font-bold hover:underline'>{news.title}</h2>
                                             <p className='text-[0.8rem] py-3'>{news.description}</p>
                                             <a href={news.url} className='bg-blue-800 text-white px-3 py-1'>Read More</a>
                                             <div className='source text-left text-[0.8rem] text-gray-500 py-3'>
                                                            <p>Published At: {news.publishedAt}</p>
                                                            <h4>Source: {news.source.name}</h4>
                                             </div>
                               </div>
                               
                                )
               })}
            
               {cat?<Pagination showperpage={showperpage} onchangepagination={onchangepagination} total= {news.length}/>:
                <Link to='/general' className='text-center text-[1rem] w-full my-4 hover:underline hover:text-blue-500'>View More</Link>
               }
               
               </div>
    </div>
  )
}
