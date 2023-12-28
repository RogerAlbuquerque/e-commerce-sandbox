import React from 'react';
import DealsAndOutlet from '../Components/Home/DealsAndOutlet/page';
import Sponsor from '../Components/Home/Sponsors/page';
import TrendingProducts from '../Components/Home/TrendingProducts/page';
import TopSellingProducts from '../Components/Home/TopSellingProducts/page';
import Offers from '../Components/Home/Offers/page';
import Contact from '../Components/Home/Contact/page';
import HighlightsProducts from '../Components/Home/HighlightsProducts/page';
export default function Index() {
	return (
		<main className='text-neutral-400 grid justify-items-center z-0' >
			<HighlightsProducts />
			<DealsAndOutlet />			
			<article className='customContainer flex flex-col items-center'>
				<Sponsor />
				<TrendingProducts />			
				<TopSellingProducts />			
				<Offers />		
				<Contact />
			</article>
		</main>
		
	);
}
