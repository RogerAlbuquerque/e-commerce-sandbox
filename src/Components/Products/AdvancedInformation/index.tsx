
import CardProduct from '@/Components/Home/CardProduct';
import React from 'react';

export default function AdvancedInformation(){
	return(
		<article>
			<ul className='flex justify-center gap-12 text-lg'>
				<li className='border-b-2 text-amber-400 border-amber-400 pb-1 px-6'>
					<button>Description</button>
				</li>
				<li className='transition hover:border-b-2 hover:text-amber-400 border-amber-400 pb-1 px-6'>
					<button>Additional Information</button>
				</li>
				<li className='transition hover:border-b-2 hover:text-amber-400 border-amber-400 pb-1 px-6'>
					<button>Shipping & Returns</button>
				</li>
				<li className='transition hover:border-b-2 hover:text-amber-400 border-amber-400 pb-1 px-6'>
					<button>Reviews (2)</button>
				</li>
			</ul>

			<div className='p-6 border flex flex-col gap-2 leading-6'>
				<h1 className='font-normal text-lg'>Product Information</h1>
				<p className='text-stone-500'>						
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
				</p>

				<ul className='list-disc pl-5 text-stone-700'>
					<li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
					<li>Vivamus finibus vel mauris ut vehicula.</li>
					<li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
				</ul>
					
				<p className=' text-stone-600'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
				</p>
			</div>


			<article>
				<div className='text-center text-2xl font-semibold my-12'>You May Also Like</div>
				<div className='flex gap-4'>
					<CardProduct newProduct={true} topProduct={true}/>
					<CardProduct newProduct={true} topProduct={true}/>
					<CardProduct newProduct={true} topProduct={true}/>
					<CardProduct newProduct={true} topProduct={true}/>
				</div>
			</article>
		</article>
	);
}