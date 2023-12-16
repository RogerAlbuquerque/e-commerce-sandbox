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
		<nav className='flex items-center flex-col text-black font-medium'>			
			<div id='containerNavigation' className='flex items-center justify-center xs:w-8/12 w-10/12 pl-12 z-10'>
				<article className='group'>
					<section className='flex py-5 pl-8 pr-4 group-hover:bg-amber-400 group-hover:text-white text-base fill-black group-hover:fill-white' style={{transition: '0.2s', cursor:'pointer'}}>
						<div className='flex w-full h-4 border-neutral-400 justify-between items-center'>
							<div className='flex items-center'>
								<Image
									src='/Imgs/toHeader/hamburger.png'
									width={18}
									height={20}
									alt="Hamburguer menu to show more links to navigation on e-commerce"
									style={{ height: '20px' }}
								/>
								<p className='p-4 pr-20 text-sm'>Browse Categories</p>
							</div>
							<div className=''>
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
				
				<div id="line" className='border-l h-5 border-slate-400'></div>

				<article id='fixedHeader' className='flex items-center h-14'>
					<section className=' border-neutral-400 mr-20 h-full flex' >						
						<ul className='flex pl-2 gap-1 h-full flex items-center ' style={{transition: '0.2s', cursor:'pointer'}}>
							<li className='group hover:border-b hover:border-b-2 border-b-amber-400 px-4 h-full flex items-center'>
								<a href='#' className='flex gap-1 group-hover:fill-amber-400 group-hover:text-amber-400 '>Home <HeaderIcons icon='downArrow'/></a>
								<div className='hidden group-hover:block cursor-default'>
									<HomeDropdownMenu />
								</div>
							</li>

							<li className='group hover:border-b hover:border-b-2 border-b-amber-400 px-4 h-full flex justify-center flex-col'>
								<a href='#' className='flex gap-1 items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Shop <HeaderIcons icon='downArrow'/></a>
								<div className='hidden group-hover:block cursor-default' style={{marginLeft:'-0.5em'}}>
									<ShopDropdownMenu />
								</div>
							</li>

							<li className='group hover:border-b hover:border-b-2 border-b-amber-400 px-4 h-full flex justify-center flex-col'>
								<a href='#' className='flex gap-1 items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Product <HeaderIcons icon='downArrow'/></a>
								<div className=' hidden group-hover:block cursor-default' style={{marginLeft:'-0.5em'}}>
									<ProductDropdownMenu />
								</div>
							</li>

							<li className='group hover:border-b hover:border-b-2 border-b-amber-400 px-4 h-full flex justify-center flex-col'>
								<a href='#' className='flex gap-1 items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Pages <HeaderIcons icon='downArrow'/></a>
								<div className=' hidden group-hover:block cursor-default' style={{marginLeft:'-0.5em'}}>
									<PagesDropdownMenu />
								</div>
							</li>

							<li className='group hover:border-b hover:border-b-2 border-b-amber-400 px-4 h-full flex justify-center flex-col'>
								<a href='#' className='flex gap-1 items-center group-hover:fill-amber-400 group-hover:text-amber-400'>Blog <HeaderIcons icon='downArrow'/></a>
								<div className=' hidden group-hover:block cursor-default' style={{marginLeft:'-0.5em'}}>
									<BlogDropdownMenu />
								</div>
							</li>

							<li className='group hover:border-b hover:border-b-2 border-b-amber-400 px-4 h-full flex justify-center flex-col'>
								<a href='#' className='flex gap-1 items-center group-hover:fill-amber-400 group-hover:text-amber-400 '>Elements <HeaderIcons icon='downArrow'/></a>
								<div className=' hidden group-hover:block cursor-default' style={{marginLeft:'-0.5em'}}>
									<ElementsDropdownMenu />
								</div>
							</li>
						</ul>
						
					</section>					
					<div id="line" className='border-l border-slate-400 h-4'></div>
				</article>
				

				<section className='flex gap-2 w-56 text-sm ml-5 '> <HeaderIcons icon='search'/> Clearance Up to 30% Off </section>

			</div>
			<div id='lineBelowNavMenus' style={{width:'100%', backgroundColor:'rgb(168, 167, 167,0.3)', height:'1px'}}></div>
			
		</nav>
	);

}