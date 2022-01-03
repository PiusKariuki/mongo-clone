import React from "react";

const Services: React.FC = (): JSX.Element => {
  return (
    <div className="w-screen flex flex-col flex-nowrap bg-transparent">
      {/* data solns */}
      <div
        className="flex flex-col flex-nowrap px-[24px] pt-[64px] pb-[56px] md:px-[32px] 
            md:pt-[112px] md:pb-[96px] lg:px-[48px] gap-y-[24px]"
      >
        <p
          className="text-blue-80 text-[32px] leading-[40px] lg:text-[56px] lg:leading-[64px] text-center
        md:px-[200px] lg:px-[350px] font-[600]"
        >
          Data solutions tailored for your business
        </p>
        <p
          className="text-blue-80 text-[20px] leading-[32px] lg:text-[24px] text-center md:px-[150px]
        lg:px-[300px]"
        >
          Whether you’re pushing the boundaries of customer experience or
          building mission-critical applications, MongoDB is the data foundation
          for any industry
        </p>
      </div>
      {/* cards */}
      <div className="flex flex-col md:flex-row  pt-[24px] pb-[56px] px-[24px] 
        md:pb-[96px] md:px-[32px] lg:px-[10rem] items-center">
        <div className="flex flex-col order-2 md:order-1 text-left md:pr-[12rem]">
          <p className="text-green-60 text-[12px] leading-[16px] tracking-[3px] font-[600] mb-[24px]">
            FINANCIAL SERVICES
          </p>
          <p className="text-[24px] text-blue-80 leading-[32px] lg:text-[32px] lg:leading-[48px]
           font-[800]">
              De-risk your modernization journey</p>
          <p className="text-blue-80 text-[18px] leading-[32px] lg:text-[20px] font-[500] my-[40px]">
            Iterative modernization enables financial firms to innovate while
            modernizing — with immediate gains and less risk.
          </p>
          <button className="btn font-[800] bg-green-40 border-green-60 py-[16px] px-[32px] text-[18px]
            rounded-[4px] leading-[16px] border-[1px] gap-[8px] text-blue-80 stroke-blue-80
            fill-blue-80  w-[10rem] ">
              Learn More</button>
        </div>
        <img src="/img/Finance_1.svg" alt="" className="order-1 md:order-2 md:w-[100%]"/>
      </div>
      {/*  */}
      
    </div>
  );
};

export default Services;
