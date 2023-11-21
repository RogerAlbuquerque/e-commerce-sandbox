'use client';
import React from 'react';
export default function PagesDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white p-4 w-52 flex' style={{top:'11.8rem'}}>
			<ul>
				<li className='font-normal relative group/pageNavigationMenus drop-shadow-xl' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#' className='flex row justify-between gap-24'><p>About</p><p>&gt;</p></a>
					<div className='absolute w-40 p-4 bg-white hidden group-hover/pageNavigationMenus:block ' style={{left:'13.7em', top:'-1em'}}>
						<ul className=''>
							<li className='pb-2'><a href='#'>About 01</a></li>
							<li><a href='#'>About 02</a></li>
						</ul>
					</div>
				</li>
				<li className='pt-3 font-normal relative group/contactMenu' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#' className='flex row justify-between gap-24'><p>Contact</p><p>&gt;</p></a>
					<div className='absolute w-40 p-4 bg-white hidden group-hover/contactMenu:block drop-shadow-xl' style={{left:'13.7em', top:'-1em'}}>
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

