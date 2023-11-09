'use client';
import React from 'react';
//import Image from 'next/image';
export default function ShoopDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white p-4 flex flex-col'>
			<h4 className='font-normal'>PRODUCT DETAILS</h4>
			<ul>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Default</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Centered</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Extended InfoNEW</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Gallery</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Sticky Info</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Boxed With Sidebar</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Full Width</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Masonry Sticky Info</a></li>
			</ul>
		</article>
	);
}
