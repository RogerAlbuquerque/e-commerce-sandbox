import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import phone from '../../public/telefone.png';
import React from 'react';


export const metadata: Metadata = {
	title: 'Home',
	description: 'Created by Roger Albuquerque',
};

export default function RootLayout({children}:{children: React.ReactNode}) {
	return (
		<html lang="pt">
			<body>
				<header className='bg-red-600 text-slate-300'>
					<article id='topHeader' className='flex justify-between'>
						<section className='flex gap-2'>
							<Image src={phone} width={16} alt='phone call logo'/>
							Call: +55991234-5678
						</section>
						<section className='flex justify-between gap-6'>
							<div>USD</div>
							<div>Lang</div>
							<div>Sign in / sign up</div>
						</section>						
					</article>

					<article id='centerHeader' className='flex justify-between'>
						<section>Logo</section>
						<section>Search Bar</section>
						<section className='flex justify-between gap-6'>
							<div>Compare</div>
							<div>Wishlist</div>
							<div>Cart</div>
						</section>
					</article>

					<article id='fixedHeader' className='flex justify-between'>
						<section>HAMBURGUER MENU</section>
						<section>
							<ul className='flex gap-10 font-bold'>
								<li>Home</li>
								<li>Shop</li>
								<li>Product</li>
								<li>Pages</li>
								<li>Blog</li>
								<li>Elements</li>
							</ul>
						</section>
						<section>Clearence</section>
					</article>
				</header>	

				<main className='bg-blue-600 text-slate-50'>
					{children}
				</main>
				
				<footer className='bg-green-600 text-slate-300 flex gap-24'>
					<section id='footer1' className='w-60 flex flex-col gap-2'>
						<div>LOGO</div>
						<div>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</div>
						<div>Contact</div>
					</section>
					<section id='footer2'>
						<div>Useful Links</div>
						<ul>
							<li>About Molla</li>
							<li>Our Services</li>
							<li>How to shop on Molla</li>
							<li>FAQ						</li>
							<li>Contact us</li>
						</ul>
					</section>
					<section id='footer3'>
						<div>Customer Services</div>
						<ul>
							<li>Money-back guarantee!</li>
							<li>Payment Methods</li>
							<li>Returns</li>
							<li>Shipping</li>
							<li>Terms and conditions</li>
							<li>Privacy Policy</li>
						</ul>
					</section>
					<section id='footer4'>
						<div>My account</div>
						<ul>
							<li>Sign In</li>
							<li>View Cart</li>
							<li>My Wishlist</li>
							<li>Track My Order</li>
							<li>Help</li>
						</ul>
					</section>
				</footer>			
			</body>
		</html>
	);
}
