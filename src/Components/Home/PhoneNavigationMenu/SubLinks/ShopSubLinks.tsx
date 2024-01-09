import React from 'react';
export default function ShopSubLinks(){
	return(
		<ul className='flex flex-col text-sm gap-5 pt-4 pl-8 border-t mt-3 hidden'>
			<li className='relative'>
				<a href="#" className='relative'>
					Shop List
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Shop Grid 2 Columns
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Shop Grid 3 Columns
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Shop Grid 4 Columns
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Shop Market 
					<p className='absolute bg-lime-500 -right-9 -top-2 text-white px-1' style={{fontSize:'10px', lineHeight:'14px'}}>
						NEW
					</p>

				</a>
			</li>
			<li className='relative'>				
				<a href="#" className='relative'>
					Shop Boxed No Sidebar
					<p className='absolute bg-red-400 -right-9 -top-2 text-white px-1' style={{fontSize:'10px', lineHeight:'14px'}}>
						HOT
					</p>
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Shop Fullwidth No Sidebar
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Product Category Boxed
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Product Category Fullwidth 
					<p className='absolute bg-lime-500 -right-9 -top-2 text-white px-1' style={{fontSize:'10px', lineHeight:'14px'}}>
						NEW
					</p>
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Cart
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Checkout
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Wishlist
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					My Account
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Lookbook
				</a>
			</li>
		</ul>
	);
}