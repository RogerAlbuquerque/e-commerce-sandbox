'use client'
import React,{useEffect, useState} from 'react';
import DealsAndOutlet from './Components/DealsAndOutlet';
import Sponsor from './Components/Sponsors';
import TrendingProducts from './Components/TrendingProducts';
import TopSellingProducts from './Components/TopSellingProducts';
import Offers from './Components/Offers/page';
import Contact from './Components/Contact/page';
import MainShowedProducts from './Components/MainShowedProducts';
import { typeListProducts } from '../../@types/listProducts';




export default function Index() {
	const [productList, setProductList] = useState<typeListProducts[]>([])



		useEffect(() => {
			const API_URL = typeof window !== "undefined"
			? process.env.NEXT_PUBLIC_API_URL  // Para o navegador
			: process.env.INTERNAL_API_URL;    // Para o SSR dentro do Docker

			fetch(`${API_URL}/api/Products`)
				.then(data => data.json())
				.then(dt => setProductList(dt))
	
		}, []);

	// async function callBackend() {
	// 	const API_URL = typeof window !== "undefined"
	// 		? process.env.NEXT_PUBLIC_API_URL  // Para o navegador
	// 		: process.env.INTERNAL_API_URL;    // Para o SSR dentro do Docker

	// 	try {
	// 		const res = await fetch(`${API_URL}/api/Products`);
	// 		const data = await res.json();
	// 		setProductList(data)
	// 	}
	// 	catch {
	// 		throw new Error("O BACKEND NÃO CHAMOU DIREITO AQUI ENTÃO DEU ERROOOOOOOOOOOOOOOOOOOOOOOOO----------------" + process.env.NEXT_PUBLIC_API_URL + '--------------------' + process.env.INTERNAL_API_URL);
	// 	}
	// }

	// callBackend()


	if (productList.length === 0) {
		return null
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
