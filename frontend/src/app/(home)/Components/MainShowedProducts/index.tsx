'use client'
import { DailyDeals } from './DailyDeals';
import { AsideProduct } from './AsideProducts';
import { FeaturedProducts } from './featuredProducts';
import { NewDeals } from './newDeals/indes';
import { useState } from 'react';
import { typeListProducts } from '@/@types/listProducts';
import { productList} from '@/utils/hardListOfProducts';

export default function MainShowedProducts() {
	const [listProducts] = useState<typeListProducts[]>(productList);

	return (
		<article id='containerMain' className='customContainer flex flex-col items-center'>
			<article id='highlightsProducts' className='flex gap-4 pt-4 max-sm:flex-col w-full'>

				<DailyDeals />

				<section className='flex flex-col gap-4 text-neutral-500 w-6/12 max-md:w-full'>
					<AsideProduct
						name='Edifier'
						extraInfo='Stereo Bluetooth'
						emphasisInfo={true}
						imageName='phoneProduct'
						productCategory='Top Product'
					/>
					<AsideProduct
						name='GoPro - Fusion 360'
						extraInfo='Save $70'
						imageName='GoproLink'
						productCategory='Clearence'
					/>
					<AsideProduct
						name='Apple Watch 4'
						extraInfo='Our Hottest Deals'
						imageName='appleWatch'
						productCategory='Featured'
					/>
				</section>
			</article>

			<article className='w-full '>
				<FeaturedProducts listProducts={listProducts}/>
				<NewDeals />
			</article>
		</article>
	);
}