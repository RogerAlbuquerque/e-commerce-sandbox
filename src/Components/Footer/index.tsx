import React from 'react';
import Image from 'next/image';
export default function Footer() {
	return (
		<footer className='text-slate-300 flex justify-center min-w-max mb-16'>
			<article id='containerFooter' className='customContainer flex pt-2 pl-0'>
				<section id='footer1' className='w-72 flex flex-col gap-4'>
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
							<Image
								src='/Imgs/telephoneFooter.png'
								width={24}
								height={24}
								alt="icon of a telephone to show contact number"
								style={{ height: '24px' }}
							/>
						</div>
						<div>
							<p className='text-stone-500'>Got Question? Call us 24/7</p>
							<h2 className='text-stone-700 text-xl font-semibold'>+55991234-5678</h2>
						</div>
					</div>
				</section>
				<div className='flex gap-36'>
					<section id='footer2'>
						<div className='text-xl font-semibold text-stone-700 mb-4'>Useful Links</div>
						<ul className='text-stone-500 flex flex-col gap-2' style={{fontSize:'.95rem'}}>
							<li><a href='#'>About Molla</a></li>
							<li><a href='#'>Our Services</a></li>
							<li><a href='#'>How to shop on Molla</a></li>
							<li><a href='#'>FAQ						</a></li>
							<li><a href='#'>Contact us</a></li>
						</ul>
					</section>
					<section id='footer3'>
						<div className='text-xl font-semibold text-stone-700 mb-4'>Customer Services</div>
						<ul className='text-stone-500 flex flex-col gap-2' style={{fontSize:'.95rem'}}>
							<li><a href='#'>Money-back guarantee!</a></li>
							<li><a href='#'>Payment Methods</a></li>
							<li><a href='#'>Returns</a></li>
							<li><a href='#'>Shipping</a></li>
							<li><a href='#'>Terms and conditions</a></li>
							<li><a href='#'>Privacy Policy</a></li>
						</ul>
					</section>
					<section id='footer4'>
						<div className='text-xl font-semibold text-stone-700 mb-4'>My account</div>
						<ul className='text-stone-500 flex flex-col gap-2' style={{fontSize:'.95rem'}}>
							<li><a href='#'>Sign In</a></li>
							<li><a href='#'>View Cart</a></li>
							<li><a href='#'>My Wishlist</a></li>
							<li><a href='#'>Track My Order</a></li>
							<li><a href='#'>Help</a></li>
						</ul>
					</section>
				</div>				
			</article>	
		</footer>
	);
}