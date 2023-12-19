import React from 'react';
import Image from 'next/image';
import './style.css';
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
						<a href='#' className='browseCategories'>Eletronics</a>
						<a href='#' className='browseCategories'>Gift Ideas</a>
						<a href='#' className='browseCategories'>Beds</a>
						<a href='#' className='browseCategories'>Lighting</a>
						<a href='#' className='browseCategories'>Sofas & Sleeper sofas</a>
						<a href='#' className='browseCategories'>Storage</a>
						<a href='#' className='browseCategories'>Armchairs & Chaises</a>
						<a href='#' className='browseCategories'>Decorations</a>
						<a href='#' className='browseCategories'>Kitchens and Cabinets</a>
						<a href='#' className='browseCategories'>Coffee & Tables</a>
						<a href='#' className='browseCategories'>Outdoor & Furniture</a>
					</section>
				</article>
				
				<hr />

				<article id='fixedHeader' className='flex items-center h-14'>
					<section className=' border-neutral-400 mr-20 h-full flex' >						
						<ul className='flex pl-2 gap-1 h-full items-center ' style={{transition: '0.2s', cursor:'pointer'}}>

							<li className=' group flex items-center hover:border-b-2 border-b-amber-400 h-full'>
								<a href='#' className='showNavigationSubmenu px-6 h-full '>
									Home <HeaderIcons icon='downArrow'/>
								</a>								
								<div className='dropdownMenus' >
									<HomeDropdownMenu />
								</div>
							</li>

							<li className='group liContent'>
								<a href='#' className='showNavigationSubmenu'>
									Shop <HeaderIcons icon='downArrow'/>
								</a>
								<div className='dropdownMenus' >
									<ShopDropdownMenu />
								</div>
							</li>

							<li className='group liContent'>
								<a href='#' className='showNavigationSubmenu'>
									Product <HeaderIcons icon='downArrow'/>
								</a>
								<div className=' dropdownMenus' >
									<ProductDropdownMenu />
								</div>
							</li>

							<li className='group liContent'>
								<a href='#' className='showNavigationSubmenu'>
									Pages <HeaderIcons icon='downArrow'/>
								</a>
								<div className='dropdownMenus' >
									<PagesDropdownMenu />
								</div>
							</li>

							<li className='group liContent'>
								<a href='#' className='showNavigationSubmenu'>
									Blog <HeaderIcons icon='downArrow'/>
								</a>
								<div className=' dropdownMenus' >
									<BlogDropdownMenu />
								</div>
							</li>

							<li className='group liContent'>
								<a href='#' className='showNavigationSubmenu '>
									Elements <HeaderIcons icon='downArrow'/>
								</a>
								<div className=' dropdownMenus' >
									<ElementsDropdownMenu />
								</div>
							</li>
						</ul>
						
					</section>					
					<hr />
				</article>
				

				<section className='flex gap-2 w-56 text-sm ml-5 '> <HeaderIcons icon='search'/> Clearance Up to 30% Off </section>

			</div>
			<div id='lineBelowNavMenus' style={{width:'100%', backgroundColor:'rgb(168, 167, 167,0.3)', height:'1px'}}></div>
			
		</nav>
	);

}