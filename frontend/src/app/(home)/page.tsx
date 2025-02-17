import React from 'react';
import DealsAndOutlet from './Components/DealsAndOutlet';
import Sponsor from './Components/Sponsors';
import TrendingProducts from './Components/TrendingProducts';
import TopSellingProducts from './Components/TopSellingProducts';
import Offers from './Components/Offers/page';
import Contact from './Components/Contact/page';
import MainShowedProducts from './Components/MainShowedProducts';

import { typeListProducts } from '@/@types/listProducts';



export default async function Index() {
	const res = await fetch('https://localhost:7132/api/Products');
	const productList:typeListProducts[] = await res.json();



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
