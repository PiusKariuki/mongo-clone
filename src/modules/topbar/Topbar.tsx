import React, { useState, useEffect } from "react";

const Topbar: React.FC = (): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.onresize = resizeHandler;
    resizeHandler();
  }, []);

  return (
    <nav
      className="w-screen h-[56px] md:h-[66px] bg-white flex flex-row 
    justify-around md:py-[2.5rem]"
    >
      <img
        src="/img/mongo.png"
        alt=""
        className="w-[138px] h-[36px] ml-[30px] self-center"
      />
      {width < 1200 ? (
        <>
          <img
            src="/img/search.png "
            alt=""
            className="flex w-[1rem] h-[1rem]  self-center  ml-auto mr-[30px]"
          />
          <img
            src="/img/menu.png "
            alt=""
            className="flex w-[1rem] h-[1rem]  self-center ml-0 mr-[30px]"
          />
        </>
      ) : (
        <>
          <div className="flex justify-between align-middle mr-auto ml-[40px] gap-[35px]">
            <p className="text-xl self-center">Products</p>
            <p className="text-xl self-center">Solutions</p>
            <p className="text-xl self-center">Resources</p>
            <p className="text-xl self-center">Company</p>
            <p className="text-xl self-center">Pricing</p>
          </div>

          <div className="ml-auto mr-[55px] flex gap-[35px]">
            <img
              src="/img/search.png"
              alt=""
              className="h-[1rem] w-[1rem] self-center"
            />
            <p className="text-xl self-center">Sign In</p>
            <button
              className="btn  border-[0.05rem] w-[8rem] h-[3rem] font-semibold
                 px-[32px] py-[6px] self-center"
            >
              Try Free
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Topbar;
