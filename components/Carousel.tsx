'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";



const Carousel = (props: any) => {
  const { data } = props
  const [hovered, setHovered] = useState(null);
  const [banners, setBanners] = useState(data.items[0].shows.slice(0, 5))

  const handleMouseOver = (index: any) => {
    setHovered(index);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };



  return (
    <section className=" relative  overflow-hidden  " >
      <Marquee className='m-0 p-0' speed={70} pauseOnHover={true}>
        <div id='image-container' className=" flex gap-[4vmin] items-center justify-center  max-lg:m-0 overflow-hidden" >
          {banners.map((item: any, index: any) => (
            <div
              key={`carousel-item-${index} `}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              className={` relative flex-none w-[40vmin] h-[60vmin] carousel-shadow group box overflow-hidden ${index == 4 ? 'max-sm:mr-[20px] mr-[36px]' : ''} ${hovered !== null && hovered !== index ? 'blurred ' : ''}`}>

              <Image

                className=" h-full w-full object-cover object-right-center  z-4 transition-filter duration-300"
                src={item.image}
                width={900}
                height={900}
                alt={item.title}
                draggable={false}
              />
              <div id="overlay" className={`hidden group-hover:block group-hover:slide absolute w-[100.2%] h-full z-0 top-0 left-0   bg-carousel-gradient overflow-hidden`}>
                <div className={` max-sm:h-[22%] max-sm:bottom-2 pl-2 w-full h-[100px] flex absolute  bottom-5 items-center overflow-hidden ${index === 0 ? 'left-2' : ''} ${index === 0 ? 'left-4' : ''}`}>

                  <Image

                    className="max-sm:w-[20%] cursor-pointer "
                    src='/icons/play.svg'
                    width={65}
                    height={65}
                    alt='play icon'
                    draggable={false}
                  />
                  <div className=' max-sm:h-[75%] max-sm:w-[70%] max-sm:ml-2 border-1 w-[60%]  ml-4 h-[70%]'>
                    <h1 className="max-sm:text-xl truncate   shadow-lg uppercase text-white font-bold font-mono text-4xl ">
                      {item.title}                   
                       </h1>
                    <p className=" max-sm:text-xs  shadow-lg text-white font-grotesk  overflow-hidden" >
                      {item.author.name}
                      </p>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>



        
      </Marquee>
      <div className="absolute inset-0 pointer-events-none z-5">
          <div className="h-full w-full bg-custom-gradient"></div>
        </div>
    </section>

  )

}
export default Carousel;


