'use client';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
export default function TopRight() {
	return (
		<section >			
			<article className='flex gap-6 items-center max-sm:hidden'>
				<div className="group">
					<a href="#" className='flex gap-1 fill-white hover:fill-amber-400'>USD <IoIosArrowDown className='text-xs mt-1'/></a>
					<div className="hidden absolute w-32 bg-white group-hover:block">
						<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2 absolute '>
							<a href='#'>USD</a>
							<a href='#'>EUR</a>
						</ul>
					</div>
				</div>

				<div className="group">
					<a href="#" className=' flex gap-1 fill-white hover:fill-amber-400'>English <IoIosArrowDown className='text-xs mt-1'/></a>
					<div className="hidden absolute w-32 bg-white group-hover:block">
						<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2 absolute '>
							<a href='#'>English</a>
							<a href='#'>French</a>
							<a href='#'>Portuguese</a>
						</ul>
					</div>
				</div>

				<div>
					<a href='#'>Sign in / sign up</a>
				</div>	
			</article>

			<article className='group hidden max-sm:block relative px-4 justify-center flex-col z-10'>
				<a href='#' className=' flex gap-1 items-center group-hover:text-amber-400 h-full pb-1'  onClick={() => document.getElementById('topLinks')!.className = document.getElementById('topLinks')!.className == 'hidden' ? 'flex' : 'hidden'}>
					Links <IoIosArrowDown className='text-xs'/>
				</a>
				<div id='topLinks' className='hidden'>
					<article className='absolute w-36 drop-shadow-lg flex top-7 right-4 bg-white p-2 border'>
						
						<ul>
							<li className='font-normal relative group/pageNavigationMenus drop-shadow-xl ' style={{ color: 'rgb(168, 167, 167)' }}>
								<a href='#' className='flex row justify-between'><p>USD</p></a>
								<div className='absolute w-40 p-3 bg-white opacity-0 transition-opacity duration-200 group-hover/pageNavigationMenus:opacity-100 top-0 ' style={{left:'-10.4rem'}}>
									<ul className=''>
										<li className='pb-2'><a href='#'>Eur</a></li>
										<li><a href='#'>Usd</a></li>
									</ul>
								</div>
							</li>

							<li className='pt-3 font-normal relative group/contactMenu' style={{ color: 'rgb(168, 167, 167)' }}>
								<a href='#' className='flex row justify-between'><p>English</p></a>
								<div className='absolute w-40 p-3 bg-white opacity-0 transition-opacity duration-200 group-hover/contactMenu:opacity-100 drop-shadow-xl top-0' style={{left:'-10.4rem'}}>
									<ul className=''>
										<li className='pb-2'><a href='#'>Portuguese</a></li>
										<li><a href='#'>Spanish</a></li>
									</ul>
								</div>
							</li>
							
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><a href='#'>Sign in / Sign up </a></li>
						</ul>
					</article>
				</div>				
			</article>

		</section>
	);
}
