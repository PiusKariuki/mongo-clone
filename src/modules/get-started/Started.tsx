import React from "react";

const Started: React.FC = (): JSX.Element => {
	return (
		<div
			className="bg-green-80	mt-[128px] md:mt-[48px] flex flex-col	md:flex-row	lg:rounded-t-[140px]	
				px-[24px] py-[48px] md:px-[32px]	lg:px-[48px] lg:pt-[128px]	gap-[64px] md:gap-x-[48px]">
			<div className="flex	flex-col	 md:px-[96px] text-white text-center md:text-left">
				<p
					className="flex  text-[32px]	leading-[40px]	lg:text-[56px]	
						lg:leading-[64px] md:w-[70%]">
					Ready to get started?
				</p>
				<p className="mt-[24px] mb-[32px] leading-[24px] text-[14px]	lg:mt-[32px] lg:mb-[40px]
					lg:text-[16px] lg:leading-[32px]">
					Begin building your next app today</p>
				<div className="flex flex-col md:flex-row	items-center	gap-[28px]">
					<button className="btn text-black-80 py-[8px] px-[56px] text-[20px] font-[900]
						w-full md:w-fit">Try Free</button>
					<p className="text-[18px] leading-[32px] font-[500]">Questions? Talk to us</p>
				</div>
			</div>
			<img src="/img/Illustration.svg" alt="" className="w-[35%]"/>
		</div>
	);
};

export default Started;
