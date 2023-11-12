'use client';
import React from 'react';
export default function PagesDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white p-4 flex'>
			<ul>
				<li className='font-normal relative' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#'>About</a>
					<div className='absolute w-40  p-4 bg-white hidden' style={{left:'7em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><a href='#'>About 01</a></li>
							<li><a href='#'>About 02</a></li>
						</ul>
					</div>
				</li>
				<li className='pt-3 font-normal relative' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#'>Contact</a>
					<div className='absolute w-40  p-4 bg-white hidden' style={{left:'7em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><a href='#'>Contact 01</a></li>
							<li><a href='#'>Contact 02</a></li>
						</ul>
					</div>
				</li>
				
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Login</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>FAQs</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Error 404</a></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Coming Soon</a></li>
			</ul>
		</article>
	);
}

