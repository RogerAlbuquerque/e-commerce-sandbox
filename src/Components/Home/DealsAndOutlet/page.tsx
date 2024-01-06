import React from 'react';
import DealsOfTheDay from '../Deals';
import CardProducts from '../CardProduct';
import { IoIosArrowRoundForward } from 'react-icons/io';
export default function DealsAndOutlet(){
	return(
		<article className=' flex items-center flex-col bg-blue-50 w-full pb-24 '>
			<div className='customContainer'>
				<div className='py-12 flex flex-col items-center'>
					<h1 className='text-2xl text-stone-800 font-bold'>Deals & Outlet</h1>
					<p className='text-xl font-light'>Today&#8217;s and more</p>
				</div>

				<article className='flex flex-col items-center justify-center gap-16'>
					<div className='flex max-md:flex-col gap-4 w-full'>
						<section className='w-full'>
							<DealsOfTheDay />
						</section>
						<section className='flex w-full gap-4'>
							<CardProducts/>
							<CardProducts newProduct={true} topProduct={true}/>	
						</section>
					</div>

					<div className='text-stone-800 text-base border border-stone-300 px-12 py-2 rounded-full hover:bg-white'>
						<a href='#' className='flex gap-1 items-center'>Shop More Outlet Deals <IoIosArrowRoundForward className='text-xl'/></a>
					</div>				
				</article>	
			</div>				
		</article>
	);
}