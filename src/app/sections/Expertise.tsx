import Image from 'next/image';
import React from 'react';
import care from '../../../public/images/care.jpg'

const Expertise = () => {
  return (
    <section className='max-container padding-y flex max-lg:flex-col w-full gap-9'>
    <div className='flex flex-col gap-6 items-start w-full'>
        <h1 className='text-5xl  text-blue-900 max-sm:text-3xl w-full'>HOME CARE IS EASIER THAN EVER!</h1>
        <p className='text-sm  text-gray-500 '>Tradition Homecare in Brooklyn, NY, is a trusted and experienced provider of in- home health care services for seniors in the Kings, Queens, New York City, Bronx, Staten Island, and Nassau areas. With a focus on long-term care and healthy living for seniors, our team of skilled professionals is dedicated to providing compassionate and personalized care that meets each client's unique needs. We offer a free home care assessment to ensure our services are tailored to your needs and preferences. With years of experience in the home healthcare industry. Tradition Homecare is committed to helping seniors live their best lives in the comfort and security of their own homes.</p>
    </div>
    <div className='w-full  md:mb-4 '>
        <Image src={care} alt='care.IMg' className='rounded-full border border-green-500 w-[400px] h-[400px]'/>
    </div>
    </section>
  );
}

export default Expertise;
