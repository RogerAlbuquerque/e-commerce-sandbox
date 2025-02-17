'use client'
import React from 'react';
import ProductsImages from '../Components/ProductImage';
import ProductInfos from '../Components/ProductInfos';
import AdvancedInformation from '@/app/product/Components/AdvancedInformation';
import HeaderOfProducts from '@/app/product/Components/HeaderOfProducts';
import { productList} from '@/utils/hardListOfProducts';
import { useParams } from 'next/navigation'

export default function Product() {

	const {productId} = useParams()	
	const product = productList.find((product) =>product.productId == Number(productId))

	if(!product)
	{
		return null
	}

	return (
		<main className='flex justify-center border-b mb-12'>
			
			<article className='customContainer '>	
				<HeaderOfProducts />
				<article className='flex justify-between mb-24 '>
					<ProductsImages featuredImagePath={product?.featuredImagePath} secondaryImagesPath={product?.secondaryImagesPath}/>
					<ProductInfos productDetails={product}/>
				</article>			
				<AdvancedInformation/>
			</article>
		</main>
		
	);
}
