'use client';
import React from 'react';
import CardProducts from '../CardProduct';
import { MdArrowForwardIos } from 'react-icons/md';
export default function TopSellingProducts(){
	return(
		<article className='customContainer mb-20'>
			<section className='flex max-sm:flex-col max-sm:items-center justify-between mb-8 mt-20'>
				<div>
					<h2 className='text-2xl font-bold text-stone-800  max-sm:pb-4'>Top Selling Products</h2>
				</div>
				<ul className='flex max-sm:justify-center flex-wrap gap-6 text-stone-800'>
					<li className='border-b-2 border-amber-400 px-2'><a href='#'>ALL</a></li>
					<li className='px-2'><a href='#'>ACCESSORIES</a></li>
					<li className='px-2'><a href='#'>CAMERAS & CAMCORDERS</a></li>
					<li className='px-2'><a href='#'>COMPUTERS & TABLETS</a></li>
					<li className='px-2'><a href='#'>ENTERTAINMENT</a></li>
				</ul>
			</section>
			<section  className='relative flex '>
				<div id='listProducts3' className='customContainer pl-4 max-md:pl-8 flex gap-4 overflow-x-auto scroll-smooth'>
					<CardProducts sale={true} topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
					<CardProducts topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
				</div>					
				<div id='ScrollButtonRight' className='h-full flex items-center justify-center w-8 absolute right-0 cursor-pointer' style={{background:'#FFFE', boxShadow:'-4px 0px 4px #8884'}} onClick={() => document.getElementById('listProducts3')!.scrollLeft += 290}> 
					<MdArrowForwardIos className='text-xl'/>
				</div>
				<div id='ScrollButtonLeft' className='h-full flex items-center justify-center w-8 absolute left-0 cursor-pointer' style={{background:'#FFFE', boxShadow:'4px 0px 4px #8884'}} onClick={() => document.getElementById('listProducts3')!.scrollLeft -= 290}> 
					<MdArrowForwardIos className='text-xl rotate-180'/>
				</div>
			</section>
			<hr />
		</article>
	);
}