import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function ProductsDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg flex top-16 bg-white '>
			<article className='flex flex-col p-6'>
				<h4 className='font-normal'>PRODUCT DETAILS</h4>
				<ul>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Default</Link></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Centered</Link></li>
					<li className='pt-3 font-normal flex relative' style={{ color: 'rgb(168, 167, 167)' }}>
						<Link href='#' className='relative'>
							Extended Info
							<div className='absolute px-1 -right-8 top-0 text-white text-xs bg-lime-600' style={{fontSize:'.6rem',lineHeight: '.8rem'}}>NEW</div>
						</Link> 
					</li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Gallery</Link></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Sticky Info</Link></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Boxed With Sidebar</Link></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Full Width</Link></li>
					<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Masonry Sticky Info</Link></li>
				</ul>
			</article>
			<Image
				src='/Imgs/toHeader/productMenuImage.png'
				width={222}
				height={220}
				alt="Hamburguer menu to show more links to navigation on e-commerce"
				style={{ height: '338px',width:'auto', marginLeft:'40px' }}
			/>
		</article>
	);
}
