import React from 'react';
import ProductsImages from '../../Components/Products/ProductImage/';
import ProductInfos from '../../Components/Products/ProductInfos/';
import AdvancedInformation from '@/Components/Products/AdvancedInformation';
import HeaderOfProducts from '@/Components/Products/HeaderOfProducts';

export default function Product() {
	return (
		<main className='flex justify-center'>
			<article className='customContainer'>				
				<HeaderOfProducts />
				<article className='flex justify-between mb-24 '>
					<ProductsImages/>
					<ProductInfos/>
				</article>			
				<AdvancedInformation/>
			</article>
		</main>
		
	);
}
