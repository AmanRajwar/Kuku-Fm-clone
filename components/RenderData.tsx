import React, { useEffect } from 'react';
import Image from 'next/image';
interface RenderDataProps {
    title: string,
    data: any[] | null; // Adjust this type based on the actual structure of your data
}

const RenderData: React.FC<RenderDataProps> = ({ title, data }) => {
    if (!data) {
        return null;
    }

    // Add your rendering logic here if data exists
    return (
        <div>
            <h1 className=' font-code font-extrabold tracking-widest text-5xl mt-[50px]'>
                {title}
            </h1>
            <div  className='  flex max-md:justify-center  flex-wrap gap-10  mt-15'>
                {data.map((item, index) => (
                    <div  key={item.id} className='cursor-pointer abc p-3 flex items-center flex-col w-[45%] md:w-[28%] lg:w-[20%] 2xl:w-[17%] max-sm:w-[40%] overflow-hidden '>
                    <Image
                        className=" rounded-lg w-full h-full object-cover object-right-center  z-4 transition-filter duration-300"
                        src={item.image}
                        width={270}
                        height={190}
                        alt={item.title}
                        draggable={false}
                        loading="lazy" 
                    />
                    <p className=' mt-4  h-full w-full truncate font-semibold  lg:text-xl leading-3 font-grotesk '>{item.title}</p>
                    <p className=' mt-3 h-full w-full truncate text-sm font-bold tracking-wide text-gray-400 font-grotesk '> {item.author.name} </p>
                   </div>
                ))}
                

            </div>
        </div>
    );
};

export default RenderData;
