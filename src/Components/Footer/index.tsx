import React from 'react';
export default function Footer() {
	return (
		<footer className='text-slate-300 flex justify-center'>
			<article id='containerFooter' className=' flex gap-16 pt-2 min-w-max ' style={{width:'1200px'}}>
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
			</article>
		</footer>
	);
}