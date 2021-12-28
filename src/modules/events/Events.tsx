import React from "react";

const Events: React.FC = (): JSX.Element => {
  return (
    <div
      className="w-screen h-[40px] md:h-[40px] px-[15px] bg-[#11614a] 
    flex items-center justify-center"
    >
      <p className="text-white text-[14px] md:text-[16px] align-middle  tracking-[1px] ">
        <span className="text-sm font-[100]">
          {window.innerWidth > 500 ? (
            <button
              className=" border-[0.008rem] border-white text-center align-middle px-[0.7rem]
               pb-1 rounded-3xl "
            >
              Event
            </button>
          ) : (
            "{Event}"
          )}
        </span>
        &nbsp;&nbsp;Interested in speaking at MongoDB World 2022? Become a
        speaker {">>"}
      </p>
    </div>
  );
};

export default Events;
