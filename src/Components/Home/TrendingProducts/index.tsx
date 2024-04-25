import React from 'react';
import Image from 'next/image';
import ScrollListProducts from '../ScrollListProducts';
import ListMenu from './listMenu';
export default function TrendingProducts(){
	return(
		<article className='customContainer'>
			<section className='w-full max-sm:flex-col max-sm:items-center flex justify-between mb-8'>
				<div>
					<h2 className='text-2xl font-bold text-stone-800 max-sm:pb-4'>Trending Products</h2>
				</div>
				<ListMenu />
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
				<section className='relative overflow-x-hidden'>
					<ScrollListProducts listId={4} listVisibility={true}/>		
				</section>		
			</section>
			<hr />
		</article>
	);
}