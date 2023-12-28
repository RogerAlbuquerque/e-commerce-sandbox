import React from 'react';
import DealsAndOutlet from './DealsAndOutlet/page';
import Sponsor from './Sponsors/page';
import TrendingProducts from './TrendingProducts/page';
import TopSellingProducts from './TopSellingProducts/page';
import Offers from './Offers/page';
import Contact from './Contact/page';
import HighlightsProducts from './HighlightsProducts/page';
export default function Index() {
	return (
		<main className='text-neutral-400 grid justify-items-center z-0' >
			<HighlightsProducts />
			<DealsAndOutlet />			
			<article className='customContainer'>
				<Sponsor />
				<TrendingProducts />			
				<TopSellingProducts />			
				<Offers />		
				<Contact />
			</article>
		</main>
		
	);
}
