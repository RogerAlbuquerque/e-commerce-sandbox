import React from 'react';
import DealsAndOutlet from './Components/DealsAndOutlet';
import Sponsor from './Components/Sponsors';
import TrendingProducts from './Components/TrendingProducts';
import TopSellingProducts from './Components/TopSellingProducts';
import Offers from './Components/Offers/page';
import Contact from './Components/Contact/page';
import MainShowedProducts from './Components/MainShowedProducts';
import { typeListProducts } from '../../@types/listProducts';




export default async function Index() {
	let productList:typeListProducts[] = [];
	
	try {
		const res = await fetch('http://localhost:8080/api/Products');
		productList = await res.json();
	}
	catch {
		productList = [];
	}


	return (
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
