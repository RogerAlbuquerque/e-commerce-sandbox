import Link from 'next/link';
import React from 'react';
export default function BlogsDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg flex top-16 bg-white p-4'>
			<ul>
				<li className='font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Classic</Link></li>
				<li className='font-normal pt-3' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Listing</Link></li>				

				<li className='font-normal relative group/blogNavigationMenus pt-3 drop-shadow-xl' style={{ color: 'rgb(168, 167, 167)' }}>
					<Link href='#' className='flex row justify-between gap-24'><p>Grid</p> <p>&gt;</p></Link>
					<div className='absolute w-40 p-4 bg-white hidden group-hover/blogNavigationMenus:block drop-shadow-xl' style={{left:'13em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><Link href='#'>Grid 2 columns</Link></li>
							<li className='pb-2'><Link href='#'>Grid 3 columns</Link></li>
							<li className='pb-2'><Link href='#'>Grid 4 columns</Link></li>
							<li className='pb-2'><Link href='#'>Grid sidebar</Link></li>
						</ul>
					</div>
				</li>

				<li className='font-normal relative group/blogNavigationMenus pt-3' style={{ color: 'rgb(168, 167, 167)' }}>
					<Link href='#' className='flex row justify-between gap-24'><p>Masonry</p> <p>&gt;</p></Link>
					<div className='absolute w-52 p-4 bg-white hidden group-hover/blogNavigationMenus:block drop-shadow-xl' style={{left:'13em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><Link href='#'>Masonry 2 columns</Link></li>
							<li className='pb-2'><Link href='#'>Masonry 3 columns</Link></li>
							<li className='pb-2'><Link href='#'>Masonry 4 columns</Link></li>
							<li className='pb-2'><Link href='#'>Masonry sidebar</Link></li>
						</ul>
					</div>
				</li>

				<li className='font-normal relative group/blogNavigationMenus pt-3' style={{ color: 'rgb(168, 167, 167)' }}>
					<Link href='#' className='flex row justify-between gap-24'><p>Mask</p> <p>&gt;</p></Link>
					<div className='absolute w-52 p-4 bg-white hidden group-hover/blogNavigationMenus:block drop-shadow-xl' style={{left:'13em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><Link href='#'>Blog Mask Grid</Link></li>
							<li className='pb-2'><Link href='#'>Blog Mask Masory</Link></li>
						</ul>
					</div>
				</li>

				<li className='font-normal relative group/blogNavigationMenus pt-3' style={{ color: 'rgb(168, 167, 167)' }}>
					<Link href='#' className='flex row justify-between gap-24'><p >Single Post</p> <p>&gt;</p></Link>
					<div className='absolute w-52 p-4 bg-white hidden group-hover/blogNavigationMenus:block drop-shadow-xl' style={{left:'13em', top:'-2em'}}>
						<ul className=''>
							<li className='pb-2'><Link href='#'>Default with sidebar</Link></li>
							<li className='pb-2'><Link href='#'>Fullwidth no sidebar</Link></li>
							<li className='pb-2'><Link href='#'>Fullwidth with sidebar</Link></li>
						</ul>
					</div>
				</li>

			</ul>
		</article>
	);
}
