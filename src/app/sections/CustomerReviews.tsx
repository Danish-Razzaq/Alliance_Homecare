import React from "react";
import Image from "next/image";
import logo1 from "../../../public/images/logo1.png";
import logo2 from "../../../public/images/logo2.png";
import { MessageSquare, Star } from "lucide-react";
import { star } from "../../../public/icons";
import SimpleSlider from "@/components/slider";

const CustomerReviews = () => {
  return (
    <section className="max-container flex max-lg:flex-col gap-16 w-full max-lg:px-2 padding-x ">
      <div className="flex flex-col  max-lg:items-center w-full  gap-4 flex-wrap ">
        <h1 className="text-2xl max-lg:text-xl font-bold font-serif w-full text-white">
          New York's most trusted home care provider.
        </h1>
        <span className='flex space-x-3 flex-wrap'>
          <Image src={logo1} alt="" width={60} height={60} className="" />
          <Image src={logo2} alt="" width={60} height={60} className="" />
          <Image src={logo2} alt="" width={60} height={60} className="" />
          <Image src={logo2} alt="" width={60} height={60} className="" />
        </span>
        <div className="flex gap-3 items-center  max-lg:justify-center flex-wrap">
          <span className="text-white font-extrabold">
            <MessageSquare />
          </span>

          <p className="font-extrabold text-white text-sm">
            4.9
          </p>

          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <p className="font-extrabold text-white underline underline-offset-4 text-sm hover:text-blue-500 cursor-pointer">
            See more Rating
          </p>
        </div>
      </div>
    
      
         <div className=" w-1/2 max-lg:w-full  ">
      <SimpleSlider />
   </div>
      
    </section>
  );
};

export default CustomerReviews;
