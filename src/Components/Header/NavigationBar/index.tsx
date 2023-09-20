import React from 'react';
import Image from 'next/image';
import HomeDropdownMenu from '../DropdownMenus';
import HeaderIcons from '../HeaderIcons';

export default function navigationBar() {
	return (
		<nav className='flex items-center justify-center text-black font-medium '>			
			<div id='container' className='flex items-center justify-center gap-8 min-w-min max-w-min'  style={{minWidth:'40vw', maxWidth:'85vw'}}>
				<section>

					<div className='flex hover:bg-amber-400 hover:text-white p-5 pr-0 mr-4 text-base'>

						<div className='flex items-center border-r border-neutral-400 w-64 justify-between items-center h-4'>
							<div className='flex items-center'>
								<Image
									src='/Imgs/toHeader/hamburger.png'
									width={18}
									height={20}
									alt="Hamburguer menu to show more links to navigation on e-commerce"
									style={{ height: '20px' }}
								/>
								<p className='pl-4'>Browse Categories</p>
							</div>
							<div className='pr-2'>
								<HeaderIcons icon='downArrow'/>
							</div>
						</div>

					</div>

					<div style={{ color: 'rgb(168, 167, 167)' }} className='bg-white absolute w-56 font-normal flex flex-col hidden'>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Eletronics</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Gift Ideas</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Beds</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>aghting</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Sofas & Sleeper sofas</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Storage</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Armchairs & Chaises</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Decorations</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Kitchens and Cabinets</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Coffee & Tables</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 hover:text-amber-400'>Outdoor & Furniture</a>
					</div>

				</section>
				<article id='fixedHeader' className='flex justify-between items-center'>
					<section className='border-r border-neutral-400 pr-10 mr-8'>
						<ul className='flex gap-12'>
							<li>
								<a href='#' className='flex items-center'>Home <HeaderIcons icon='downArrow'/></a>
								<div className='hidden'>
									<HomeDropdownMenu />
								</div>
							</li>

							<li>
								<a href='#' className='flex items-center'>Shop <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>

							<li>
								<a href='#' className='flex items-center'>Product <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>

							<li>
								<a href='#' className='flex items-center'>Pages <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>

							<li>
								<a href='#' className='flex items-center'>Blog <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>

							<li>
								<a href='#' className='flex items-center'>Elements <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>
						</ul>
					</section>					
				</article>

				<section className='flex gap-2'> <HeaderIcons icon='search'/> Clearance Up to 30% Off </section>

			</div>
		</nav>
	);

}