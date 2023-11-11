'use client';
import React from 'react';
export default function BlogsDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white p-4 flex border-8' style={{top:'2.47rem'}}>
			<ul>
				<li className='font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Classic</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Listing</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Grid</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Masonry</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Mask</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Single Post</a></li>
			</ul>
		</article>
	);
}
