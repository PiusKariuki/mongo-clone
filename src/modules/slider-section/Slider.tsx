import React, { useState } from "react";

const Slider: React.FC = (): JSX.Element => {
	const [number, setNumber] = useState<number>(0);
	const imgs = ["acxiom.svg", "tmh.svg", "DWP.png", "boxed.svg"];
	const headings = [
		"DATA-DRIVEN SOLUTIONS",
		"SMART FACTORY",
		"SCALING FAST",
		"SCALING",
	];
	const paragraphs = [
		"“Combining MongoDB Atlas, Data Lake, Realm, and Charts has become a key part of our cutting-edge cloud architecture, helping us design, build, and manage omnichannel solutions that power exceptional customer experiences.”",
		"“For the developers, it is easy, really easy for them to work with quickly. Spending time on building business value, rather than data modeling.”",
		"“Agile development, multi-disciplinary teams, rapid iteration, and weekly releases have all helped us react seamlessly to changes in demand. MongoDB has been able to cope with that all the way through and gave us the agility and flexibility we so needed.”",
		"“For a long time, your compute layer scaled far more dynamically than your database. With MongoDB Atlas, really for the first time, you can have your data engines scale just as well, just as fast.”",
	];
	const names = ["Scott Jones", "Filip Dadgar", "Tom Padgham", "William Fong"];
	const titles = [
		"Acxiom Fellow, Acxiom",
		"Principal Solutions Architect and IT Manager, Toyota Material Handling",
		"Deputy Director of Engineering, Department for Work & Pensions",
		"CTO and Co-Founder, Boxed",
	];
	return (
		<div
			className="flex	px-[24px] pt-[212px] pb-[112px] overflow-hidden md:px-[32px] 
			 lg:px-[48px] max-w-[1416px] self-center">
			{/* card */}
			<div className="flex flex-col md:flex-row gap-[24px] relative">
				<img
					src={`/img/${imgs[number]}`}
					alt=""
					className="bg-green-70 m-0 bottom-0 flex flex-col 
						ml-[24px] w-[212px] h-[212px] md:w-[248px]
						md:h-[248px] lg:w-[456px] lg:h-[456px] absolute top-[-15%]
						 justify-center rounded-[40px]"
				/>

				{/* text-div */}
				<div
					className="flex flex-col  rounded-[24px] md:rounded-[72px]
					 lg:rounded-[104px] 
					pt-[168px] px-[24px] pb-[40px] md:pt-[56px] md:pr-[56px] md:ml-[80px] md:pl-[212px]
					 lg:pt-[72px] lg:pr-[80px] lg:pb-[0px] lg:mb-0  lg:ml-[310px] shadow-black shadow-xl
					md:min-h-[600px]">
					{/* heading */}
					<p className="m-0 text-[12px] leading-[16px] tracking-[3px] text-green-70 font-bold">
						{headings[number]}
					</p>
					{/* paragraph */}
					<p
						className="py-[24px] lg:pb-[72px] text-[24px] leading-[32px]  text-blue-80
                        lg:text-[36px]  lg:leading-{48px]">
						{paragraphs[number]}
					</p>
					{/* name */}
					<p
						className="text-blue-80	text-[14px]	leading-[32px]	lg:text-[32px] font-semibold
						lg:pt-[50px] lg:pb-[16px]">
						{names[number]}
					</p>
					{/* title*/}
					<p className="text-green-70 text-[14px] leading-[32px]	lg:text-[32px] font-[500]">
						{titles[number]}
					</p>
					<div
						className="flex flex-row flex-nowrap space-between items-center 
						 pb-[40px] md:pb-[56px] lg:pb-[72px] lg:pt-[24px]">
						<p
							className="text-[18px] lg:text-[20px] place-content-start leading-[48px] 
							text-blue-80 font-bold">
							Read the whole story
						</p>
						<div className="flex self-end items-center  bottom-[64px] ml-auto pt-[24px]">
							<button
								onClick={() =>
									setNumber(number => (number === 0 ? 3 : number - 1))
								}
								className="hidden lg:flex justify-center items-center top-[50%]
								w-[48px] h-[48px] border-2 border-green-60 rounded-[24px] mr-[16px]">
								<img src="/img/left-chevron.png" alt="" className="p-[10px]" />
							</button>
							<button
								onClick={() =>
									setNumber(number => (number == 3 ? 0 : number + 1))
								}
								className="hidden lg:flex justify-center items-center top-[50%]
								w-[48px] h-[48px] border-2 border-green-60 rounded-[24px] mr-[16px]">
								<img src="/img/right-chevron.png" alt="" className="p-[10px]" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
