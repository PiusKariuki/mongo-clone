import React from "react";

const Cloud: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col flex-nowrap bg-transparent w-screen ">
      <div
        className="px-[24px] pb-[24px] pt-[16px] md:px-[32px] lg-[px[48px]
                flex flex-col flex-nowrap gap-[24px]"
      >
        <p
          className="text-blue-80 font-[800] text-[32px] leading-[40px] px-[24px]
         lg:text-[56px] lg:leading-[64px] text-center"
        >
          Fully managed in the cloud
        </p>
        <p
          className="text-blue-80 font-[500] text-[18px] leading-[32px]
         lg:text-[20px] lg:leading-[32px] text-center"
        >
          Start in seconds and scale to millions with our cloud services
        </p>
      </div>

      {/* .....................cards..................................... */}
      <div
        className="px-[24px] pt-[48px] pb-[56px] md:px-[32px] md:pt-[64px] md:pb-[96px]
        lg:px-[48px] flex flex-col flex-nowrap lg:flex-row 
        gap-[16px] 460:gap-[32px] md:gap-[48px]"
      >
        {/*card1 */}
        <div
          className="flex flex-col lg:flex-row space-between flex-nowrap rounded-[40px]
           gap-[24px] p-[32px] md:gap-[32px] md:p-[40px] lg:p-[48px] xl:p-[56px] overflow-x-clip
           border-2 shadow-xl lg:max-w-[80%]"
        >
          <div
            className="flex flex-col flex-nowrap lg:flex-row  
          space-between gap-[72px] lg:gap-[80px] self-center"
          >
            
            <div className=" flex flex-col  flex-nowrap gap-[24px] ">
              <img src="/img/atlas.svg" alt="atlas" className="self-start pb-[24px] lg:pb-[56px]" />
              <p className="text-green-60 text-[24px] leading-[16px]">Atlas</p>
              <p className="text-blue-80 text-[24px] leading-[32px] font-[600]">
                Multi-cloud application data platform
              </p>
              <p className="text-black-70 text-[18px] leading-[32px]">
                An integrated suite of cloud database services that allow you to
                address a wide variety of use cases, from transactional to
                analytical, from search to data visualizations
              </p>
              <p className="text-blue-80 text-[16px] leading-[32px]">
                Learn more
              </p>
            </div>
          </div>
          <img
            src="/img/Atlas-tile-card.svg"
            alt=""
            className="self-start max-w-[600px] lg:min-w-[650px] lg:mr-[-300px]"
          />
        </div>
        {/* card2 */}
        <div
          className="flex flex-col  space-between flex-nowrap rounded-[40px]
           gap-[24px] p-[32px] md:gap-[32px] md:p-[40px] lg:p-[48px] xl:p-[56px] overflow-x-clip
           border-2 shadow-xl flex-shrink-[1]  flex-grow-[1] lg:max-w-[32%]"
        >
          <div
            className="flex flex-col flex-nowrap  
          space-between gap-[72px] lg:gap-[80px] self-center"
          >
            <img src="/img/realm.svg" alt="realm" className="self-start" />
            <div className=" flex flex-col  flex-nowrap gap-[24px]">
              <p className="text-green-60 text-[24px] leading-[16px]">Realm</p>
              <p className="text-blue-80 text-[24px] leading-[32px] font-[600]">
                Work with data at the edge
              </p>
              <p className="text-black-70 text-[18px] leading-[32px]">
                A highly performant mobile database, with native edge-to-cloud data sync.
                Use Realm to build offline-first apps in a fraction of the time
              </p>
              <p className="text-blue-80 text-[16px] leading-[32px]">
                Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ................................................................... */}
    </div>
  );
};

export default Cloud;
