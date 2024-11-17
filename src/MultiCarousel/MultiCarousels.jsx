import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import carousel from '../MultiCarousel/MultiCarousel'
import { FaArrowRight } from 'react-icons/fa6';
import { FiVideo } from 'react-icons/fi';
import Slider1 from "../assets/Home/Slider/bedroomInnerPeace.png"
import Slider2 from "../assets/Home/Slider/cupboard.png"
import Slider3 from "../assets/Home/Slider/kitchen.png"
const MultiCarousels = () => {
          let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
            autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
         responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      
    };
  return (
    <div>
            
        <div className='py-5 pr-8' >
               <Slider ref={slider => {
                  sliderRef = slider
                }} {...settings}>

                      <div className='xl:pt-52 lg:pt-32 md:pt-24 sm:pt-20 pt-20 '>

                        <h1 className='xl:text-4xl text-2xl sm:text-xl  md:text-3xl lg:text-3xl font-extrabold pb-3 '>50+ Beautiful rooms inspiration</h1>
                        <p className='font-normal text-sm xl:text-lg sm:text-xs md:text-xs lg:text-sm pb-3'>Lorem dipisicing elit. Ipsum quasi iusto eaque
                            quo architecto ut laborum laboriosam doloribus doloremque placeat.</p>
                        <button className='bg-[#ce954b]  text-white py-4 px-10 text-sm font-normal'>Explore More</button>

                    </div>

                    <div className='relative  '>
                        <div className=' h-full relative px-4'>
                            <img src={Slider1} className='w-full h-full' alt=""/>

                        </div>

                        <div className='flex absolute bottom-4 left-5 '>
                            <div className='bg-white px-5 py-5 opacity-75'>
                                <p className='text-xs leading-5'>
                                    01 Bed Room
                                </p>
                                <h1 className='font-extrabold text-3xl'>
                                    inner Peace
                                </h1>
                            </div>
                            <div className='bg-[#c1a075] py-2 text-white px-2 h-8 mt-14'>
                                <FaArrowRight className=''/>
                            </div>

                        </div>

                    </div>
                    <div className='h-full'>
                        <img src={Slider2} className='w-full h-full' alt=""/>
                    </div>
                    <div className='px-4 h-full'>
                        <img src={Slider3} alt="" className='w-full h-full'/>
                    </div>
                    <div className='px-4 h-full'>
                        <img src={Slider1} alt="" className='w-full h-full'/>
                    </div>
                    <div className='px-4 h-full'>
                        <img src={Slider2} alt="" className='w-full h-full'/>
                    </div>
               
                 
                </Slider>
        </div>
    </div>
  )
}

export default MultiCarousels
