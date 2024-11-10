import React from 'react';
// import Image from 'next/image';
import './style.css';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
export default function DealsOfTheDay(){
	return(
		<section className='flex pl-8 h-full flex-col gap-16 pt-8 pr-4 z-10' style={{background:'url(/Imgs/Main/DealOfTheDay.png) no-repeat right #FCFCFC'}}>
			<div>
				<h2 className='text-red-400 text-2xl font-semibold'>Deal of the Day.</h2>
				<p className='text-base'>Limited Quantities.</p>
			</div>				
			<div className='flex flex-col gap-1'>
				<h3 className='font-normal text-stone-700 text-lg'>Brown faux fur longline coat</h3>
				<p className='text-2xl'>
					<span className='text-red-400 font-light'>$310.00</span> Was $190.00 
				</p>
				<Link href="#" className='flex gap-1 items-center text-amber-500 font-medium'>Shop Now <IoIosArrowRoundForward className='text-xl'/></Link>
			</div>
			<section className='flex flex-col items-start'>
				<div className='flex gap-2 items-center justify-start'>
					<div className='clock'>
						00
					</div>
					<span className='text-2xl text-black'>:</span>
					<div className='clock'>
						00
					</div>
					<span className='text-2xl text-black'>:</span>
					<div className='clock'>
						00
					</div>
				</div>
				<div>
					<div className='flex gap-9 pl-2'>
						<p>hour</p>
						<p className='pr-1'>min</p>
						<p>seg</p>
					</div>
				</div>
			</section>	
		</section>
	);
}

