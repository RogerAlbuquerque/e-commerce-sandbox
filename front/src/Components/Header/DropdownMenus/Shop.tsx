import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function ShopDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg flex top-16 bg-white'>
			<article className='flex p-6'>
				<div>
					<section>
						<h4 className='font-normal'>SHOP WITH SIDEBAT</h4>
						<ul>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Shop List</Link></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Shop Grid 2 Columns</Link></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Shop Grid 3 Columns</Link></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Shop Grid 4 Columns</Link></li>
							<li className='pt-3 font-normal flex relative' style={{ color: 'rgb(168, 167, 167)' }}>
								<Link href='#' className='relative'>
									Shop Market
									<div className='absolute px-1 -right-7 top-0 text-white text-xs bg-lime-500' style={{fontSize:'.5rem',lineHeight: '.8rem'}}>NEW</div>
								</Link> 
								
							</li>
						</ul>
					</section>
					<section className='pt-4'>
						<h4 className='font-normal'>PRODUCT CATEGORY</h4>
						<ul>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Product Category Boxed</Link></li>
							<li className='pt-3 font-normal flex items-center relative' style={{ color: 'rgb(168, 167, 167)' }}>
								<Link href='#' className='relative'>
									Product Category Fullwidth
									<div className='absolute px-1 -right-7 top-0 text-white text-xs bg-lime-500' style={{fontSize:'.5rem',lineHeight: '.8rem'}}>NEW</div>
								</Link> 
							</li>
						</ul>
					</section>
				</div>

				<div className='pl-10'>				
					<section>
						<h4 className='font-normal'>SHOP NO SIDEBAR</h4>
						<ul>
							<li className='pt-3 font-normal flex relative' style={{ color: 'rgb(168, 167, 167)' }}>
								<Link href='#' className='relative'>
									Shop Boxed No Sidebar
									<div className='absolute px-1 -right-7 top-0 text-white text-xs bg-red-400' style={{fontSize:'.5em',lineHeight: '.8rem'}}>HOT</div>
								</Link> 
							</li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Shop Fullwidth No Sidebar</Link></li>
						</ul>
					</section>
					<section className='pt-4'>
						<h4 className='font-normal'>SHOP PAGES</h4>
						<ul>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Cart</Link></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Checkout</Link></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Wishlist</Link></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>My Account</Link></li>
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Lookbook</Link></li>
						</ul>
					</section>
				</div>
			</article>
			<Image
				src='/Imgs/toHeader/shopMenuImage.png'
				width={222}
				height={220}
				alt="Hamburguer menu to show more links to navigation on e-commerce"
				style={{ height: '338px',width:'auto', marginLeft:'8px' }}
			/>
		</article>
	);
}
