import React from 'react';
import DealsAndOutlet from '../../Components/Home/DealsAndOutlet';
import Sponsor from '../../Components/Home/Sponsors';
import TrendingProducts from '../../Components/Home/TrendingProducts';
import TopSellingProducts from '../../Components/Home/TopSellingProducts';
import Offers from '../../Components/Home/Offers/page';
import Contact from '../../Components/Home/Contact/page';
import FeaturedProducts from '../../Components/Home/FeaturedProducts';
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
