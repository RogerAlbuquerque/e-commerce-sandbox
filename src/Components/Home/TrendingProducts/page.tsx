import React from 'react';
import Image from 'next/image';
import CardProducts from '../CardProduct';
export default function TrendingProducts(){
	return(
		<article className='customContainer'>
			<section className='w-full flex justify-between mb-8'>
				<div>
					<h2 className='text-2xl font-bold text-stone-800'>Trending Products</h2>
				</div>
				<ul className='flex gap-6 text-stone-800'>
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
				<div className='flex overflow-auto gap-4'>
					<CardProducts sale={true} topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
				</div>					
			</section>
			<hr />
		</article>
	);
}