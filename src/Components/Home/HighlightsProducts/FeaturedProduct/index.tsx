import React from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';



export default function FeaturedProduct(){
	return(					
		<section className='relative'>
			<div className='h-full'>
				<Image
					src='/Imgs/Main/earphone.png'
					width={783}
					height={0}
					alt=""
					className='h-full w-full max-sm:h-96'
				/>
			</div>
			<div className='absolute top-16 max-sm:top-24 ml-2 flex flex-col w-80 items-center max-md:pl-2 max-md:items-start cursor-default '>
				<div className='flex flex-col gap-2 '>
					<p className='text-base text-amber-400'>Daily Deals</p>
					<p className='text-5xl max-sm:text-3xl font-bold text-stone-800'>AirPods <br/> Earphones</p>
					<p className='text-sm text-stone-800 relative flex'>
						<span className='text-stone-800'>Today:</span> 
						<span className='text-amber-400  text-5xl max-sm:text-3xl font-extrabold'>$247</span>
						<span className='text-amber-400'>.99</span>
					</p>
					<a href="#" className='bg-amber-400 flex gap-1 items-center w-fit text-base max-sm:text-xs rounded-full px-12 max-sm:px-2 py-4 max-sm:py-1 text-white mt-4 max-sm:mt-0 hover:bg-yellow-600 hover:text-white'>
						Click Here <IoIosArrowRoundForward className='text-xl'/>
					</a>
				</div>
			</div>
		</section>
	);
}