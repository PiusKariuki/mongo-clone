import React from "react";

const Part2 = () => {
  return (
    <div
      className="px-[24px] pt-[48px] pb-[56px] md:px-[32px] md:pt-[64px] md:pb-[96px]
        lg:px-[48px] flex flex-col flex-nowrap lg:flex-row 
        gap-[16px] 460:gap-[32px] md:gap-[48px]"
    >
      {/*card1 */}
      <div
        className="flex flex-col lg:flex-row space-between flex-nowrap rounded-[40px]
           gap-[24px] p-[32px] md:gap-[32px] md:p-[40px] lg:p-[48px] xl:p-[56px] overflow-x-clip
           border-2 shadow-xl"
      >
        <div
          className="flex flex-col flex-nowrap lg:flex-row 
          space-between gap-[72px] lg:gap-[80px] self-center"
        >
          <div className=" flex flex-col  flex-nowrap gap-[24px] ">
            <img
              src="/img/advanced.svg"
              alt="atlas"
              className="self-start pb-[24px] lg:pb-[56px]"
            />
            <p className="text-green-60 text-[24px] leading-[16px]">
              COMMUNITY EDITION
            </p>
            <p className="text-blue-80 text-[24px] leading-[32px] font-[600]">
              Database software used by millions
            </p>
            <p className="text-black-70 text-[18px] leading-[32px]">
              Our distributed document database is where it all began. Free
              forever with seamless migration to Atlas.
            </p>
            <p className="text-blue-80 text-[16px] leading-[32px]">
              Learn more
            </p>
          </div>
        </div>
      </div>
      {/*card2 */}
      <div
        className="flex flex-col lg:flex-row space-between flex-nowrap rounded-[40px]
           gap-[24px] p-[32px] md:gap-[32px] md:p-[40px] lg:p-[48px] xl:p-[56px] overflow-x-clip
           border-2 shadow-xl"
      >
        <div
          className="flex flex-col flex-nowrap lg:flex-row 
          space-between gap-[72px] lg:gap-[80px] self-center"
        >
          <div className=" flex flex-col  flex-nowrap gap-[24px] ">
            <img
              src="/img/community.svg"
              alt="atlas"
              className="self-start pb-[24px] lg:pb-[56px]"
            />
            <p className="text-green-60 text-[24px] leading-[16px]">
              ENTERPRISE ADVANCED
            </p>
            <p className="text-blue-80 text-[24px] leading-[32px] font-[600]">
              Enterprise software and support
            </p>
            <p className="text-black-70 text-[18px] leading-[32px]">
              The best way to run MongoDB yourself. Drive operational efficiency
              and security.
            </p>
            <p className="text-blue-80 text-[16px] leading-[32px]">
              Learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
