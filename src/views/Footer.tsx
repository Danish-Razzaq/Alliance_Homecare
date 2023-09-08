import React from "react";
import Image from "next/image";
import footer_logo from "../../public/images/footer_logo.png";
import { CustomBtn } from "@/components/customBtn";
import { Phone } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <main className=" flex flex-col gap-6">

    <section className="max-container flex max-lg:flex-col gap-10   ">
      <div className="flex flex-col  -mt-10 justify-start w-full gap-4">
        <Image src={footer_logo} alt="logo" />
        <p className="text-white font-normal">
          For over 15 years our focus on elevating the homecare experience has
          allowed our clients to receive all levels of medical care from the
          comfort of home, while providing peace of mind to clients and their
          loved ones.
        </p>
      </div>
      <div className="flex w-full gap-6 justify-center">
        <ul className="text-white gap-3 cursor-pointer space-y-5">
          <li className="font-bold">HOME CARE</li>
          <li>Private Duty Nursing</li>
          <li>Home Health Aides</li>
          <li>Chronic Care</li>
          <li>Senior Care</li>
          <li>Pediatric Care</li>
        </ul>

        <ul className="text-white cursor-pointer gap-3 space-y-5">
          <li className="font-bold">COMPANY</li>
          <li>Blog</li>
          <li>Press</li>
          <li>Careers HIRING!</li>
          <li>Locations</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-full   space-y-6">
        <span className="flex gap-2  justify-center">
          <CustomBtn name="REQUEST CARE" />
          <button className="rounded-xl border-2 h-fit  max-lg:text-xs    border-white md:font-bold text-white w-fit hover:bg-white hover:text-[#592f56] items-center flex hover:border-pink-300  p-2 ">
            <span className="mx-1 md:mx-2">
              <Phone />{" "}
            </span>{" "}
            REUEST CARE
          </button>
        </span>
        <span className="flex gap-4 justify-center">
          <div className="h-16 w-16 bg-[#6a4467] cursor-pointer hover:text-pink-600 text-white flex items-center justify-center rounded-xl">
            {<Facebook />}
          </div>
          <div className="h-16 w-16 bg-[#6a4467] cursor-pointer hover:text-pink-600 text-white flex items-center justify-center rounded-xl">
            {<Instagram />}
          </div>
          <div className="h-16 w-16 bg-[#6a4467] cursor-pointer hover:text-pink-600 text-white flex items-center justify-center rounded-xl">
            {<Linkedin />}
          </div>
          <div className="h-16 w-16 bg-[#6a4467] cursor-pointer hover:text-pink-600 text-white flex items-center justify-center rounded-xl">
            {<Youtube />}
          </div>
        </span>
      </div>

    </section>
    <section>

      <hr  className="h-1 w-full my-8 bg-rose-100 " />
      <p className=" w-full flex justify-center text-white items-center padding-x text-center text-sm    ">
      Alliance Homecare is a fully licensed home care services agency (LHCSA) servicing New York, Kings,  Queens, Bronx, Richmond, Nassau,<br /> Suffolk, Westchester and Rockland counties.
        
      </p>
      <p className="w-full flex justify-center text-white items-center  text-center text-sm  my-4">
      © 2023 Alliance Homecare. All Rights Reserved. Privacy Policy
      </p>
    </section>
    </main>
  );
};

export default Footer;
