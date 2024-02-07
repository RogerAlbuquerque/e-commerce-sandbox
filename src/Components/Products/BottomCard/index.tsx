import React from 'react';
import Image from 'next/image';


export default function BottomCard() {
	return (
		<article className='absolute left-0 -bottom-4 w-full bg-red-600  hidden'>
			<section className='flex gap-12 items-center justify-center'>
				<section>
					<Image
						src='/Imgs/Main/productsImages/appleWatchSide.png'
						width={160}
						height={14}
						alt=""
						className='w-14 h-16'
					/>
				</section>
				<p>
					Apple – Watch Series 3 with White Sport Band
				</p>
				<section>$214.99–$217.99</section>
				<button>QUANTITIES</button>
				<button>ADD TO CART BUTTON</button>
				<button>WISHLIST</button>
			</section>
		</article>	
	);
}
