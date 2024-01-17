import React from 'react';
import Image from 'next/image';
import './cards.css';
import { FaRegHeart,FaStar  } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { LiaBinocularsSolid } from 'react-icons/lia';

interface productSituation{
	sale?:boolean;
	newProduct?:boolean;
	topProduct?:boolean;
}

export default function CardProduct({sale, newProduct, topProduct}: productSituation) {
	return (
		<section className='group border relative p-2 bg-white flexWidthToCard'>
			<div className='flex justify-center relative pb-16 max-md:p-4 cursor-pointer'>
				<div >
					<div className='transition-opacity duration-500 group-hover:opacity-0 group-hover:absolute'>
						<Image
							src='/Imgs/Main/productsImages/appleWatchSide.png'
							width={160}
							height={14}
							alt=""
							className='w-40 h-48 max-md:w-32 max-md:h-32'
						/>
					</div>
					<div className='absolute top-0 opacity-0 group-hover:block group-hover:static group-hover:opacity-100 transition-opacity duration-500'>
						<Image
							src='/Imgs/Main/productsImages/appleWatchFront.jpg'
							width={160}
							height={14}
							alt=""
							className='w-40 h-48 max-md:w-32 max-md:h-32'
						/>
					</div>
				</div>
				<div className='absolute bottom-0 bg-stone-800 hidden items-center group-hover:flex ' style={{width:'106%'}}>
					<a href='#' className='text-white text-xl py-2 w-full flex justify-center'>
						<MdAddShoppingCart/>
					</a>
					<div id="line" className='border-l h-5 border-slate-400'></div>
					<a href='#' className='text-white text-xl py-2 w-full flex justify-center '>
						<LiaBinocularsSolid/>
					</a>
				</div>
			</div>
			<div className='absolute top-4 cursor-default text-white'>
				<div className={`${sale ? 'bg-red-400' : newProduct ? 'bg-lime-400' : 'hidden'} rounded-full px-3 py-4 max-md:px-2 max-md:py-3 text-xs`}>
					{sale ? 'Sale' : 'New'}
				</div>
				<div className={`${!topProduct && 'hidden'} bg-sky-300 rounded-full px-3 py-4 max-md:px-2 max-md:py-3 text-xs`} style={{left:'1.2px', marginTop:'-12px'}}>
					Top
				</div>
			</div>
			<div style={{transition:'8s'}} className='group/wishIcon absolute top-4 right-4 text-stone-600 text-xs items-center hidden group-hover:flex '>
				<p className='bg-amber-400 opacity-0 p-2 pr-5 -mr-4 rounded-l-full group-hover/wishIcon:opacity-100 transition duration-500' >
					add to wishlist
				</p> 
				<p className='bg-amber-400 p-2 text-base rounded-full z-10'><FaRegHeart /></p>
			</div>
			<div>
				<p className='text-ellipsis whitespace-nowrap overflow-hidden'><a href='#'>Accessories</a>, <a href='#'>Smartwatches</a></p>
				<p className='text-stone-700 text-ellipsis overflow-hidden text-lg max-md:text-sm font-medium hover:text-amber-400 ' style={{transition:'0.2s'}}>
					Apple - Watch Series 3 With White Sport Band
				</p>
				<p className='text-amber-400 text-base font-medium'>$214.99-$217.99</p>
				<div className='flex max-sm:flex-col pt-2 pb-2 items-center gap-1'>
					<p className='flex group/test'>
						<FaStar className='text-amber-500'/>
						<FaStar className='text-amber-500'/>
						<FaStar className='text-amber-500'/>
						<FaStar className='text-amber-500'/>
						<FaStar className='hover:text-amber-500'/>
					</p>	 
					<p>(2 Reviews)</p>
				</div>
			</div>
		</section>	
	);
}
