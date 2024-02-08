
import CardProduct from '@/Components/Home/CardProduct';
import React from 'react';
import './style.css';
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

			<article id='advancedInfos' className='p-6 border flex flex-col gap-2 '>
				
				<div id='Description' className='leading-7'>
					<h1>Product Information</h1>
					<p >						
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
					</p>

					<ul>
						<li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
						<li>Vivamus finibus vel mauris ut vehicula.</li>
						<li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
					</ul>
						
					<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
					</p>
				</div>

				<div id='Additional' className='hidden flex flex-col gap-2  leading-7'>				
					<h2>Information</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
					</p>

					<h2>Fabric & care</h2>
					<ul>
						<li>Faux suede fabric</li>
						<li>Gold tone metal hoop handles.</li>
						<li>RI branding</li>
						<li>Snake print trim interior</li>
						<li>Adjustable cross body strap</li>
						<li>Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
					</ul>
				
					<h2>Size</h2>
					<p>one size</p>
				</div>

				<div id='Shipping & Return' className='hidden flex flex-col gap-2 leading-7'>
					<h2>Delivery & returns</h2>
					<p>
						We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our Delivery information
						We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our Returns information
					</p>
				</div>

				<div id='Reviews' className='hidden flex flex-col gap-2 leading-7'>
					Reviews
				</div>
			</article>


			<article className='mb-8'>
				<div className='text-center text-2xl font-semibold my-12'>You May Also Like</div>
				<div className='flex gap-4'>
					<CardProduct sale={true} topProduct={true} simpleLayout={true}/>
					<CardProduct newProduct={true} topProduct={true} simpleLayout={true}/>
					<CardProduct sale={true} topProduct={true} simpleLayout={true}/>
					<CardProduct newProduct={true} topProduct={true} simpleLayout={true}/>
				</div>
			</article>
		</article>
	);
}