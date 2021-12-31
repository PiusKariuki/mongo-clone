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
      lg:py-[96px] lg:px-[180px]"
      >
        <p
          className="text-blue-80 font-[600] text-[32px] leading-[40px] lg:text-[56px] 
        lg:leading-[64px] text-center "
        >
          Working with data doesn't <br /> need to be hard
        </p>
        <p
          className="text-center font-[600] text-blue-80 text-[18px] leading-[32px] 
          lg:text-[20px]  lg:leading-[32px] md:px-[240px]"
        >
          Our guiding principle is to help developers solve  their data
          challenges. Here’s what you can do  with MongoDB.
        </p>
      </div>

      {/* ........................................................... */}
      <div
        className="flex flex-col flex-wrap w-full md:flex-nowrap md:flex-row space-around
        px-[24px]  pb-[24px] md:px-[32px] lg:px-[48px] gap-[16px] 460:gap-[32px]
         md:gap-[48px]"
      >
        {/* ......................................................... */}
        <div className="flex flex-col  pt-[64px] md:pt-[0px] self-center">
          <img
            src="/img/faster.svg"
            alt="faster"
            className="w-[64px] h-[64px] self-center"
          />
          <p
            className="text-blue-80  text-center text-[18px] leading-[28px] font-[900]
            lg:text-[24px] lg:leading-[32px] py-[12px]"
          >
            Build Faster
          </p>
          <p className="text-center text-[14px] font-[600] lg:text-[16px] lg:leading-[32px] py-[12px]">
            Ship and iterate 3–5x faster with our flexible document data model
            and a unified query interface for any use case.
          </p>
        </div>
        {/* .............................................................. */}
        <div className="flex flex-col pt-[64px] md:pt-[0px] self-center">
          <img
            src="/img/scale.svg"
            alt="faster"
            className="w-[64px] h-[64px] self-center"
          />
          <p
            className="text-blue-80  text-center text-[18px] leading-[28px] font-[900]
            lg:text-[24px] lg:leading-[32px] py-[12px]"
          >
            Scale Further
          </p>
          <p className="text-center text-[14px] font-[600] lg:text-[16px] lg:leading-[32px] py-[12px]">
            Whether it’s your first customer or 20 million users around the
            world, meet your performance SLAs in any environment.
          </p>
        </div>
        {/* .............................................................. */}
        <div className="flex flex-col pt-[64px] md:pt-[0px] self-center">
          <img
            src="/img/security.svg"
            alt="faster"
            className="w-[64px] h-[64px] self-center"
          />
          <p
            className="text-blue-80  text-center text-[18px] leading-[28px] font-[900]
            lg:text-[24px] lg:leading-[32px] py-[12px]"
          >
            Sleep Better
          </p>
          <p className="text-center text-[14px] font-[600] lg:text-[16px] lg:leading-[32px] py-[12px]">
            Easily ensure high availability, protect data integrity, and meet
            the security and compliance standards for your mission-critical
            workloads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trustees;
