'use client';
import React from 'react';
import ProductsImages from '../Components/ProductImage';
import ProductInfos from '../Components/ProductInfos';
import AdvancedInformation from '@/app/product/Components/AdvancedInformation';
import HeaderOfProducts from '@/app/product/Components/HeaderOfProducts';
import BottomCard from '@/app/product/Components/BottomCard';


export default function Product() {
	return (
		<main className='flex justify-center border-b mb-12'>
			<article className='customContainer '>				
				<HeaderOfProducts />
				<article className='flex justify-between mb-24 '>
					<ProductsImages/>
					<ProductInfos/>
				</article>			
				<AdvancedInformation/>
				<BottomCard/>		
			</article>
		</main>
		
	);
}
