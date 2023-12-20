'use client';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
export default function TopRight() {
	return (
		<section className='flex gap-6 items-center'>			
			<div className="group">
				<a href="#" className='flex gap-1 fill-white hover:fill-amber-400'>USD <IoIosArrowDown className='text-xs mt-1'/></a>
				<div className="hidden absolute w-32 bg-white group-hover:block">
					<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2 absolute '>
						<a href='#'>USD</a>
						<a href='#'>EUR</a>
					</ul>
				</div>
			</div>

			<div className="group">
				<a href="#" className=' flex gap-1 fill-white hover:fill-amber-400'>English <IoIosArrowDown className='text-xs mt-1'/></a>
				<div className="hidden absolute w-32 bg-white group-hover:block">
					<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2 absolute '>
						<a href='#'>English</a>
						<a href='#'>French</a>
						<a href='#'>Portuguese</a>
					</ul>
				</div>
			</div>

			<div>
				<a href='#'>Sign in / sign up</a>
			</div>	

		</section>
	);
}
