"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductsImages from '../Components/ProductImage';
import ProductInfos from '../Components/ProductInfos';
import AdvancedInformation from '../../../app/product/Components/AdvancedInformation';
import HeaderOfProducts from '../../../app/product/Components/HeaderOfProducts';
import { useParams } from 'next/navigation'
import { typeListProducts } from '../../../@types/listProducts';
import { OrbitProgress } from 'react-loading-indicators';
export default function Product() {

	const [product, setProduct] = useState<typeListProducts>();
	const [isMainImageVisible, setIsMainImageVisible] = useState(true);
	const mainImageRef = useRef<HTMLDivElement | null>(null);
	const { productId } = useParams();

	useEffect(() => {
		if (product?.productId !== productId) {
			// fetch(`https://backend-csharp.onrender.com/api/Products/${productId}`)
			// 	.then(data => data.json())
			// .then(products => setProduct(products));
			fetch(`http://localhost:5224/api/Products/${productId}`)
				.then(data => data.json())
				.then(products => setProduct(products));
		}

	}, [productId, product]);

	useEffect(() => {
		if (!mainImageRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				setIsMainImageVisible(entry.isIntersecting);
			},
			{
				threshold: 0.2
			}
		);

		observer.observe(mainImageRef.current);

		return () => {
			observer.disconnect();
		};
	}, [product]);


	if (!product) {
		return (
		<main className='flex justify-center border-b mb-12'>
			<OrbitProgress color="#fdd804" size="medium" text="" textColor="" />
		</main>
	);
		
	}

	return (
		<main className='flex justify-center border-b mb-12'>

			<article className='customContainer '>
				<HeaderOfProducts />
				<article className='flex justify-between mb-24 '>
					<ProductsImages
						featuredImagePath={product.featuredImagePath}
						secondaryImagesPath={product.secondaryImagesPath}
						mainImageRef={mainImageRef}
					/>
					<ProductInfos
						productDetails={product}
						showBottomCard={!isMainImageVisible}
					/>
				</article>
				<AdvancedInformation />
			</article>
		</main>

	);
}