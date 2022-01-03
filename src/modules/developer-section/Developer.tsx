import React, { useState } from "react";

const Developer: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<number>(0);
  return (
    <div
      className="bg-blue-80 w-full flex flex-col flex-nowrap pt-[48px] pb-[64px] px-[24px]
       md:pt-[64px] md:pb-[112px] md:px-[32px] lg:px-[48px] md:rounded-tr-[8rem]
        gap-[24px] gap-y-[48px]"
    >
      {/* top section with paragraphs */}
      <div className="flex flex-col lg:max-w-[58%] ">
        <p
          className="text-white text-[40px]
         leading-[48px] lg:text-[64px] lg:leading-[72px] pb-[32px]"
        >
          Built by developers, for developers
        </p>
        <p className="text-white text-[18px] leading-[32px] lg:text-[20px]">
          With a document data model that maps to how developers think and code
          and a powerful, unified query API, MongoDB powers faster, more
          flexible application development.
        </p>
      </div>
      {/* second section */}
      <div className="flex flex-nowrap flex-col lg:flex-row gap-[4rem]">
        <div className="flex flex-col flex-nowrap">
          <button
            className="btn px-[58px] py-[16px] text-[16px] font-[900] border  gap-[8px] 
            transition-[.15s] text-blue-80 stroke-blue-80 fill-blue-80 border-green-60 bg-green-40 
            lg:w-[16rem] rounded-[4px] marker:leading-[16px] tracking-wide"
          >
            View Documentation
          </button>

          <div className="flex flex-col w-full">
            {/* pt1 */}
            <div
              onClick={() => setOpen((pv) => (pv === 1 ? 0 : 1))}
              className="flex flex-col max-w-[100%] py-[32px] px-[0px] border-b-[1px]
             border-[#3d4f58] gap-[1rem]"
            >
              <div className="flex flex-row flex-nowrap gap-[12.2rem]">
                <p
                  className="text-white font-[500] text-[18px] leading-[24px] lg:leading-[32px]
              lg:text-[24px]"
                >
                  One platform, many workloads
                </p>
                <img
                  src={`${open === 1 ? "/img/Minus.svg" : "img/Plus.svg"}`}
                  alt=""
                  className="h-[1.5rem] ml-auto"
                />
              </div>
              {open === 1 ? (
                <p
                  className="text-white text-[14px] lg:text-[16px] leading-[24px] font-[400] mt-[8px]
                 pr-[24px]"
                >
                  Transactional, analytical, full-text search, time series, and
                  more
                </p>
              ) : null}
            </div>
            {/* pt2 */}
            <div
              onClick={() => setOpen((pv) => (pv === 2 ? 0 : 2))}
              className="flex flex-col max-w-[100%] py-[32px] px-[0px] border-b-[1px]
             border-[#3d4f58] gap-[1rem]"
            >
              <div className="flex flex-row flex-nowrap space-between gap-[11.3rem]">
                <p
                  className="text-white font-[500] text-[18px] leading-[24px] lg:leading-[32px]
              lg:text-[24px]"
                >
                  Query and analyze data in place
                </p>
                <img
                  src={`${open === 2 ? "/img/Minus.svg" : "img/Plus.svg"}`}
                  alt=""
                  className="h-[1.5rem] ml-auto"
                />
              </div>
              {open === 2 ? (
                <p
                  className="text-white text-[14px] lg:text-[16px] leading-[24px] font-[400] mt-[8px]
                 pr-[24px]"
                >
                  Consistent Query API experience for all operations, with
                  idiomatic language support
                </p>
              ) : null}
            </div>
            {/* pt3 */}
            <div
              onClick={() => setOpen((pv) => (pv === 3 ? 0 : 3))}
              className="flex flex-col max-w-[100%] py-[32px] px-[0px] border-b-[1px]
             border-[#3d4f58] gap-[1rem]"
            >
              <div className="flex flex-row flex-nowrap gap-[10rem]">
                <p
                  className="text-white font-[500] text-[18px] leading-[24px] lg:leading-[32px]
              lg:text-[24px]"
                >
                  Deploy, scale, and optimize easily
                </p>
                <img
                  src={`${open === 3 ? "/img/Minus.svg" : "img/Plus.svg"}`}
                  alt=""
                  className="h-[1.5rem] ml-auto"
                />
              </div>
              {open === 3 ? (
                <p
                  className="text-white text-[14px] lg:text-[16px] leading-[24px] font-[400] mt-[8px]
                 pr-[24px]"
                >
                  Run confidently in production with built-in replication,
                  sharding, indexing, performance tools, and more
                </p>
              ) : null}
            </div>
          </div>
        </div>
        {/* code section */}
        <div className="flex flex-col">
          <div
            className="flex flex-col lg:flex-row  flex-wrap bg-[#061621] py-[6px] px-[24px] border-b-[1px]
           border-[#3d4f58] gap-[8px] text-[16px] rounded-t-[32px]"
          >
            <button
              className="h-[40px] bg-[#006cfa] py-[8px] px-[24px] text-white text-center
             leading-[24px] rounded-[999px] cursor-pointer"
            >
              Transactions
            </button>
            <button
              className="h-[40px] bg-[#3d4f58] py-[8px] px-[24px] text-white text-center
             leading-[24px] rounded-[999px] cursor-pointer hover:border-[1px] hover:border-[#006cfa]"
            >
              Search
            </button>
            <button
              className="h-[40px] bg-[#3d4f58] py-[8px] px-[24px] text-white text-center
             leading-[24px] rounded-[999px] cursor-pointer hover:border-[1px] hover:border-[#006cfa]"
            >
              Time Series
            </button>
            <button
              className="h-[40px] bg-[#3d4f58] py-[8px] px-[24px] text-white text-center
             leading-[24px] rounded-[999px] cursor-pointer hover:border-[1px] hover:border-[#006cfa]"
            >
              Change streams/ Event Driven
            </button>
          </div>

          <div
            className="flex flex-col flex-wrap bg-[#061621] py-[24px] cursor-text text-white 
          text-[16px] lg:text-[24px] px-[2rem]"
          >
            <p className="text-[#95A1A2] px-[4px]"># Transaction in Python </p>
            <p>&nbsp; </p>
            <p>
              <span className="text-[#fafafa]">session.</span>
              <span className="text-[#e9ff99]">start_transaction</span>
              ()
            </p>
            <p>
              {`order = { line_items : [ { item: `}
              <span className="text-[#f2c5ee]">5</span>, quantity:{" "}
              <span className="text-[#f2c5ee]">6</span>
              {`} ] }`}
            </p>

            <p>&nbsp; </p>
            <p>
              db.<span className="text-[#e9ff99]">orders.insertOne</span>(
              order, session=session );
            </p>
            <p> </p>
            <p>
              <span className="text-[#ffa1a1]">for</span> x
              <span className="text-[#ffa1a1]"> in </span> order.
              <span className="text-[#e9ff99]">line_items:</span>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;db.
              <span className="text-[#e9ff99]">inventory.update</span>(
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{ _id  : x.`}
              <span className="text-[#e9ff99]">item </span>
              {`},`}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`{ $inc : { number : -1 * x.`}
              <span className="text-[#e9ff99]">quantity</span>
              {` },`}
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;session=session</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</p>
            <p>&nbsp; </p>
            <p>
              session.
              <span className="text-[#e9ff99]">commit_transaction</span>()
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
