'use client';
import React from 'react';
import ProductsImages from '../../../Components/Products/ProductImage';
import ProductInfos from '../../../Components/Products/ProductInfos';
import AdvancedInformation from '@/Components/Products/AdvancedInformation';
import HeaderOfProducts from '@/Components/Products/HeaderOfProducts';
import BottomCard from '@/Components/Products/BottomCard';


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
