import React from 'react';
import ScrollListProducts from '../ScrollListProducts';
import ListMenu from '../TrendingProducts/listMenu';
export default function TopSellingProducts(){
	return(
		<article className='customContainer mb-20'>
			<section className='flex max-sm:flex-col max-sm:items-center justify-between mb-8 mt-20'>
				<div>
					<h2 className='text-2xl font-bold text-stone-800  max-sm:pb-4'>Top Selling Products</h2>
				</div>
				<ListMenu />
			</section>
			<section  className='relative flex '>
				<ScrollListProducts listId={5} listVisibility={true}/>		
			</section>
			<hr />
		</article>
	);
}