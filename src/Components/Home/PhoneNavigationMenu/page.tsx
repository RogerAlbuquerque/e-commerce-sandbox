import React from 'react';
import { GoSearch } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
export default function PhoneNavigationMenu(){
	return(
		<aside className='bg-white h-full w-72 bottom-0 left-0 fixed z-10 hidden'>
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
				<h1>MENU</h1>
			</article>

			<article>
				<h1>CATEGORIES</h1>
				<ul>
					<li>HOME</li>
					<li>SHOP</li>
					<li>PRODUCT</li>
					<li>PAGES</li>
					<li>BLOG</li>
					<li>ELEMENTS</li>
				</ul>
			</article>
		</aside>
	);
}