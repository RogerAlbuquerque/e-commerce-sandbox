'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ListMenu from './listMenu';
import ScrollListProducts from '../../../../Components/ScrollListProducts';
import { typeListProducts } from '../../../../@types/listProducts';

interface listProductPropType{
	trendingProducts:typeListProducts[]
}

export default function TrendingProducts({trendingProducts}:listProductPropType) {
	const [listMenuStatus, setListMenuStatus] = useState([true, false, false, false, false]);

	function handleMenuListStatus(menuId: number) {
		const newArray = [false, false, false, false, false];
		newArray[menuId] = true;
		setListMenuStatus(newArray);

	}
	return (
		<article className='customContainer'>
			<section className='w-full max-sm:flex-col max-sm:items-center flex justify-between mb-8'>
				<div>
					<h2 className='text-2xl font-bold text-stone-800 max-sm:pb-4'>Trending Products</h2>
				</div>
				<ListMenu listMenuStatus={listMenuStatus} handleMenuListStatus={handleMenuListStatus} />
			</section>
			<section className='flex gap-4 pb-20'>
				<Image
					src='/Imgs/Main/Sponsors/SponsorProducts/product1.png'
					width={246}
					height={14}
					alt=""
					className='cursor-pointer max-xl:hidden'
					style={{ height: '425px' }}
				/>
				<section className='relative overflow-x-hidden'>
					<ScrollListProducts listProducts={trendingProducts} idToScroll={4} listVisibility={true} />
				</section>
			</section>
			<hr />
		</article>
	);
}