'use client';
import React from 'react';
import Image from 'next/image';
export default function ProductsDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white flex' style={{top:'11.8rem'}}>
			<article className='flex flex-col p-6'>
				<h4 className='font-normal'>PRODUCT DETAILS</h4>
				<ul>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Default</a></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Centered</a></li>
					<li className='pt-3 font-normal flex relative' style={{ color: 'rgb(168, 167, 167)' }}>
						<a href='#'>Extended Infor</a> 
						<div className='absolute right-1.5 top-2 p-0.5 bg-lime-600' style={{fontSize:'8px', color:'white'}}>NEW</div>
					</li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Gallery</a></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Sticky Info</a></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Boxed With Sidebar</a></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Full Width</a></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Masonry Sticky Info</a></li>
				</ul>
			</article>
			<Image
				src='/Imgs/toHeader/productMenuImage.png'
				width={222}
				height={220}
				alt="Hamburguer menu to show more links to navigation on e-commerce"
				style={{ height: '338px', marginLeft:'40px' }}
			/>
		</article>
	);
}
