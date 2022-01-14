import React from 'react';

interface card {
	img: string;
	heading: string;
	paragraph: string;
	name: string;
	title: string;
}

const Card: React.FC<card> = ({ img }): JSX.Element => {
	return (
		<div className='flex    flex-col    md:flex-row max-w-[1416px] gap-[24px]'>
			<img src={img} alt='' className='w-[100%]' />
			{/* text-div */}
			<div
				className='flex flex-col rounded-[24px] md:rounded-[72px] lg:rounded-[104px]
                 p-[168px -24px -40px] md:p-[56px -56px 0px -182px] lg:p-[72px 80px 0px 296px]
                  shadow-black shadow-md min-h-[720px]'></div>
		</div>
	);
};

export default Card;
