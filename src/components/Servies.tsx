import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface services {
    img:StaticImageData,
    title:string
}

const Service = ({img,title}:services) => {
  return (
    <div className='relative cursor-pointer '>
    <div className='relative'>

    <Image src={img} alt='img' className='rounded-xl  l'/>
    </div>
   <div  className='absolute bottom-3 hover:bottom-10 left-10 font-bold text-white  hover:shadow-pink-600 shadow-2xl hover:text-yellow-500' >
    {
        title
    }
   </div>
    </div>
   
  );
}

export default Service;
