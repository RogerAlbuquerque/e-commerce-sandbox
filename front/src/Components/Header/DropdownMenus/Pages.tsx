import Link from 'next/link';
import React from 'react';
export default function PagesDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg flex top-16 bg-white p-4'>
			<ul>
				<li className='font-normal relative group/pageNavigationMenus drop-shadow-xl' style={{ color: 'rgb(168, 167, 167)' }}>
					<Link href='#' className='flex row justify-between gap-24'><p>About</p><p>&gt;</p></Link>
					<div className='absolute w-40 p-4 bg-white opacity-0 transition-opacity duration-200 group-hover/pageNavigationMenus:opacity-100 ' style={{left:'12em', top:'-1em'}}>
						<ul className=''>
							<li className='pb-2'><Link href='#'>About 01</Link></li>
							<li><Link href='#'>About 02</Link></li>
						</ul>
					</div>
				</li>
				<li className='pt-3 font-normal relative group/contactMenu' style={{ color: 'rgb(168, 167, 167)' }}>
					<Link href='#' className='flex row justify-between gap-24'><p>Contact</p><p>&gt;</p></Link>
					<div className='absolute w-40 p-4 bg-white opacity-0 transition-opacity duration-200 group-hover/contactMenu:opacity-100 drop-shadow-xl' style={{left:'12em', top:'-1em'}}>
						<ul className=''>
							<li className='pb-2'><Link href='#'>Contact 01</Link></li>
							<li><Link href='#'>Contact 02</Link></li>
						</ul>
					</div>
				</li>
				
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Login</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>FAQs</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Error 404</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Coming Soon</Link></li>
			</ul>
		</article>
	);
}

