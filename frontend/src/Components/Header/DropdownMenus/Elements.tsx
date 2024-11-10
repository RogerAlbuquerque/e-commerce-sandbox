import Link from 'next/link';
import React from 'react';
export default function ElementsDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg flex top-16 bg-white p-4'>
			<ul>
				<li className='font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Products</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Typography</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Titles</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Banners</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Product Category</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Video Banners</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Buttons</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Accordions</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Tabs</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Testimonials</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Blog Posts</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Call to Action</Link></li>
				<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Icon Boxes</Link></li>
			</ul>
		</article>
	);
}
