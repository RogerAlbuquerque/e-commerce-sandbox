import React from 'react';
import HomeDropdownMenu from '../DropdownMenus';

export default function navigationBar() {
	return (
		<nav className='text-black pl-96 pr-96 flex font-medium' >
			<article className='flex p-3' style={{ color: 'black' }}>
				<section className='w-56'>
					<div className='border border-neutral-400 flex justify-between items-center hover:bg-amber-400 hover:text-white'>
						<div className='flex items-center'>
							<p className='text-2xl'>X</p>
							<p className='pl-2'>Browse Categories</p>
						</div>
						<div className='text-2xl pr-2'>V
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
			</article>



			<article id='fixedHeader' className='flex justify-between  items-center'>
				<section>
					<ul className='flex gap-20 '>
						<li className=''>
							<a href='#'>Home</a>
							<div className='hidden'>
								<HomeDropdownMenu />
							</div>
						</li>

						<li>
							<a href='#'>Shop</a>
							<div></div>
						</li>

						<li>
							<a href='#'>Product</a>
							<div></div>
						</li>

						<li>
							<a href='#'>Pages</a>
							<div></div>
						</li>

						<li>
							<a href='#'>Blog</a>
							<div></div>
						</li>

						<li>
							<a href='#'>Elements</a>
							<div></div>
						</li>
					</ul>
				</section>
				<section>Clearence</section>
			</article>
		</nav>
	);

}