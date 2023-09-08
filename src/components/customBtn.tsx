import React from "react";
import { Button } from "./ui/button";

const CustomBtn = ({ name }: any) => {
  return (
    <div>
      <Button
        className={`flex text-white bg-[#d4357d] hover:bg-[#d4357d]  rounded-xl hover:text-black  cursor-pointer`}
      >
        {name}
      </Button>
    </div>
  );
};

const CustomBtn2 = ({ name }: any) => {
  return (
    <div>
      <Button
        className={`flex bg-[#006887] ml-2 max-sm:w-ful   hover:bg-[#006887]  hover:text-black rounded-xl cursor-pointer `}
      >
        {name}
      </Button>
    </div>
  );
};
const CustomBtn3 = ({ name }: any) => {
  return (
    <div>
      <Button
        className={`flex bg-blue-600 ml-2  hover:bg-blue-500  hover:text-black text-white cursor-pointer rounded-sm `}
      >
        {name}
      </Button>
    </div>
  );
};

export { CustomBtn, CustomBtn2, CustomBtn3 };
