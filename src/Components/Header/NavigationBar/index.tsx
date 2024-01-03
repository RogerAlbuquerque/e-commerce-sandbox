import React from 'react';
import './style.css';
import HomeDropdownMenu from '../DropdownMenus/Home';
import ShopDropdownMenu from '../DropdownMenus/Shop';
import BlogDropdownMenu from '../DropdownMenus/Blog';
import ElementsDropdownMenu from '../DropdownMenus/Elements';
import ProductDropdownMenu from '../DropdownMenus/Product';
import PagesDropdownMenu from '../DropdownMenus/Pages';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoIosArrowDown  } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

export default function navigationBar() {
	return (
		<nav className='border flex flex-col items-center text-stone-700 font-medium'>			
			<div id='containerNavigation' className='customContainer relative flex items-center justify-between z-10'>
				<article className='flex items-center'>
					<article className='group'>
						<a href='#' className='flex items-center py-1 pl-2 group-hover:bg-amber-400 group-hover:text-white cursor-pointer transition'>
							<RxHamburgerMenu className='text-2xl group-hover:hidden'/>
							<IoClose className='hidden text-2xl group-hover:block' />								
							<p className='p-4 pr-16  text-sm'>Browse Categories</p>							
							<IoIosArrowDown className='text-xs mt-1 mr-4'/>
						</a>
						
						<section className='bg-white text-stone-500 absolute w-56 font-normal hidden flex-col group-hover:flex'>
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
					
					<div id="line" className='border-l border-stone-300 h-4'></div>

					<article id='fixedHeader' className='flex items-center'>
						<section className='flex items-center pl-4 h-14 '>						
							<ul className='flex gap-2 h-full items-center text-base ' style={{transition: '0.2s', cursor:'pointer'}}>
								
								<li className=' group flex items-center hover:border-b-2 border-b-amber-400 h-full'>
									<a href='#' className='showNavigationSubmenu px-6 h-full '>
										Home <IoIosArrowDown className='text-xs mt-1'/>
									</a>								
									<div className='dropdownMenus' >
										<HomeDropdownMenu />
									</div>
								</li>

								<li className='group liContent'>
									<a href='#' className='showNavigationSubmenu'>
										Shop <IoIosArrowDown className='text-xs mt-1'/>
									</a>
									<div className='dropdownMenus' >
										<ShopDropdownMenu />
									</div>
								</li>

								<li className='group liContent'>
									<a href='#' className='showNavigationSubmenu'>
										Product <IoIosArrowDown className='text-xs mt-1'/>
									</a>
									<div className=' dropdownMenus' >
										<ProductDropdownMenu />
									</div>
								</li>

								<li className='group liContent'>
									<a href='#' className='showNavigationSubmenu'>
										Pages <IoIosArrowDown className='text-xs mt-1'/>
									</a>
									<div className='dropdownMenus' >
										<PagesDropdownMenu />
									</div>
								</li>

								<li className='group liContent'>
									<a href='#' className='showNavigationSubmenu'>
										Blog <IoIosArrowDown className='text-xs mt-1'/>
									</a>
									<div className=' dropdownMenus' >
										<BlogDropdownMenu />
									</div>
								</li>

								<li className='group liContent pr-0'>
									<a href='#' className='showNavigationSubmenu '>
										Elements <IoIosArrowDown className='text-xs mt-1'/>
									</a>
									<div className=' dropdownMenus' >
										<ElementsDropdownMenu />
									</div>
								</li>
							</ul>						
						</section>	
						<div id="line" className='border-l border-stone-300 h-4 ml-4 '></div>
					</article>
				</article>
				
				<section className='flex gap-2 text-sm'> <HiOutlineLightBulb className='text-xl'/> <span>Clearance</span> Up to 30% Off </section>
			</div>
			<div id='lineBelowNavMenus' style={{width:'100%', backgroundColor:'rgb(168, 167, 167,0.3)', height:'1px'}}></div>			
		</nav>
	);

}