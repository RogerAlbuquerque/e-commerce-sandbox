'use client';
import React from 'react';
import Image from 'next/image';
export default function TopRight() {
	return (
		<section className='flex justify-between gap-6'>			
			<div className="group">
				<a href="#" className='pb-3 flex '>USD 
					<Image
						src="/Imgs/toHeader/arrowIcon.png"
						width={18}
						height={0}
						alt="website logo"
					/></a>
				<div className="hidden absolute w-32 bg-white group-hover:block mt-2">
					<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2 absolute '>
						<a href='#'>USD</a>
						<a href='#'>EUR</a>
					</ul>
				</div>
			</div>

			<div className="group">
				<a href="#" className='pb-3'>English &#8595;</a>
				<div className="hidden absolute w-32 bg-white group-hover:block mt-2">
					<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2  absolute '>
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
