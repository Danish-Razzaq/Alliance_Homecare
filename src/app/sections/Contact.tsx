import { CustomBtn } from '@/components/customBtn';
import React from 'react';

const Contact = () => {
  return (
    <section className='flex justify-around max-lg:flex-col max-container  -mt-52 mb-32 rounded-xl p-16  max-lg:p-8 padding-xl shadow-2xl  shadow-black w-full h-full bg-white border-t-8 border-red-400 ' >
        <div className='  space-y-3 flex flex-col justify-center  p-4 '>
            <p className='text-sm font-bold text-red-500'>JOIN OUR TEAM</p>
            <h1 className='text-4xl max-sm:text-2xl w-full font-bold text-[#006887]'>
            Calling great HHAs, RNs & LPNs
            </h1>
            <p className='text-xl text-[#6798a7]'>Find a career where your time and skills are valued and your <br /> dedication to service is rewarded.</p>
        </div>
        <div className=' flex justify-start  items-center mr-16 '>
            <CustomBtn name='SEE CAREERS' />
        </div>
      
    </section>
  );
}

export default Contact;
