'use client';
import React from 'react';
export default function BlogsDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg bg-white p-4 w-56 flex' style={{top:'11.8rem'}}>
			<ul>
				<li className='font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Classic</a></li>
				<li className='font-normal pt-3' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Listing</a></li>				

				<li className='font-normal relative group/blogNavigationMenus pt-3 drop-shadow-xl' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#' className='flex row justify-between gap-24'><p>Grid</p> <p>&gt;</p></a>
					<div className='absolute w-40 p-4 bg-white hidden group-hover/blogNavigationMenus:block drop-shadow-xl' style={{left:'13.7em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><a href='#'>Grid 2 columns</a></li>
							<li className='pb-2'><a href='#'>Grid 3 columns</a></li>
							<li className='pb-2'><a href='#'>Grid 4 columns</a></li>
							<li className='pb-2'><a href='#'>Grid sidebar</a></li>
						</ul>
					</div>
				</li>

				<li className='font-normal relative group/blogNavigationMenus pt-3' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#' className='flex row justify-between gap-24'><p>Masonry</p> <p>&gt;</p></a>
					<div className='absolute w-52 p-4 bg-white hidden group-hover/blogNavigationMenus:block drop-shadow-xl' style={{left:'13.7em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><a href='#'>Masonry 2 columns</a></li>
							<li className='pb-2'><a href='#'>Masonry 3 columns</a></li>
							<li className='pb-2'><a href='#'>Masonry 4 columns</a></li>
							<li className='pb-2'><a href='#'>Masonry sidebar</a></li>
						</ul>
					</div>
				</li>

				<li className='font-normal relative group/blogNavigationMenus pt-3' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#' className='flex row justify-between gap-24'><p>Mask</p> <p>&gt;</p></a>
					<div className='absolute w-52 p-4 bg-white hidden group-hover/blogNavigationMenus:block drop-shadow-xl' style={{left:'13.7em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><a href='#'>Blog Mask Grid</a></li>
							<li className='pb-2'><a href='#'>Blog Mask Masory</a></li>
						</ul>
					</div>
				</li>

				<li className='font-normal relative group/blogNavigationMenus pt-3' style={{ color: 'rgb(168, 167, 167)' }}>
					<a href='#' className='flex row justify-between gap-24'><p >Single Post</p> <p>&gt;</p></a>
					<div className='absolute w-52 p-4 bg-white hidden group-hover/blogNavigationMenus:block drop-shadow-xl' style={{left:'13.7em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><a href='#'>Default with sidebar</a></li>
							<li className='pb-2'><a href='#'>Fullwidth no sidebar</a></li>
							<li className='pb-2'><a href='#'>Fullwidth with sidebar</a></li>
						</ul>
					</div>
				</li>

			</ul>
		</article>
	);
}
