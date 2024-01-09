import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
export default function PagesSubLinks(){
	return(
		<ul className='flex flex-col text-sm gap-5 pt-4 border-t mt-3 hidden'>
			<li>				
				<div className='flex justify-between pr-5 pb-5'>
					<a href='#' className='pl-8'>About</a>
					<IoIosArrowDown className='text-base'/>
				</div>
				<div className='pl-4 border-b pb-2'>
					<ul>
						<li className='pb-4'><a href='#' className='pl-8'>About 01</a></li>
						<li><a href='#' className='pl-8 '>About 02</a></li>
					</ul>
				</div>
			</li>
			<li>
				<div className='flex justify-between pr-5 pb-5'>
					<a href='#' className='pl-8'>Contact</a>
					<IoIosArrowDown className='text-base'/>
				</div>
				<div className='pl-4 border-b pb-2'>
					<ul>
						<li className='pb-4'><a href='#' className='pl-8'>Contact 01</a></li>
						<li><a href='#' className='pl-8'>Contact 02</a></li>
					</ul>
				</div>
			</li>
			<li><a href='#' className='pl-8'>Login</a></li>
			<li><a href='#' className='pl-8'>FAQs</a></li>
			<li><a href='#' className='pl-8'>Error404</a></li>
			<li><a href='#' className='pl-8'>Coming Soon</a></li>
		</ul>
	);
}

