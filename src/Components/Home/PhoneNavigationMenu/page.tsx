import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { SiTwitter, SiYoutube } from 'react-icons/si';
import { TfiFacebook } from 'react-icons/tfi';
import HomeSubLinks from './SubLinks/HomeSubLinks';
import ShopSubLinks from './SubLinks/ShopSubLinks';
import ProductSubLinks from './SubLinks/ProductSubLinks';
import PagesSubLinks from './SubLinks/PagesSubLinks';
import BlogsSubLinks from './SubLinks/BlogsSubLinks';
import ElementsSubLinks from './SubLinks/ElementsSubLinks';
export default function PhoneNavigationMenu(){
	return(
		<aside className='bg-white h-full w-72 bottom-0 left-0 fixed z-10 overflow-y-auto hidden'>
			<div className='w-full flex justify-end p-4 pr-5'>
				<IoClose className='text-xl' />
			</div>		
			<article id='searchBar' className='w-11/12 pl-4 flex justify-between' >
				<div className=' flex items-center  border-stone-300 w-full'>
					
					<input type="search" name="SearchProducts" placeholder='Search product ...' id="SearchProducts" className='text-black focus:border-amber-400 w-full h-full border px-2 outline-none' />
					
				</div>
				<a href='#' className='text-stone-700 bg-amber-400 h-full p-2 '>
					<GoSearch className='text-xl' />
				</a>
			</article>
			
			

			<article>
				<section className='flex text-stone-700 text-xs font-bold pt-4 '>
					<h1 className='h-full w-full text-center pb-2 active:border-b-2 border-amber-400 active:text-amber-400'>MENU</h1>
					<h1 className='h-full w-full text-center pb-2 active:border-b-2 border-amber-400 active:text-amber-400'>CATEGORIES</h1>
				</section>
					
				<ul className='text-stone-600 font-light flex flex-col'>
					<li className='border-t py-3'>
						<div className='flex justify-between px-5 text-xs items-center'>
							<h1>HOME</h1>
							<IoIosArrowDown className='text-base'/>
						</div>
						<HomeSubLinks/>

					</li>
					<li className='border-t py-3'>
						<div className='flex justify-between px-5 text-xs'>
							<h1>SHOP</h1>
							<IoIosArrowDown className='text-base'/>
						</div>
						<ShopSubLinks/>
					</li>
					<li className='border-t py-3'>
						<div className='flex justify-between px-5 text-xs'>
							<h1>PRODUCT</h1>
							<IoIosArrowDown className='text-base'/>
						</div>
						<ProductSubLinks/>
					</li>
					<li className='border-t py-3'>
						<div className='flex justify-between px-5 text-xs'>
							<h1>PAGES</h1>
							<IoIosArrowDown className='text-base'/>
						</div>
						<PagesSubLinks/>
					</li>
					<li className='border-t py-3'>
						<div className='flex justify-between px-5 text-xs'>
							<h1>BLOG</h1>
							<IoIosArrowDown className='text-base'/>
						</div>
						<BlogsSubLinks/>
					</li>
					<li className='border-t py-3'>
						<div className='flex justify-between px-5 text-xs'>
							<h1>ELEMENTS</h1>
							<IoIosArrowDown className='text-base'/>
						</div>
						<ElementsSubLinks/>
					</li>
				</ul>
			
				<section className='text-stone-500 w-full flex flex-col font-normal hidden'>
					<a href='#' className='browseCategories py-2'>Eletronics</a>
					<a href='#' className='browseCategories py-2'>Gift Ideas</a>
					<a href='#' className='browseCategories py-2'>Beds</a>
					<a href='#' className='browseCategories py-2'>Lighting</a>
					<a href='#' className='browseCategories py-2'>Sofas & Sleeper sofas</a>
					<a href='#' className='browseCategories py-2'>Storage</a>
					<a href='#' className='browseCategories py-2'>Armchairs & Chaises</a>
					<a href='#' className='browseCategories py-2'>Decorations</a>
					<a href='#' className='browseCategories py-2'>Kitchens and Cabinets</a>
					<a href='#' className='browseCategories py-2'>Coffee & Tables</a>
					<a href='#' className='browseCategories py-2'>Outdoor & Furniture</a>
				</section>
				<section className='flex gap-2 justify-center text-white pt-4'>
					<a href='#' className='socialMediaIcons bg-white text-stone-400 active:text-amber-400 active:border-amber-400'>
						<TfiFacebook/>
					</a>
					<a href='#' className='socialMediaIcons bg-white text-stone-400 active:text-amber-400 active:border-amber-400'>
						<SiTwitter/>
					</a>
					<a href='#' className='socialMediaIcons bg-white text-stone-400 active:text-amber-400 active:border-amber-400'>
						<FiInstagram/>
					</a>
					<a href='#' className='socialMediaIcons bg-white text-stone-400 active:text-amber-400 active:border-amber-400'>
						<SiYoutube/>
					</a>
				</section>
			</article>
		</aside>
	);
}