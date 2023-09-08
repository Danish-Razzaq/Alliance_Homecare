import { CustomBtn2 } from "@/components/customBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CBS from "../../../public/images/CBS.png";
import heroIMG from "../../../public/images/heroIMG.jpg";
import inc from "../../../public/images/inc.png";
import forbes from "../../../public/images/forbes.png";
import { MessageSquare } from "lucide-react";
import { star } from "../../../public/icons";
const Hero = () => {
  return (
    <section
      id="hero "
      className="flex max-container max-lg:flex-col gap-12 mt-10 "
    >
      <div className="relative flex flex-col gap-5 mt-14   items-start w-full  ">
        <h1 className="text-6xl  text-[#006887] max-sm:text-[52px]    font-serif">
          Caring for your family like they’re our own.
        </h1>
        <h4 className="text-2xl text-[#006887]   ">
          New York’s premier long-term home health care agency.
        </h4>
        <span className="flex gap-3 items-center max text-white flex-wrap ">
          <CustomBtn2 name={"REQUEST CARE"} />
          <p className="bg-gradient-to-r from-[#fff1e4] to-white p-2 font-semibold text-[#006887]">
            Our Give us a Call{" "}
            <span className="hover:underline underline-offset-8 cursor-pointer">
              ( 553-664-887 )
            </span>{" "}
          </p>
        </span>

        <div className="flex items-center mt-6 flex-wrap max-md:flex-col space-x-3">
          <p className="font-bold text-red-600">See in:</p>

          <div className="flex gap-4 items-center">
            <Link href="">
              <Image src={CBS} alt="CBS" height={60} width={60} />
            </Link>

            <Link href="">
              <Image src={forbes} alt="Forbes" height={60} width={60} />
            </Link>

            <Link href="">
              <Image src={inc} alt="Inc" height={60} width={60} />
            </Link>
          </div>

          <div className="h-9 max-md:hidden w-[2px] bg-[#006887]"></div>

          <div className="flex items-center gap-3">
            <div className="text-[#006887] font-bold">
              <MessageSquare />
            </div>
            <p className="text-semibold text-[#006887]">4.9</p>

            <Image
              src={star}
              width={24}
              height={24}
              alt="rating star"
              className="object-contain m-0"
            />
            <Image
              src={star}
              width={24}
              height={24}
              alt="rating star"
              className="object-contain m-0"
            />
            <Image
              src={star}
              width={24}
              height={24}
              alt="rating star"
              className="object-contain m-0"
            />
            <Image
              src={star}
              width={24}
              height={24}
              alt="rating star"
              className="object-contain m-0"
            />
          </div>
        </div>
      </div>
      <div className="relative  w-full ml-2">
        <div className="bg-[#006887] w-full max:lg-hidden md:h-[660px] max-lg:h-[460px]   max-sm:h-[365px] max-lg:ml-3 ml-8 xs-[100px] sm:h-[575px] relative rounded-xl mt-10 md:ml-12 ">
        </div>
        <div className="absolute   top-0 right-0 mb-12 mr-7 rounded-xl">
          <Image
            src={heroIMG}
            alt=""
            className="mb-10 hover:scale-110 transition-transform w-full h-full  duration-300 ease-in-out rounded-xl"
          />
        </div>
        <div className="bg-white h-10 w-60 flex hover:bg-gradient-to-r from-pink-500 cursor-pointer to-white justify-center items-center text-center absolute left-[-50px] bottom-[30%] border-l-8 border-red-700 text-sm leading-7 max-lg:hidden text-pink-600 hover:text-black font-semi-bold">
          WATCH TESTIMONIAL
        </div>
      </div>
    </section>
  );
};

export default Hero;
