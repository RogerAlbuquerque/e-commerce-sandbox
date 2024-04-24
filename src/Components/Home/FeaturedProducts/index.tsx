'use client';
import React,{ useState }  from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import DailyDeals from './DailyDeals';
import AsideProduct from './AsideProducts';
import ScrollListProducts from '../ScrollListProducts';

export default function HighlightsProducts(){
	const [scrollListId, setScrollListId] = useState(1);

	function setNewscrollListIdValue(newValue:number){
		if(newValue > 3 || newValue < 1){
			newValue = 1;
		}

		setScrollListId(newValue);
	}


	return(
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
				<section className=''>
					<div className='flex flex-wrap gap-8 text-3xl font-semibold justify-center pt-8 pb-6'>
						<button  
							onClick={() => setNewscrollListIdValue(1)}
							className={`${scrollListId == 1 && 'text-stone-800 border-b-2 border-stone-700 pb-4 cursor-pointer hover:text-stone-800'}`}>Featured
						</button>
						<button 
							onClick={() => setNewscrollListIdValue(2)}
							className={`${scrollListId == 2 && 'text-stone-800 border-b-2 border-stone-700 pb-4 cursor-pointer hover:text-stone-800'}`}>On Sale
						</button>
						<button 
							onClick={() => setNewscrollListIdValue(3)}
							className={`${scrollListId == 3 && 'text-stone-800 border-b-2 border-stone-700 pb-4 cursor-pointer hover:text-stone-800'}`}>Top Rated
						</button>
					</div>
			
					<div>
						<ScrollListProducts listId={scrollListId}/> 
					</div>

					<div className='relative flex max-md:flex-col items-center justify-between px-8 max-1lg:px-4 py-4 mb-20 gap-4 '>
						<Image
							src='/Imgs/Main/Noticebar.png'
							width={410}
							height={14}
							alt=""
							style={{width:'80rem', left:'0', zIndex:'-1'}}
							className='absolute -top-3 max-1lg:-top-1 max-md:-top-7 max-md:w-full max-md:h-80 '
						/>
						<div>
							<div className='flex justify-end max-md:justify-center text-xl text-amber-400 font-bold'>New Deals</div>
							<div className='text-xl text-stone-800 font-bold'>Start Daily at 12pm e.t.</div>
						</div>
						<div id="line" className='border-l-4 h-24 max-md:hidden'></div>
						<div className='text-xl font-normal max-md:text-center'>
							<div>Get <span className='text-stone-800'>FREE SHIPPING* & 5% rewards</span> on</div>
							<div>every order with Molla Theme rewards program</div>
						</div>
						<div className='bg-amber-400 text-white rounded-full px-8 py-3 text-base cursor-pointer hover:bg-amber-500 transition'>
							<p className='flex gap-1 items-center'>Add to Cart for $50.00/yr <IoIosArrowRoundForward className='text-xl'/></p>
						</div>
					</div>
				</section>				
			</article>				
		</article>
	);
}