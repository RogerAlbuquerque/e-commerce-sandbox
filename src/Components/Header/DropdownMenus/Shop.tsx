'use client';
import React from 'react';
import Image from 'next/image';
export default function ShopDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white flex' style={{top:'11.8rem'}}>
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
								<a href='#' className='relative'>
									Shop Market
									<div className='absolute px-1 -right-7 top-0 text-white text-xs bg-lime-600' style={{fontSize:'.5rem',lineHeight: '.8rem'}}>NEW</div>
								</a> 
								
							</li>
						</ul>
					</section>
					<section className='pt-4'>
						<h4 className='font-normal'>PRODUCT CATEGORY</h4>
						<ul>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Product Category Boxed</a></li>
							<li className='pt-3 font-normal flex items-center relative' style={{ color: 'rgb(168, 167, 167)' }}>
								<a href='#' className='relative'>
									Product Category Fullwidth
									<div className='absolute px-1 -right-7 top-0 text-white text-xs bg-lime-600' style={{fontSize:'.5rem',lineHeight: '.8rem'}}>NEW</div>
								</a> 
							</li>
						</ul>
					</section>
				</div>

				<div className='pl-10'>				
					<section>
						<h4 className='font-normal'>SHOP NO SIDEBAR</h4>
						<ul>
							<li className='pt-3 font-normal flex relative' style={{ color: 'rgb(168, 167, 167)' }}>
								<a href='#' className='relative'>
									Shop Boxed No Sidebar
									<div className='absolute px-1 -right-7 top-0 text-white text-xs bg-red-400' style={{fontSize:'.5em',lineHeight: '.8rem'}}>HOT</div>
								</a> 
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
