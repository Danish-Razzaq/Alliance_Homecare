import React from "react";

import item1 from "../../../public/images/item1.jpg";
import item2 from "../../../public/images/item2.jpg";
import item3 from "../../../public/images/item3.jpg";
import item4 from "../../../public/images/item4.jpg";
import Service from "@/components/Servies";

const Services = () => {
  return (
    <section className="max-container ">
      <p className="text-red-600 font-bold text-sm my-2 ">WHAT WE DO</p>
      <h1 className="text-5xl max-lg:text-3xl  text-[rgb(0,104,135)] my-5 font-serif">
        Alliance Home Services
      </h1>
      <div className=" gap-3 grid lg:grid-cols-4 md:grid-cols-3 my-5 sm:grid-cols-2 grid-cols-1 sm:gap-4">
        <Service img={item1} title="Private Duty Nursing Care" />
        <Service img={item2} title="Senior Home Care" />
        <Service img={item4} title="Pediatric Home Care" />
        <Service img={item3} title="Home Health Aides" />
      </div>
      <hr className="border-dotted border-b-8 my-4 border-[#006887]" />
    </section>
  );
};

export default Services;
