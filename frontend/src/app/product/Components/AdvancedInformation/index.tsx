
'use client';
import React,{ useEffect, useState }  from 'react';
import './style.css';
import { typeListProducts } from '../../../../@types/listProducts';
import ScrollListProducts from '../../../../Components/ScrollListProducts';
export default function AdvancedInformation(){

	const [handleAdvancedInfoMenus, setHandleAdvancedInfoMenus] = useState<1 | 2 | 3 |4>(1);
	const [productList, setProductList] = useState<typeListProducts[]>();

	useEffect(() => {
		fetch('https://backend-csharp.onrender.com/api/Products')
			.then(data => data.json())
			.then(dt => setProductList(dt))
	}, []);

	if (!productList) {
		return null
	}

	return(
		<article>
			<ul className='flex justify-center gap-12 text-lg'>
				<li className={handleAdvancedInfoMenus == 1 ? 'border-b-2 text-amber-400 border-amber-400 pb-1 px-6' : 'transition hover:border-b-2 hover:text-amber-400 border-amber-400 pb-1 px-6'}>
					<button onClick={() => setHandleAdvancedInfoMenus(1)}>Description</button>
				</li>
				<li className={handleAdvancedInfoMenus == 2 ? 'border-b-2 text-amber-400 border-amber-400 pb-1 px-6' : 'transition hover:border-b-2 hover:text-amber-400 border-amber-400 pb-1 px-6'}>
					<button onClick={() => setHandleAdvancedInfoMenus(2)}>Additional Information</button>
				</li>
				<li className={handleAdvancedInfoMenus == 3 ? 'border-b-2 text-amber-400 border-amber-400 pb-1 px-6' : 'transition hover:border-b-2 hover:text-amber-400 border-amber-400 pb-1 px-6'}>
					<button onClick={() => setHandleAdvancedInfoMenus(3)}>Shipping & Returns</button>
				</li>
				<li className={handleAdvancedInfoMenus == 4 ? 'border-b-2 text-amber-400 border-amber-400 pb-1 px-6' : 'transition hover:border-b-2 hover:text-amber-400 border-amber-400 pb-1 px-6'}>
					<button onClick={() => setHandleAdvancedInfoMenus(4)}>Reviews (2)</button>
				</li>
			</ul>

			<article id='advancedInfos' className='p-6 border flex flex-col gap-2 '>
				
				<div id='Description' className={handleAdvancedInfoMenus == 1 ? '' : 'hidden'}>
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

				<div id='Additional' className={handleAdvancedInfoMenus == 2 ? 'flex flex-col gap-2 leading-7' : 'hidden'}>				
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

				<div id='Shipping & Return' className={handleAdvancedInfoMenus == 3 ? 'flex flex-col gap-2 leading-7' : 'hidden'}>
					<h2>Delivery & returns</h2>
					<p>
						We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our Delivery information
						We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our Returns information
					</p>
				</div>

				<div id='Reviews' className={handleAdvancedInfoMenus == 4 ? 'flex flex-col gap-2 leading-7' : 'hidden'}>
					Reviews
				</div>
			</article>


			<article className='mb-8'>
				<div className='text-center text-2xl font-semibold my-12'>You May Also Like</div>
				<div className='flex gap-4'>
					<ScrollListProducts listProducts={productList} idToScroll={7} listVisibility={true}/>
				</div>
			</article>
		</article>
	);
}