'use client';
import React from 'react';
import Image from 'next/image';
export default function ShopDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white flex '>
			<article className='flex p-6'>
				<div>
					<section>
						<h4 className='font-normal'>SHOP WITH SIDEBAT</h4>
						<ul>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop List</a></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Grid 2 Columns</a></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Grid 3 Columns</a></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Grid 4 Columns</a></li>
							<li className='pt-3 font-normal flex relative' style={{ color: 'rgb(168, 167, 167)' }}>
								<a href='#'>Shop Market</a> 
								<div className='absolute right-16 top-2 p-0.5 bg-lime-600' style={{fontSize:'8px', color:'white'}}>NEW</div>
							</li>
						</ul>
					</section>
					<section className='pt-4'>
						<h4 className='font-normal'>PRODUCT CATEGORY</h4>
						<ul>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Product Category Boxed</a></li>
							<li className='pt-3 font-normal flex relative' style={{ color: 'rgb(168, 167, 167)' }}>
								<a href='#'>Product Category Fullwidth</a> 
								<div className='absolute top-2 p-0.5 bg-lime-600' style={{fontSize:'8px', color:'white', right:'-3em'}}>NEW</div>
							</li>
						</ul>
					</section>
				</div>

				<div className='pl-10'>				
					<section>
						<h4 className='font-normal'>SHOP NO SIDEBAR</h4>
						<ul>
							<li className='pt-3 font-normal flex relative' style={{ color: 'rgb(168, 167, 167)' }}>
								<a href='#'>Shop Boxed No Sidebar</a> 
								<div className='absolute top-2 p-0.5 bg-red-400' style={{fontSize:'8px', color:'white', right:'-1em'}}>HOT</div>
							</li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Fullwidth No Sidebar</a></li>
						</ul>
					</section>
					<section className='pt-4'>
						<h4 className='font-normal'>SHOP PAGES</h4>
						<ul>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Cart</a></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Checkout</a></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Wishlist</a></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>My Account</a></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Lookbook</a></li>
						</ul>
					</section>
				</div>
			</article>
			<Image
				src='/Imgs/toHeader/shopMenuImage.png'
				width={222}
				height={220}
				alt="Hamburguer menu to show more links to navigation on e-commerce"
				style={{ height: '338px', marginLeft:'8px' }}
			/>
		</article>
	);
}
