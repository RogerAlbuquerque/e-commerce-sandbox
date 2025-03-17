'use client'
import React, { useEffect, useState } from 'react';
import ProductsImages from '../Components/ProductImage';
import ProductInfos from '../Components/ProductInfos';
import AdvancedInformation from '../../../app/product/Components/AdvancedInformation';
import HeaderOfProducts from '../../../app/product/Components/HeaderOfProducts';
import { useParams } from 'next/navigation'
import { typeListProducts } from '../../../@types/listProducts';
export default function Product() {

	const [product, setProduct] = useState<typeListProducts>();
	const { productId } = useParams()

	useEffect(() => {
		fetch('http://localhost:8080/api/Products')
			.then(data => data.json())
			.then(products => {
				const response = products.find((product: typeListProducts) => product.productId == productId)
				setProduct(response)
			})

	}, [productId]);


	if (!product) {
		return null
	}

	return (
		<main className='flex justify-center border-b mb-12'>

			<article className='customContainer '>
				<HeaderOfProducts />
				<article className='flex justify-between mb-24 '>
					<ProductsImages featuredImagePath={product.featuredImagePath} secondaryImagesPath={product.secondaryImagesPath} />
					<ProductInfos productDetails={product} />
				</article>
				<AdvancedInformation />
			</article>
		</main>

	);
}
