'use client';
import React, { useState } from 'react';
import ScrollListProducts from '@/Components/ScrollListProducts';
import ListMenu from '../TrendingProducts/listMenu';
import { productList } from '@/utils/hardListOfProducts';

export default function TopSellingProducts() {
	const [listMenuStatus, setListMenuStatus] = useState([true, false, false, false, false]);

	function handleMenuListStatus(menuId: number) {
		const newArray = [false, false, false, false, false];
		newArray[menuId] = true;
		setListMenuStatus(newArray);
	}

	return (
		<article className='customContainer mb-20'>
			<section className='flex max-sm:flex-col max-sm:items-center justify-between mb-8 mt-20'>
				<div>
					<h2 className='text-2xl font-bold text-stone-800  max-sm:pb-4'>Top Selling Products</h2>
				</div>
				<ListMenu
					listMenuStatus={listMenuStatus}
					handleMenuListStatus={handleMenuListStatus}
				/>
			</section>
			<section className='relative flex '>
				<ScrollListProducts
					listProducts={productList}
					idToScroll={5}
					listVisibility={true}
				/>
			</section>
			<hr />
		</article>
	);
}