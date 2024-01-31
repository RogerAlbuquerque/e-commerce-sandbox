import React from 'react';
import Image from 'next/image';
import ScrollListProducts from '../ScrollListProducts';
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
				<ScrollListProducts listId={2}/>				
			</section>
			<hr />
		</article>
	);
}