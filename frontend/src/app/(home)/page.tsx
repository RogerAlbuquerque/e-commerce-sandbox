'use client'
import React, { useState } from 'react';
import DealsAndOutlet from './Components/DealsAndOutlet';
import Sponsor from './Components/Sponsors';
import TrendingProducts from './Components/TrendingProducts';
import TopSellingProducts from './Components/TopSellingProducts';
import Offers from './Components/Offers/page';
import Contact from './Components/Contact/page';
import MainShowedProducts from './Components/MainShowedProducts';

import { typeListProducts } from '@/@types/listProducts';
import { productList} from '@/utils/hardListOfProducts';



export default function Index() {
	// ------------------------------------------------ JUST FOR FIRST TESTS ------------------------------------------------
	const [listProducts0, setListProducts0] = useState<typeListProducts[]>();
	// ------------------------------------------------ JUST FOR FIRST TESTS ------------------------------------------------
	const [listProducts] = useState<typeListProducts[]>(productList);
	const [dealsProducts] = useState<typeListProducts[]>(productList);
	const [trendingProducts] = useState<typeListProducts[]>(productList);
	const [topSellingProducts] = useState<typeListProducts[]>(productList);

	async function getProduct() {
		const res = await fetch('https://localhost:7132/api/Products');
		const data = await res.json();
	  
		setListProducts0(data)
		return data
	  }

	  
	return (
		<main className='text-neutral-400 flex flex-col items-center z-0' >
			<button className='w-24 h-24 bg-red-600' onClick={getProduct}> TESTE </button>
			<button className='w-24 h-24 bg-green-600' onClick={() => console.log(listProducts0)}> SHOW </button>
			<MainShowedProducts listProducts={listProducts0 ? listProducts0 : listProducts}/>
			<DealsAndOutlet dealsProducts={dealsProducts}/>			
			<article className='customContainer flex flex-col items-center '>				
				<Sponsor />
				<TrendingProducts trendingProducts={trendingProducts}/>			
				<TopSellingProducts topSellingProducts={topSellingProducts}/>			
				<Offers />		
				<Contact />
			</article>
		</main>
		
	);
}
