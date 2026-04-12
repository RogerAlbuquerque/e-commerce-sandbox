'use client'
import React, { useEffect, useState } from 'react';
import DealsAndOutlet from './Components/DealsAndOutlet';
import Sponsor from './Components/Sponsors';
import TrendingProducts from './Components/TrendingProducts';
import TopSellingProducts from './Components/TopSellingProducts';
import Offers from './Components/Offers/page';
import Contact from './Components/Contact/page';
import MainShowedProducts from './Components/MainShowedProducts';
import { typeListProducts } from '../../@types/listProducts';
import { OrbitProgress } from 'react-loading-indicators';


export default function Index() {
	const [productList, setProductList] = useState<typeListProducts[] | undefined>([])

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/Products`)
			.then(data => {
				return data.json()
			})
			.then(dt => setProductList(dt))
			.catch(() => {setProductList(undefined)})

	}, []);

	if (productList == undefined){
		throw new Error("API ERROR, CHECK BACK-END")
	}	else if (productList.length === 0) {
		return(
			<main className='flex justify-center border-b mb-12'>
				<OrbitProgress color="#fdd804" size="medium" text="" textColor="" />
			</main>
		)

	} else return (
		<main className='text-neutral-400 flex flex-col items-center z-0' >
				<MainShowedProducts listProducts={productList} />
				<DealsAndOutlet dealsProducts={productList} />
				<article className='customContainer flex flex-col items-center '>
				<Sponsor />
				<TrendingProducts trendingProducts={productList} />
				<TopSellingProducts topSellingProducts={productList} />
				<Offers />
				<Contact />
				</article>
	</main>

	);
}
