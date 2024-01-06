import React from 'react';
import Image from 'next/image';
export default function Offers(){
	return(
		<article className='customContainer flex max-sm:flex-col max-md:gap-8 mb-20 gap-28 pl-6'>
			<section className='flex gap-2 items-center'>
				<div>
					<Image
						src='/Imgs/Main/rocket.png'
						width={40}
						height={14}
						alt=""
						style={{}}
					/>
				</div>
				<div>
					<h1 className='text-xl font-semibold text-stone-800'>Free Shipping</h1>
					<p className='text-base'>orders $50 or more</p>
				</div>
			</section>
			<section className='flex gap-2 items-center'>
				<div>
					<Image
						src='/Imgs/Main/update.png'
						width={40}
						height={14}
						alt=""
						style={{}}
					/>
				</div>
				<div>
					<h1 className='text-xl font-semibold text-stone-800'>Free Returns</h1>
					<p className='text-base'>witthin 30 days</p>
				</div>
			</section>
			<section className='flex gap-2 items-center'>
				<div>
					<Image
						src='/Imgs/Main/iconIn.png'
						width={40}
						height={14}
						alt=""
						style={{}}
					/>
				</div>
				<div>
					<h1 className='text-xl font-semibold text-stone-800'>Get 20% oof 1 item</h1>
					<p className='text-base'>When you sign up</p>
				</div>
			</section>
			<section className='flex gap-2 items-center'>
				<div>
					<Image
						src='/Imgs/Main/Help.png'
						width={40}
						height={14}
						alt=""
						style={{}}
					/>
				</div>
				<div>
					<h1 className='text-xl font-semibold text-stone-800'>We Support</h1>
					<p className='text-base'>24/7 amazing services</p>
				</div>
			</section>
		</article>
	);
}