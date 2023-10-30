import React from 'react';
import Image from 'next/image';
import HomeDropdownMenu from '../DropdownMenus';
import HeaderIcons from '../HeaderIcons';

export default function navigationBar() {
	return (
		<nav className='flex items-center justify-center text-black font-medium'>			
			<div id='containerNavigation' className='flex items-center justify-between min-w-max ' style={{width:'1200px'}}>
				<section>
					<div className='flex hover:bg-amber-400 hover:text-white p-5 text-base fill-black hover:fill-white' style={{transition: '0.2s', cursor:'pointer'}}>
						<div className='flex items-center border-r h-4 border-neutral-400 justify-between items-center'>
							<div className='flex items-center'>
								<Image
									src='/Imgs/toHeader/hamburger.png'
									width={18}
									height={20}
									alt="Hamburguer menu to show more links to navigation on e-commerce"
									style={{ height: '20px' }}
								/>
								<p className='p-4'>Browse Categories</p>
							</div>
							<div className='pr-4'>
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
					<section className='border-r border-neutral-400 pr-4 ' >
						<ul className='flex gap-12 ' style={{transition: '0.2s', cursor:'pointer'}}>
							<li className=''>
								<a href='#' className='flex hover:fill-amber-400'>Home <HeaderIcons icon='downArrow'/></a>
								<div className='hidden'>
									<HomeDropdownMenu />
								</div>
							</li>

							<li>
								<a href='#' className='flex items-center hover:fill-amber-400'>Shop <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>

							<li>
								<a href='#' className='flex items-center hover:fill-amber-400'>Product <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>

							<li>
								<a href='#' className='flex items-center hover:fill-amber-400'>Pages <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>

							<li>
								<a href='#' className='flex items-center hover:fill-amber-400'>Blog <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>

							<li>
								<a href='#' className='flex items-center'>Elements <HeaderIcons icon='downArrow'/></a>
								<div></div>
							</li>
						</ul>
					</section>					
				</article>

				<section className='flex gap-2 ml-2'> <HeaderIcons icon='search'/> Clearance Up to 30% Off </section>

			</div>
		</nav>
	);

}