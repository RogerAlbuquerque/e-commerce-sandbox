'use client';
import React from 'react';
//import Image from 'next/image';
export default function ElementsDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white p-6 flex' style={{top:'11.8rem'}}>
			<ul>
				<li className='font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Products</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Typography</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Titles</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Banners</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Product Category</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Video Banners</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Buttons</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Accordions</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Tabs</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Testimonials</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Blog Posts</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Call to Action</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Icon Boxes</a></li>
			</ul>
		</article>
	);
}
