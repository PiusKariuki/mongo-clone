import React from "react";

const Topbar = () => {
  return (
    <div className="w-screen h-[56px] bg-white flex flex-row justify-around ">
        <img src="/img/mongo.png" alt=""  className="w-[138px] h-[36px] ml-[30px] self-center"/>
      <div
        className="flex w-[5%] h-[40%] bg-search bg-center bg-no-repeat bg-contain self-center
        ml-auto mr-[30px]"
      ></div>
      <div
        className="flex w-[5%] h-[40%] bg-menu bg-center bg-no-repeat bg-contain self-center 
      mr-[30px]"
      ></div>
    </div>
  );
};

export default Topbar;
