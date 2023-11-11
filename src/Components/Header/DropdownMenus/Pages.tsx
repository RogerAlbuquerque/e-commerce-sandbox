'use client';
import React from 'react';
export default function PagesDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white p-4 flex'>
			<ul>
				<li className='font-normal' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#'>About</a>
				</li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#'>Contact</a>
				</li>
				
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Login</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>FAQs</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Error 404</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Coming Soon</a></li>
			</ul>
		</article>
	);
}

