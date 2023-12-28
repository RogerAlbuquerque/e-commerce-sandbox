import React from 'react';
import CardProducts from '../../../Components/Home/CardProduct';
export default function TopSellingProducts(){
	return(
		<article className=' mb-20'>
			<section className='w-full flex justify-between mb-8'>
				<div>
					<h2 className='text-2xl font-bold text-stone-800'>Top Selling Products</h2>
				</div>
				<ul className='flex gap-6 text-stone-800'>
					<li className='border-b-2 border-amber-400 px-2'><a href='#'>ALL</a></li>
					<li className='px-2'><a href='#'>ACCESSORIES</a></li>
					<li className='px-2'><a href='#'>CAMERAS & CAMCORDERS</a></li>
					<li className='px-2'><a href='#'>COMPUTERS & TABLETS</a></li>
					<li className='px-2'><a href='#'>ENTERTAINMENT</a></li>
				</ul>
			</section>
			<section className='flex pb-20'>
				<div className='flex gap-4'>
					<CardProducts sale={true} topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
					<CardProducts topProduct={true}/>
					<CardProducts newProduct={true} topProduct={true}/>
				</div>					
			</section>
			<hr />
		</article>
	);
}