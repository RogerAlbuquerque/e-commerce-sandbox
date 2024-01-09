import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
export default function BlogsSubLinks(){
	return(
		<ul className='flex flex-col gap-5 text-sm pt-4 border-t mt-3 hidden'>
			<li className='pl-8'><a href="#">Classic</a></li>
			<li className='pl-8'><a href="#">Listing</a></li>
			<li>
				<div className='flex justify-between pr-5 '>
					<a href='#' className='pl-8'>Grid</a>
					<IoIosArrowDown className='text-base'/>
				</div>
				<div className='pl-4 border-b pb-2 pt-5 hidden'>
					<ul className='flex flex-col gap-4'>
						<li><a href='#' className='pl-8'>Grid 1 columns</a></li>
						<li><a href='#' className='pl-8'>Grid 2 columns</a></li>
						<li><a href='#' className='pl-8'>Grid 3 columns</a></li>
						<li><a href='#' className='pl-8'>Grid sidebar</a></li>
					</ul>
				</div>
			</li>
			<li>
				<div className='flex justify-between pr-5'>
					<a href='#' className='pl-8'>Masonry</a>
					<IoIosArrowDown className='text-base'/>
				</div>
				<div className='pl-4 border-b pb-2 pt-5 hidden'>
					<ul className='flex flex-col gap-4'>
						<li><a href='#' className='pl-8'>Masonry 1 columns</a></li>
						<li><a href='#' className='pl-8'>Masonry 2 columns</a></li>
						<li><a href='#' className='pl-8'>Masonry 3 columns</a></li>
						<li><a href='#' className='pl-8'>Masonry sidebar</a></li>
					</ul>
				</div>
			</li>
			<li>
				<div className='flex justify-between pr-5'>
					<a href='#' className='pl-8'>Mask</a>
					<IoIosArrowDown className='text-base'/>
				</div>
				<div className='pl-4 border-b pb-2 pt-5 hidden'>
					<ul className='flex flex-col gap-4'>
						<li><a href='#' className='pl-8'>Blog Mask Grid</a></li>
						<li><a href='#' className='pl-8'>Blog Mask Masonry</a></li>
					</ul>
				</div>
			</li>
			<li>
				<div className='flex justify-between pr-5'>
					<a href='#' className='pl-8'>Single Post</a>
					<IoIosArrowDown className='text-base'/>
				</div>
				<div className='pl-4 pb-2 pt-5 hidden'>
					<ul className='flex flex-col gap-4'>
						<li><a href='#' className='pl-8'>Default with sidebar</a></li>
						<li><a href='#' className='pl-8'>Fullwidth no sidebat</a></li>
						<li><a href='#' className='pl-8'>Fullwidth with sidebat</a></li>
					</ul>
				</div>
			</li>
		</ul>
	);
}

