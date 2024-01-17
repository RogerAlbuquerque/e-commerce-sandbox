'use client';
import React from 'react';
import Image from 'next/image';
import CardProducts from '../CardProduct';
import { MdArrowForwardIos } from 'react-icons/md';
export default function TrendingProducts(){
	return(
		<article className='customContainer'>
			<section className='w-full max-sm:flex-col max-sm:items-center flex justify-between mb-8'>
				<div>
					<h2 className='text-2xl font-bold text-stone-800 max-sm:pb-4'>Trending Products</h2>
				</div>
				<ul className='flex max-sm:justify-center gap-6 flex-wrap text-stone-800'>
					<li className='border-b-2 border-amber-400 px-2'><a href='#'>ALL</a></li>
					<li className='px-2'><a href='#'>ACCESSORIES</a></li>
					<li className='px-2'><a href='#'>CAMERAS & CAMCORDERS</a></li>
					<li className='px-2'><a href='#'>COMPUTERS & TABLETS</a></li>
					<li className='pl-2'><a href='#'>ENTERTAINMENT</a></li>
				</ul>
			</section>
			<section className='flex gap-4 pb-20'>
				<Image
					src='/Imgs/Main/Sponsors/SponsorProducts/product1.png'
					width={246}
					height={14}
					alt=""
					className='cursor-pointer max-xl:hidden'
					style={{height:'425px'}}
				/>
				<div className='relative flex mb-20 overflow-x-auto '>
					<div id='listProducts2' className='flex gap-4 items-center overflow-x-auto scroll-smooth'>
						<CardProducts sale={true} topProduct={true} />
						<CardProducts newProduct={true} topProduct={true} />
						<CardProducts topProduct={true} />
						<CardProducts newProduct={true} topProduct={true} />
						<CardProducts newProduct={true} topProduct={true} />
						<CardProducts newProduct={true} topProduct={true} />
					</div>
					<div id='ScrollButtonRight' className='h-full flex items-center justify-center w-8 absolute right-0 cursor-pointer' style={{background:'#FFFE', boxShadow:'-4px 0px 4px #8884'}} onClick={() => document.getElementById('listProducts2')!.scrollLeft += 290}> 
						<MdArrowForwardIos className='text-xl'/>
					</div>
					<div id='ScrollButtonLeft' className='h-full flex items-center justify-center w-8 absolute left-0 cursor-pointer' style={{background:'#FFFE', boxShadow:'4px 0px 4px #8884'}} onClick={() => document.getElementById('listProducts2')!.scrollLeft -= 290}> 
						<MdArrowForwardIos className='text-xl rotate-180'/>
					</div>

				</div>					
			</section>
			<hr />
		</article>
	);
}