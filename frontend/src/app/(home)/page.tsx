import React from 'react';
import DealsAndOutlet from './Components/DealsAndOutlet';
import Sponsor from './Components/Sponsors';
import TrendingProducts from './Components/TrendingProducts';
import TopSellingProducts from './Components/TopSellingProducts';
import Offers from './Components/Offers/page';
import Contact from './Components/Contact/page';
import FeaturedProducts from './Components/FeaturedProducts';
export default function Index() {
	return (
		<main className='text-neutral-400 flex flex-col items-center z-0' >
			<FeaturedProducts />
			<DealsAndOutlet />			
			<article className='customContainer flex flex-col items-center '>
				<Sponsor />
				<TrendingProducts />			
				<TopSellingProducts />			
				<Offers />		
				<Contact />
			</article>
		</main>
		
	);
}
