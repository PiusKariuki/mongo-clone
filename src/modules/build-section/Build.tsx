import React from "react";
import "./style/build.css";

const Build: React.FC = (): JSX.Element => {
  return (
    <div
      className="w-screen h-auto bg-green-70 px-[24px] py-[64px] flex flex-col 
    md:flex-row flex-nowrap"
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p
            className="bg-green-30 rounded-md px-[0.5rem] text-black-80
         font-[900] text-xs text-center h-[1.5rem] pt-[0.1rem]  md:self-end"
          >
            NEW
          </p>
          <p className="text-white text-base md:text-xl text-left ml-[0.5rem]">
            Introducing native support for time series data
            —&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-[800]">Learn More</span>
          </p>
        </div>

        <p className="text-[2.5rem] leading-tight text-white font-[600] text-center">
          Build faster.
        </p>
        <p className="text-[2.5rem] leading-tight text-white font-[600] text-center">
          Build smarter.
        </p>
        <p className="text-base text-white font-medium text-center mt-[1.3rem]">
          Get your ideas to market faster with an application data platform
          built on the leading modern database. Support transactional, search,
          analytics, and mobile use cases while using a common query interface
          and the data model developers love.
        </p>
        <button className="btn w-full h-[2.8rem] font-black  text-[1.2rem] mt-[2rem] leading-[0rem]">
          Start Free
        </button>
        <p className="text-xl text-center text-white mt-[1.5rem]">Questions? Talk to us</p>
      </div>

      <div className="flex w-full  bg-build bg-center bg-cover bg-no-repeat"/>
   
    </div>
  );
};

export default Build;
