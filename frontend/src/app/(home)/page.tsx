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

export async function getServerSideProps() {
  const res = await fetch('https://api.exemplo.com/dados');
  const data = await res.json();

  return {
    props: {
      dados: data, // será passado como props para o componente
    },
  };
}


export default function Index() {
	// ------------------------------------------------ JUST FOR FIRST TESTS ------------------------------------------------
	// const [listProducts0] = useState<typeListProducts[]>(productList);
	// ------------------------------------------------ JUST FOR FIRST TESTS ------------------------------------------------
	const [listProducts] = useState<typeListProducts[]>(productList);
	const [dealsProducts] = useState<typeListProducts[]>(productList);
	const [trendingProducts] = useState<typeListProducts[]>(productList);
	const [topSellingProducts] = useState<typeListProducts[]>(productList);

	return (
		<main className='text-neutral-400 flex flex-col items-center z-0' >
			<MainShowedProducts listProducts={listProducts}/>
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
