'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopRigth from '../TopRight';
import PhoneNavigationMenu from '../../../app/(home)/Components/PhoneNavigationMenu/index';
import { GoSearch, GoArrowSwitch } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart, FiPhone } from 'react-icons/fi';
import { GrMenu } from 'react-icons/gr';

export default function HeaderComponent() {
	const [asideMenuState, setAsideMenuState] = useState(true);
function test(){

}
	return (
		<header className='bg-zinc-800 grid justify-items-center text-neutral-400'>
			<div id='containerHeader' className=' flex flex-col customContainer '>
				<article id='topHeader' className='flex justify-between pt-2 pb-2'>
					<section className='flex gap-2 items-center'>
						<FiPhone />Call: +55991234-5678
					</section>
					<TopRigth />
				</article>
				<hr className='border-neutral-600' />

				<article id='centerHeader' className='flex items-center pt-6 pb-6 justify-between '>
					<section id='logoArea' className='flex items-center gap-3'>
						<GrMenu id='hamburguerMenu' className='hidden max-md:block text-2xl text-white font-bold mb-1'
							onClick={() => setAsideMenuState(!asideMenuState)}
						/>
						<PhoneNavigationMenu isHidden={asideMenuState} menuVisibility={() => setAsideMenuState(!asideMenuState)} />
						<Link href='/'>
							<Image
								src="/Imgs/toHeader/logo.png"
								width={120}
								height={120}
								alt="website logo"
							/>
						</Link>
					</section>

					<section id='searchBar' className='w-6/12 max-md:hidden' >
						<div className='flex items-center bg-white rounded-full pl-4 '>
							<Link href='#' className='text-stone-700'>
								<GoSearch className='text-xl' />
							</Link>
							<input type="search" name="SearchProducts" placeholder='Search product ...' id="SearchProducts" className='text-black p-3 rounded-full w-full' />
						</div>
					</section>

					<section id='IconsTopHeader' className='flex justify-between gap-6'>
						<Link href='#' className='group flex flex-col items-center'>
							<GoArrowSwitch className='text-2xl group-hover:text-amber-400 transition text-white' />
							<p>Compare</p>
						</Link>

						<div className='flex flex-col items-center relative '>
							<Link href='#' className='group flex flex-col items-center'>
								<FaRegHeart className='text-2xl group-hover:text-amber-400 transition text-white' />
								<p className='text-black text-xs rounded-full px-1 absolute' style={{ backgroundColor: 'rgb(255, 186, 58)', right: '6px', top: '-4px' }}>
									2
								</p>
								<p>Whishlist</p>
							</Link>

						</div>

						<div className='flex flexgroup -col items-center relative'>
							<Link href='#' className='group flex flex-col items-center'>
								<FiShoppingCart className='text-2xl group-hover:text-amber-400 transition text-white' />
								<p className='text-black text-xs rounded-full px-1 absolute ' style={{ backgroundColor: 'rgb(255, 186, 58)', right: '-4px', top: '-4px' }}>
									0
								</p>
								<p>Cart</p>
							</Link>

						</div>

					</section>
				</article>

			</div>
		</header>
	);
}