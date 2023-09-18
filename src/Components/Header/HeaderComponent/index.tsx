import React from 'react';
import Image from 'next/image';
import HeaderIcons from '../HeaderIcons';
import TopRigth from '../TopRight';
export default function HeaderComponent() {
	return (
		<header className='bg-zinc-800 flex flex-col pl-96 pr-96 pt-2 text-neutral-400 w-full'>
			<article id='topHeader' className='flex justify-between pb-2'>
				<section className='flex gap-2 items-center'>
					<Image
						src='/Imgs/toHeader/telephone.png'
						width={14}
						height={14}
						alt="icon of a telephone to show contact number"
						style={{ height: '14px' }}
					/>Call: +55991234-5678
				</section>

				<TopRigth />

			</article>
			<hr className='border-neutral-600' />
			<article id='centerHeader' className='flex justify-between items-center pt-6 pb-6'>
				<section>
					<Image
						src="/Imgs/toHeader/logo.png"
						width={180}
						height={0}
						alt="website logo"
					/>
				</section>
				<section>
					<div className='flex items-center bg-white rounded-full pl-4'>
						<HeaderIcons icon='search' />
						<input type="search" name="SearchProducts" placeholder='Search product ...' id="SearchProducts" className='text-black p-3 ml-2 rounded-full' style={{ width: '30vw' }} />
					</div>
				</section>
				<section className='flex justify-between gap-6'>
					<div className='flex flex-col items-center'>
						<a href='#'><HeaderIcons icon='compare' /></a>
						<p>Compare</p>
					</div>
					<div className='flex flex-col items-center relative'>
						<a href='#'>
							<HeaderIcons icon='heart' />
							<span className='text-black text-xs rounded-full px-1 absolute ' style={{ backgroundColor: 'rgb(255, 186, 58)', right: '-4px', top: '-4px' }}>
								100
							</span>
						</a>
						<p>Cart</p>
					</div>
					<div className='flex flex-col items-center relative'>
						<a href='#'>
							<HeaderIcons icon='cart' />
							<span className='text-black text-xs rounded-full px-1 absolute ' style={{ backgroundColor: 'rgb(255, 186, 58)', right: '-4px', top: '-4px' }}>
								100
							</span>
						</a>
						<p>Cart</p>
					</div>
				</section>
			</article>
		</header>
	);
}