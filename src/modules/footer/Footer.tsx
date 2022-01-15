import React from "react";

const Footer: React.FC = (): JSX.Element => {
	return (
		<div className="bg-blue-80 w-screen lg:flex lg:justify-center relative">
			<div
				className="max-w-[1024px] flex flex-col md:flex-row py-[80px] px-[24px] space-between
                    ">
				{/* language selection */}
				<div className="flex flex-row md:flex-col md:mr-[24px]">
					<img
						src="/img/mongo.jpg"
						alt=""
						className="max-w-[120px] md:max-w-[150px]"
					/>
					<div className="flex flex-row  md:mt-[24px]">
						<img
							src="/img/globe.png"
							alt=""
							className="max-w-[30px] md:max-w-[30px] bg-white rounded-full"
						/>
						<p className="text-white ml-[12px] text-center self-center text-[18px]">
							English
						</p>
					</div>
				</div>
				{/* about */}
				<div className="flex flex-col mt-[80px] md:mt-0 md:w-[35vw]">
					<p className="block text-white font-[600] text-[22px] mb-[24px] leading-[24px]">
						About
					</p>
					<div
						className="flex flex-row md:flex-col flex-wrap text-white justify-between 
                        gap-y-[30px] text-[14x]">
						<p className="w-[50%] lg:w-full">Careers</p>
						<p className="w-[50%] lg:w-full">Investor Relations</p>
						<p className="w-[50%] lg:w-full">Legal Notices</p>
						<p className="w-[50%] lg:w-full">Privacy Notices</p>
						<p className="w-[50%] lg:w-full">Security Information</p>
						<p className="w-[50%] lg:w-full">Trust Center</p>
					</div>
				</div>
				{/* support */}
				<div className="flex flex-col mt-[80px] md:mt-0 md:w-[35vw]">
					<p className="block text-white font-[600] text-[22px] mb-[24px] leading-[24px]">
						Support
					</p>
					<div
						className="flex flex-row flex-wrap md:flex-col text-white justify-between 
                        gap-y-[30px]  text-[14x]">
						<p className="w-[50%] lg:w-full">Contact Us</p>
						<p className="w-[50%] lg:w-full">Customer Portal</p>
						<p className="w-[50%] lg:w-full">Atlas Status</p>
						<p className="w-[50%] lg:w-full">Paid Support</p>
					</div>
				</div>
				{/* social */}
				<div className="flex flex-col mt-[80px] md:mt-0 md:w-[25vw]">
					<p className="block text-white font-[600] text-[22px] mb-[24px] leading-[24px]">
						Social
					</p>
					<div
						className="flex flex-row md:flex-col flex-wrap text-white justify-between 
                        gap-y-[30px] text-[14x]">
						<div className="flex flex-row  w-[50%] lg:w-full">
							<img
								src="/img/github.png"
								alt=""
								className="bg-white max-w-[25px] max-h-[25px] rounded-full"
							/>
							<p className="ml-[16px]">Github</p>
						</div>
						<div className="flex flex-row  w-[50%] lg:w-full">
							<img
								src="/img/stack.svg"
								alt=""
								className="bg-white max-w-[25px] max-h-[25px] rounded-full"
							/>
							<p className="ml-[16px]">Stack Overflow</p>
						</div>

						<div className="flex flex-row  w-[50%] lg:w-full">
							<img
								src="/img/linkedin.png"
								alt=""
								className="bg-white max-w-[25px] rounded-full"
							/>
							<p className="ml-[16px]">LinkedIn</p>
						</div>
						<div className="flex flex-row  w-[50%] lg:w-full">
							<img
								src="/img/youtube.png"
								alt=""
								className="bg-white max-w-[25px] rounded-full"
							/>
							<p className="ml-[16px]">Youtube</p>
						</div>

						<div className="flex flex-row  w-[50%] lg:w-full">
							<img
								src="/img/twitter.svg"
								alt=""
								className="bg-white max-w-[25px] rounded-full"
							/>
							<p className="ml-[16px]">Twitter</p>
						</div>
						<div className="flex flex-row  w-[50%] lg:w-full">
							<img
								src="/img/twitch.svg"
								alt=""
								className="bg-white max-w-[25px] rounded-full"
							/>
							<p className="ml-[16px]">Twitch</p>
						</div>
						<div className="flex flex-row  w-[50%] lg:w-full">
							<img
								src="/img/facebook.svg"
								alt=""
								className="bg-white max-w-[25px] rounded-full"
							/>
							<p className="ml-[16px]">Facebook</p>
						</div>
					</div>
				</div>

				<p className="text-white text-[16px] absolute top-[95%]">© 2021 MongoDB, Inc.</p>
			</div>
		</div>
	);
};

export default Footer;
