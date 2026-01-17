import React from "react";
import LogoSlider from "./LogoSlider";
import DualLogoSlider from "./DualLog0Slider";
const Clients = () => {
  return (
    <div className=" flex justify-center   items-center">
      <div className=" flex flex-col justify-center overflow-hidden items-center  bg-[#fafafa]  w-full py-20">
       
        <h1 className="lg:text-4xl px-2 text-3xl  text-black font-semibold text-center ">
          Companies We have Helped
        </h1>
        <p className="mt-6 px-2 text-center text-zinc-800 text-md lg:text-lg small">
          We have helped Entrepreneurs and Small Business Owners
          from all over the world to grow their business
          with our services and products.
        </p>
       <DualLogoSlider/>
      </div>
    </div>
  );
};

export default Clients;