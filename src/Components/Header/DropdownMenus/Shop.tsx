'use client';
import React from 'react';
//import Image from 'next/image';
export default function ShopDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white p-4 flex'>
			<div>
				<section>
					<h4 className='font-normal'>SHOP WITH SIDEBAT</h4>
					<ul>
						<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop List</a></li>
						<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Grid 2 Columns</a></li>
						<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Grid 3 Columns</a></li>
						<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Grid 4 Columns</a></li>
						<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Market</a></li>
					</ul>
				</section>
				<section className='pt-4'>
					<h4 className='font-normal'>PRODUCT CATEGORY</h4>
					<ul>
						<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Product Category Boxed</a></li>
						<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Product Category Fullwidth</a></li>
					</ul>
				</section>
			</div>

			<div className='pl-10'>				
				<section>
					<h4 className='font-normal'>SHOP NO SIDEBAR</h4>
					<ul>
						<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Shop Boxed No Sidebar</a></li>
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
	);
}
