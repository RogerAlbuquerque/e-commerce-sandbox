'use client';
import React from 'react';
import { useParams  } from 'next/navigation';
import Image from 'next/image';
import { FiPhone } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import Link from 'next/link';

export default function Footer() {
	const params = useParams();
	return (
		
		<footer className={`text-slate-300 mb-4 grid justify-items-center ${params.productId && 'pb-24'}`}>
			<article id='containerFooter' className='customContainer flex max-sm:flex-col justify-left pt-2 mb-16'>
				<section id='footer1' className='w-72 flex flex-col gap-4 max-sm:mb-8'>
					<div>
						<Image
							src="/Imgs/logoBlack.png"
							width={120}
							height={0}
							alt="website logo on footer"
						/>
					</div>
					<div>
						<p className='text-stone-500'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
					</div>
					<div className='flex gap-4 items-center border px-6 py-2 w-64'>
						<div>
							<FiPhone className='text-2xl text-amber-500'/>
						</div>
						<div>
							<p className='text-stone-500'>Got Question? Call us 24/7</p>
							<h2 className='text-stone-700 text-xl font-semibold'>+55991234-5678</h2>
						</div>
					</div>
				</section>
				<div className='flex max-sm:flex-col gap-36 max-sm:gap-8'>
					<section id='footer2'>
						<div className='text-xl font-semibold text-stone-700 mb-4'>Useful Links</div>
						<ul className='text-stone-500 flex flex-col gap-2' style={{fontSize:'.95rem'}}>
							<li><Link href='#'>About Molla</Link></li>
							<li><Link href='#'>Our Services</Link></li>
							<li><Link href='#'>How to shop on Molla</Link></li>
							<li><Link href='#'>FAQ</Link></li>
							<li><Link href='#'>Contact us</Link></li>
						</ul>
					</section>
					<section id='footer3'>
						<div className='text-xl font-semibold text-stone-700 mb-4'>Customer Services</div>
						<ul className='text-stone-500 flex flex-col gap-2' style={{fontSize:'.95rem'}}>
							<li><Link href='#'>Money-back guarantee!</Link></li>
							<li><Link href='#'>Payment Methods</Link></li>
							<li><Link href='#'>Returns</Link></li>
							<li><Link href='#'>Shipping</Link></li>
							<li><Link href='#'>Terms and conditions</Link></li>
							<li><Link href='#'>Privacy Policy</Link></li>
						</ul>
					</section>
					<section id='footer4'>
						<div className='text-xl font-semibold text-stone-700 mb-4'>My account</div>
						<ul className='text-stone-500 flex flex-col gap-2' style={{fontSize:'.95rem'}}>
							<li><Link href='#'>Sign In</Link></li>
							<li><Link href='#'>View Cart</Link></li>
							<li><Link href='#'>My Wishlist</Link></li>
							<li><Link href='#'>Track My Order</Link></li>
							<li><Link href='#'>Help</Link></li>
						</ul>
					</section>
				</div>				
			</article>

			<article className='customContainer text-stone-500 text-base'>
				<hr className='mb-4'/>	
				<div className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2' >
					<p>Copyright © 2023 Molla Store. All Rights Reserved.</p>
					<div className='flex gap-6'>
						<GoSearch className='text-xl' />
						<GoSearch className='text-xl' />
						<GoSearch className='text-xl' />
						<GoSearch className='text-xl' />
						<GoSearch className='text-xl' />
					</div>
				</div>
			</article>
		</footer>
	);
}