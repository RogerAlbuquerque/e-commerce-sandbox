import React from 'react';
export default function ProductSubLinks(){
	return(
		<ul className='flex flex-col text-sm gap-5 pt-4 pl-8 border-t mt-3 hidden'>
			<li className='relative'>
				<a href="#" className='relative'>
					Default
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Centered
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Extended Info
					<p className='absolute bg-lime-500 -right-9 -top-2 text-white px-1' style={{fontSize:'10px', lineHeight:'14px'}}>
						NEW
					</p>
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Gallery
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Sticky Info
				</a>
			</li>
			<li className='relative'>				
				<a href="#" className='relative'>
					Boxed With Sidebar
					
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Full width
				</a>
			</li>
			<li className='relative'>
				<a href="#" className='relative'>
					Masonry Sticky Info
				</a>
			</li>
		</ul>
	);
}