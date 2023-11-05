import React from 'react';
import Image from 'next/image';
import HeaderIcons from '../HeaderIcons';
import TopRigth from '../TopRight';
export default function HeaderComponent() {
	return (
		<header className='bg-zinc-800 flex flex-col text-neutral-400 justify-center items-center '>
			<div id='containerHeader' className='flex flex-col min-w-max 2xl:w-8/12 w-10/12'>
				<article id='topHeader' className='flex justify-between pb-2 pt-2'>
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

				<article id='centerHeader' className='flex items-center pt-6 pb-6 justify-between'>
					<section id='logoArea'>
						<a href='#'>
							<Image
								src="/Imgs/toHeader/logo.png"
								width={120}
								height={0}
								alt="website logo"
							/>
						</a>
					</section>

					<section id='searchBar' className='w-6/12' >
						<div className='flex items-center bg-white rounded-full pl-4 '>
							<a href='#' className='fill-black hover:fill-amber-400'>
								<HeaderIcons icon='search' />
							</a>
							<input type="search" name="SearchProducts" placeholder='Search product ...' id="SearchProducts" className='text-black p-3 rounded-full w-full' />
						</div>
					</section>

					<section id='IconsTopHeader' className='flex justify-between gap-6'>
						<a href='#'  className='flex flex-col items-center fill-white hover:fill-amber-400'>
							<HeaderIcons icon='compare' />
							<p>Compare</p>
						</a>

						<div className='flex flex-col items-center relative '>
							<a href='#' className='flex flex-col items-center fill-white hover:fill-amber-400'>
								<HeaderIcons icon='heart' />
								<span className='text-black text-xs rounded-full px-1 absolute ' style={{ backgroundColor: 'rgb(255, 186, 58)', right: '-4px', top: '-4px' }}>
									100
								</span>
								<p>Whishlist</p>
							</a>
							
						</div>

						<div className='flex flex-col items-center relative fill-white hover:fill-amber-400'>
							<a href='#' className='flex flex-col items-center fill-white hover:fill-amber-400'>
								<HeaderIcons icon='cart' />
								<span className='text-black text-xs rounded-full px-1 absolute ' style={{ backgroundColor: 'rgb(255, 186, 58)', right: '-16px', top: '-4px' }}>
									100
								</span>
								<p>Cart</p>
							</a>
							
						</div>

					</section>
				</article>
				
			</div>
		</header>
	);
}