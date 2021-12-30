import React from "react";
import "./style/trustees.css";

const Trustees: React.FC = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-transparent">
      <div className="py-[56px] px-[24px] md:py-[96px] md:px-[32px] lg:py-[96px] lg:px-[48px]">
        <p className="text-green-60 text-center font-[800] text-[13px] mb-[40px] tracking-[3px]">
          TRUSTED BY THOUSANDS OF ORGANIZATIONS INCLUDING
        </p>
        <div
          className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-[24px] 
        md:gap-[150px]"
        >
          <img
            src="/img/bosch.svg"
            alt=""
            className="w-[72px] h-[40px] md:my-[12px] 
          md:mx-[-12px] lg:w-[120px] lg:h-[48px] lg:mx-[12px]"
          />
          <img
            src="/img/Cisco.svg"
            alt=""
            className="w-[72px] h-[40px] md:my-[12px] 
          md:mx-[-12px] lg:w-[120px] lg:h-[48px] lg:mx-[12px]"
          />
          <img
            src="/img/Humantix.svg"
            alt=""
            className="w-[72px] h-[40px] md:my-[12px] 
          md:mx-[-12px] lg:w-[120px] lg:h-[48px] lg:mx-[12px]"
          />
          <img
            src="/img/Toyota.svg"
            alt=""
            className="w-[72px] h-[40px] md:my-[12px] 
          md:mx-[-12px] lg:w-[120px] lg:h-[48px] lg:mx-[12px]"
          />
        </div>
      </div>

      {/* .................working............ */}
      <div
        className="flex flex-col px-[24px] pt-[48px] pb-[24px] gap-[3rem] justify-center
      lg:py-[96px] lg:px-[330px]"
      >
        <p
          className="text-blue-80 font-[600] text-[32px] leading-[40px] lg:text-[56px] 
        lg:leading-[64px] text-center "
        >
          Working with data doesn't need to be hard
        </p>
        <p
          className="text-center font-[600] text-blue-80 text-[18px] leading-[32px] lg:text-[20px] 
        lg:leading-[32px] lg:px-[100px]"
        >
          Our guiding principle is to help developers solve their data
          challenges. Here’s what you can do with MongoDB.
        </p>
      </div>

      {/* ........................................................... */}
      <div className="">
          
      </div>
    </div>
  );
};

export default Trustees;
