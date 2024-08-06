
import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

export default function HeaderOfProducts(){
	return(
		<section className='flex justify-between py-4'>
			<ul className='flex gap-2 items-center text-stone-500'>
				<li><a href="#">Home</a></li>
				<MdArrowForwardIos className='text-xs'/>
				<li><a href="#">Product</a></li>
				<MdArrowForwardIos className='text-xs'/>
				<li><a href="#" className='text-black'>Default</a></li>
			</ul>

			<ul className='flex gap-4'>
				<li>
					<a href="#" className='flex items-center gap-1 text-stone-500'>
						<MdArrowForwardIos className='text-lg rotate-180'/> Prev
					</a>
				</li>
				<li>
					<a href="#" className='flex items-center gap-1 text-stone-500'>
					Next <MdArrowForwardIos className='text-lg'/>
					</a>
				</li>
			</ul>
		</section>
	);
}