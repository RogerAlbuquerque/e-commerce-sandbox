
import Link from 'next/link';
import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

export default function HeaderOfProducts(){
	return(
		<section className='flex justify-between py-4'>
			<ul className='flex gap-2 items-center text-stone-500'>
				<li><Link href="#">Home</Link></li>
				<MdArrowForwardIos className='text-xs'/>
				<li><Link href="#">Product</Link></li>
				<MdArrowForwardIos className='text-xs'/>
				<li><Link href="#" className='text-black'>Default</Link></li>
			</ul>

			<ul className='flex gap-4'>
				<li>
					<Link href="#" className='flex items-center gap-1 text-stone-500'>
						<MdArrowForwardIos className='text-lg rotate-180'/> Prev
					</Link>
				</li>
				<li>
					<Link href="#" className='flex items-center gap-1 text-stone-500'>
					Next <MdArrowForwardIos className='text-lg'/>
					</Link>
				</li>
			</ul>
		</section>
	);
}