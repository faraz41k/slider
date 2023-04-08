import React, { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


function App() {

  const sliderImages = [
    {
      url:'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80'
    },

    {
      url:'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80'
    },

    {
      url:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
    },

    {
      url:'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }

   
  ]

  const [index, setIndex]= useState(0);

  const prevSlide = ()=> {
    const   isFirstSlide = index === 0;
    const   newIndex = isFirstSlide ? sliderImages.length - 1 : index -1
    setIndex(newIndex)
  }

  const nextSlide = ()=> {
    const   isLastSlide = index === sliderImages.length -1;
    const   newIndex = isLastSlide ? 0 : index +1
    setIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
      setIndex(slideIndex)
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div style={{backgroundImage: `url(${sliderImages[index].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer" >
        <BsChevronCompactLeft  onClick={prevSlide} size={30}/>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 bg-black/20 text-white cursor-pointer" >
        <BsChevronCompactRight  onClick={nextSlide} size={30}/>
      </div>

      <div className="flex top-4 justify-center py-2">
          {
            sliderImages.map((slide, slideIndex)=>(
              <div 
              
                onClick={()=> goToSlide(slideIndex)} 
                key={slideIndex} 
                className="text-2xl cursor-pointer">
                  <RxDotFilled/> 
              </div>
            ))
          }
      </div>
    </div>
  );
}

export default App;


// button css 

/// position : absolute , top: 50% , translate-x : 0px , translate-y : -50% , right : 20px , font-size : 24px , line-height: 32px, padding: 8px; 


