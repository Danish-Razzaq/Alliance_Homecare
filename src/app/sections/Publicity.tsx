import { CustomBtn2 } from "@/components/customBtn";
import React from "react";

const Publicity = () => {
  return (
    <section className="max-container flex max-lg:flex-col gap-16 max-lg:mb-36  padding-y padding-x">
      <div className="w-full  flex flex-col gap-4 justify-start items-center">
        <h1 className="text-5xl font-bold   max-lg:w-full text-[#006887] max-lg:text-3xl  ">Why Alliance Homecare?</h1>{" "}
        <p className="text-xl text-[#669bac]  max-lg:w-full">
          For over 15 years our aim to set the bar higher for home-based care
          has resulted in better health for our clients and greater peace of
          mind for our client’s families.
        </p>
      </div>
      <div className="w-full  flex flex-col gap-4  md:-mt-12 justify-start items-start">
   <p className="font-thin text-lg  text-[#006887]  max-lg:w-full">
   It starts with understanding the unique issues and health conditions families face that lead to decisions about if long term home care is right for them. Our highly experienced care team helps make those decisions easier with care consultations that answer questions and provide solutions. From there, our home health aides and private duty nurses provide care with respect and compassion while upholding a strict code of confidentiality. Know that when you need care, the team at Alliance Homecare is here to help. We look forward to the opportunity to become a part of your family.</p>
   <span className="flex gap-3 items-center text-white flex-wrap ">
          <CustomBtn2 name={"REQUEST CARE"} />
          <p className="bg-gradient-to-r from-[#bb8c61] to-white p-2 font-semibold text-[#006887]">
            Or Give us a Call{" "}
            <span className="hover:underline underline-offset-8 cursor-pointer">
              ( 553-664-887 )
            </span>{" "}
          </p>
        </span>
      </div>
    </section>
  );
};

export default Publicity;
