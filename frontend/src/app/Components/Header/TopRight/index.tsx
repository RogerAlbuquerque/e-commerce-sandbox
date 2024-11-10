'use client';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
export default function TopRight() {
	return (
		<section >			
			<article className='flex gap-6 items-center max-sm:hidden'>
				<div className="group">
					<Link href="#" className='flex gap-1 fill-white hover:fill-amber-400'>USD <IoIosArrowDown className='text-xs mt-1'/></Link>
					<div className="hidden absolute w-32 bg-white group-hover:block">
						<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2 absolute '>
							<Link href='#'>USD</Link>
							<Link href='#'>EUR</Link>
						</ul>
					</div>
				</div>

				<div className="group">
					<Link href="#" className=' flex gap-1 fill-white hover:fill-amber-400'>English <IoIosArrowDown className='text-xs mt-1'/></Link>
					<div className="hidden absolute w-32 bg-white group-hover:block">
						<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2 absolute '>
							<Link href='#'>English</Link>
							<Link href='#'>French</Link>
							<Link href='#'>Portuguese</Link>
						</ul>
					</div>
				</div>

				<div>
					<Link href='#'>Sign in / sign up</Link>
				</div>	
			</article>

			<article className='group hidden max-sm:block relative px-4 justify-center flex-col z-10'>
				<button className=' flex gap-1 items-center group-hover:text-amber-400 h-full pb-1'  
					onClick={() => {
						document.getElementById('topLinks')?.className == 'hidden' ? 
						document.getElementById('topLinks')!.className = 'flex' : 
						document.getElementById('topLinks')!.className = 'hidden';
					}}>
					Links <IoIosArrowDown className='text-xs'/>
				</button>
				<div id='topLinks' className='hidden pb-2'>
					<article className='absolute w-36 drop-shadow-lg flex top-7 right-4 bg-white p-2 border'>
						
						<ul>
							<li className='font-normal relative group/pageNavigationMenus drop-shadow-xl ' style={{ color: 'rgb(168, 167, 167)' }}>
								<Link href='#' className='flex row justify-between'><p>USD</p></Link>
								<div className='absolute w-40 p-3 bg-white opacity-0 transition-opacity duration-200 group-hover/pageNavigationMenus:opacity-100 top-0 ' style={{left:'-10.4rem'}}>
									<ul className=''>
										<li className='pb-2'><Link href='#'>Eur</Link></li>
										<li><Link href='#'>Usd</Link></li>
									</ul>
								</div>
							</li>

							<li className='pt-3 font-normal relative group/contactMenu' style={{ color: 'rgb(168, 167, 167)' }}>
								<Link href='#' className='flex row justify-between'><p>English</p></Link>
								<div className='absolute w-40 p-3 bg-white opacity-0 transition-opacity duration-200 group-hover/contactMenu:opacity-100 drop-shadow-xl top-0' style={{left:'-10.4rem'}}>
									<ul className=''>
										<li className='pb-2'><Link href='#'>Portuguese</Link></li>
										<li><Link href='#'>Spanish</Link></li>
									</ul>
								</div>
							</li>
							
							<li className='pt-3 font-normal' style={{ color: 'rgb(168, 167, 167)' }}><Link href='#'>Sign in / Sign up </Link></li>
						</ul>
					</article>
				</div>				
			</article>

		</section>
	);
}
