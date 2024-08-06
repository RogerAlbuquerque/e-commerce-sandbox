import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { SiTwitter, SiYoutube } from 'react-icons/si';
import { TfiFacebook } from 'react-icons/tfi';
import SubMenus from './SubMenus';

interface asideMenuState{
	isHidden?:boolean;
	menuVisibility:()=>void;
}
export default function PhoneNavigationMenu({isHidden,menuVisibility}:asideMenuState){
	return(
		<aside id='asideMenu' className={`bg-white  h-full w-72 bottom-0 left-0 fixed z-10 overflow-y-auto ${isHidden ? 'hidden' : 'block'}`}>
			<button className='w-full flex justify-end p-4 pr-5' onClick={menuVisibility}>
				<IoClose className='text-xl' />
			</button>		
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
					
				<SubMenus />	
						
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