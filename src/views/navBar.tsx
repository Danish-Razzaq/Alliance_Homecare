"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import { hamburger } from "../../public/icons";
import img from "../../public/images/img.jpg";
import { CustomBtn, CustomBtn2, CustomBtn3 } from "@/components/customBtn";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu: any = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex z-10 shadow-lg z-100  fixed w-full bg-white justify-between items-center padding-x max-container">
        <NavigationMenuItem className="mb-3">
          <Image src={img} alt="logo" width={170} height={170}></Image>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden max-lg:block">
          {/* Your other navigation items */}
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden max-lg:block">
          <Image
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer text-[#006887]"
          />
        </NavigationMenuItem>

        <NavigationMenu className={`text-[#006887] max-lg:hidden space-x-4 `}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:underline underline-offset-4">
                Home Care Services
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>Testimonials</NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:underline underline-offset-4">
                FAQs
              </NavigationMenuTrigger>
              <NavigationMenuTrigger className="hover:underline underline-offset-4">
                About Us
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="h-9 w-[4px] bg-[#006887]"></div>
            </NavigationMenuItem>
            <NavigationMenuItem className="underline font-semibold mx-4">
              (646-652-6776)
            </NavigationMenuItem>
            <NavigationMenuItem className="text-[10px] max-xl:hidden leading-6 font-light text-white">
              <CustomBtn2 name={"REQUEST CARE"} />
            </NavigationMenuItem>
            <NavigationMenuItem className="text-[10px] max-xl:hidden leading-6 font-light text-white">
              <CustomBtn name={"CAREERS"} />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div
        className={`min-h-screen w-full z-100  bg-[#006887] ${
          isMenuOpen ? "block" : "hidden"
        } `}
      >
        <ul className=" flex padding-y  flex-col items-start padding-x justify-center space-y-5  text-2xl  text-white font-bold ">
          <span className="flex space-x-3 mt-14 ml-7">
            <CustomBtn name={"CAREERS"} />

            <CustomBtn3 name={"REQUEST CARE"} />
          </span>
          <Link href={"/"}>
            <li className="mt-11  max-lg:mt-28  hover:text-blue-500 cursor-pointer hover:underline underline-offset-8  ">
              Home Care Services
            </li>
            <li className="mt-11 hover:text-blue-500 cursor-pointer hover:underline underline-offset-8 ">
              Testimonials
            </li>
            <li className="mt-11 hover:text-blue-500 cursor-pointer hover:underline underline-offset-8 ">
              FAQs
            </li>
            <li className="mt-11 hover:text-blue-500 cursor-pointer hover:underline underline-offset-8 ">
              About Us
            </li>
          </Link>
        </ul>

        <span className="flex gap-4 mt-10 justify-center">
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
    </div>
  );
};

export default NavigationBar;
