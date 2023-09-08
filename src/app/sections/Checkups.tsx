import { CustomBtn3 } from "@/components/customBtn";
import React from "react";
import Image from "next/image";
import service from "../../../public/images/service.jpg";

const Checkups = () => {
  return (
    <section className="max-container flex flex-col items-center  justify-center space-y-5 -mt-14 ">
      <h1 className="text-4xl max-lg:text-3xl  font-bold text-[rgb(0,104,135)]">Our Caring For You</h1>
      <span className=" grid lg:grid-cols-4 md:grid-cols-3 my-5 grid-cols-2  gap-2   ">
        <CustomBtn3 name="Personal Care" />
        <CustomBtn3 name="Flexible Care" />
        <CustomBtn3 name=" Instant Care..." />
        <CustomBtn3 name="Inclusive Care" />
      </span>

      <section className="flex max-lg:flex-col gap-3 justify-around mx-36 max-lg:mx-1 items-center pt-9">
        <div className="w-fit max-lg:p-2 flex flex-col items-center   gap-6 space-y-3 p-10  ">
          <h1 className="text-3xl max-lg:text-2xl font-semibold">Inclusive Care</h1>
          <p className="text-gray-500 text-sm ">
            Our customized care plans and support programs are created by
            healthcare professionals and are designed to meet individual needs.
          </p>
        </div>
        <div className="relative flex justify-center max-lg:-ml-6 items-center w-fit z-0">
          {/* Negative margin to move the red box to the bottom left corner */}
          <div className="w-full ml-5 z-10 relative p-6  ">
            <Image
              src={service}
              alt=""
              className="w-[400px] h-[250px]"
              h-full
            />
          </div>
          {/* Red box */}
          <div className="absolute right-2   bottom-3  bg-orange-400 flex  h-28 w-32">
            {/* Content inside the red box */}
          </div>
          <div className="absolute top-4 left-28    bg-blue-900 flex items-end h-5 w-16">
            {/* Content inside the red box */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Checkups;
