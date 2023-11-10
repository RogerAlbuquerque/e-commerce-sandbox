import React from 'react';
import Image from 'next/image';
import HomeDropdownMenu from '../DropdownMenus/Home';
import ShopDropdownMenu from '../DropdownMenus/Shop';
import BlogDropdownMenu from '../DropdownMenus/Blog';
import ElementsDropdownMenu from '../DropdownMenus/Elements';
import ProductDropdownMenu from '../DropdownMenus/Product';
import PagesDropdownMenu from '../DropdownMenus/Pages';
import HeaderIcons from '../HeaderIcons';

export default function navigationBar() {
	return (
		<nav className='flex items-center justify-center flex-col text-black font-medium '>			
			<div id='containerNavigation' className='flex items-center justify-between 2xl:w-8/12 w-10/12'>
				<article className='group'>
					<section className='flex group-hover:bg-amber-400 group-hover:text-white p-5 text-base fill-black group-hover:fill-white' style={{transition: '0.2s', cursor:'pointer'}}>
						<div className='flex items-center h-4 border-neutral-400 justify-between items-center'>
							<div className='flex items-center'>
								<Image
									src='/Imgs/toHeader/hamburger.png'
									width={18}
									height={20}
									alt="Hamburguer menu to show more links to navigation on e-commerce"
									style={{ height: '20px' }}
								/>
								<p className='p-4 text-sm'>Browse Categories</p>
							</div>
							<div className='pr-4'>
								<HeaderIcons icon='downArrow'/>
							</div>
						</div>
					</section>
					<section style={{ color: 'rgb(168, 167, 167)' }} className='bg-white absolute w-56 font-normal hidden flex-col group-hover:flex'>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Eletronics</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Gift Ideas</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Beds</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Lighting</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Sofas & Sleeper sofas</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Storage</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Armchairs & Chaises</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Decorations</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Kitchens and Cabinets</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Coffee & Tables</a>
						<a href='#' className='border-neutral-200 border border-t-0 p-2 pl-4 hover:text-amber-400'>Outdoor & Furniture</a>
					</section>
				</article>

				<article id='fixedHeader' className='flex justify-between items-center'>
					<section className='border-r border-l pl-4 border-neutral-400 pr-4 ' >
						<ul className='flex gap-12 ' style={{transition: '0.2s', cursor:'pointer'}}>
							<li className='group'>
								<a href='#' className='flex group-hover:fill-amber-400 group-hover:text-amber-400 group-hover:border-b'>Home <HeaderIcons icon='downArrow'/></a>
								<div className='hidden group-hover:block cursor-default'>
									<HomeDropdownMenu />
								</div>
							</li>

							<li className='group'>
								<a href='#' className='flex items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Shop <HeaderIcons icon='downArrow'/></a>
								<div className='hidden group-hover:block cursor-default'>
									<ShopDropdownMenu />
								</div>
							</li>

							<li className='group'>
								<a href='#' className='flex items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Product <HeaderIcons icon='downArrow'/></a>
								<div className=' hidden group-hover:block cursor-default'>
									<ProductDropdownMenu />
								</div>
							</li>

							<li className='group'>
								<a href='#' className='flex items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Pages <HeaderIcons icon='downArrow'/></a>
								<div className=' hidden group-hover:block cursor-default'>
									<PagesDropdownMenu />
								</div>
							</li>

							<li className='group'>
								<a href='#' className='flex items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Blog <HeaderIcons icon='downArrow'/></a>
								<div className=' hidden group-hover:block cursor-default'>
									<BlogDropdownMenu />
								</div>
							</li>

							<li className='group'>
								<a href='#' className='flex items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Elements <HeaderIcons icon='downArrow'/></a>
								<div className=' hidden group-hover:block cursor-default'>
									<ElementsDropdownMenu />
								</div>
							</li>
						</ul>
					</section>					
				</article>

				<section className='flex gap-2 ml-2 text-sm'> <HeaderIcons icon='search'/> Clearance Up to 30% Off </section>

			</div>
			<div id='lineBelowNavMenus' style={{width:'100%', backgroundColor:'rgb(168, 167, 167,0.3)', height:'1px'}}></div>
		</nav>
	);

}