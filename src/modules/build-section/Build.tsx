import React from "react";
import "./style/build.css";

const Build: React.FC = (): JSX.Element => {
  return (
    <div id="parent" className="w-screen bg-green-80  flex flex-col  md:flex-row 
     md:rounded-bl-[12rem] md:rounded-br-[50rem] md:overflow-x-clip lg:overflow-x-visible">
      <div className="flex flex-col mt-[3rem] md:mt-[0rem]">
        <div className="flex mb-[3rem] md:mb-[9rem] mx-[1.5rem]">
          <p
            className="bg-green-30 rounded-md px-[0.5rem] text-black-80
         font-[900] text-sm text-center h-[1.5rem] pt-[0.1rem]"
          >
            NEW
          </p>
          <p className="text-white text-sm md:text-xl text-left ml-[0.5rem] ">
            Introducing native support for time series data
            —&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-[800]">Learn More</span>
          </p>
        </div>

        <p className="text-white leading-tight md:leading-[5rem] text-[40px] md:text-[64px] text-center md:text-left px-[24px] ">Build faster.</p>
        <p className="text-white leading-tight md:leading-[5rem] text-[40px] md:text-[64px] text-center md:text-left px-[24px] ">Build smarter.</p>
        <p className="text-base md:text-2xl text-white font-medium text-center md:text-left mt-[1.3rem]  md:px-[24px] ">
          Get your ideas to market faster with an application data platform
          built on the leading modern database. Support transactional, search,
          analytics, and mobile use cases while using a common query interface
          and the data model developers love.
        </p>

        <div className="flex flex-col md:flex-row px-[24px] gap-[2rem]">
          <button className="btn w-full md:w-[10rem] h-[2.8rem] font-black  text-[1.2rem] mt-[2rem] leading-[0rem]">
            Start Free
          </button>
          <p className="text-xl text-center text-white mt-[1.5rem] self-center">
            Questions? Talk to us
          </p>
        </div>
      </div>

      <img src="/img/build.svg" alt="" className=" self-center md:px-[24px] mt-[2rem]" />
    </div>
  );
};

export default Build;
