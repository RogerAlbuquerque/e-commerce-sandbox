import React from 'react';
import Image from 'next/image';
import HeaderIcons from '../../Header/HeaderIcons';

interface productSituation{
	sale?:boolean;
	newProduct?:boolean;
	topProduct?:boolean;
}

export default function CardProduct({sale, newProduct, topProduct}: productSituation) {
	return (
		<section className='border w-72 relative cursor-pointer p-4 group bg-white'>
			<div className='flex justify-center relative pb-12'>
				<div>
					<div className='transition-opacity duration-500 group-hover:opacity-0 group-hover:absolute'>
						<Image
							src='/Imgs/Main/productsImages/appleWatchSide.png'
							width={180}
							height={14}
							alt=""
							style={{height: '220px'}}
						/>
					</div>
					<div className='absolute top-0 opacity-0 group-hover:block group-hover:static group-hover:opacity-100 transition-opacity duration-500'>
						<Image
							src='/Imgs/Main/productsImages/appleWatchFront.jpg'
							width={200}
							height={14}
							alt=""
							style={{height: '220px'}}
						/>
					</div>
				</div>
				<div className='absolute bottom-0 bg-stone-800 justify-between items-center px-14 py-2 hidden group-hover:flex' style={{width:'113%'}}>
					<div className='fill-white hover:fill-amber-400 transition'>
						<HeaderIcons icon='search' />
					</div>
					<div id="line" className='border-l h-5 border-slate-400'></div>
					<div className='fill-white hover:fill-amber-400 transition'>
						<HeaderIcons icon='search' />
					</div>
				</div>
			</div>
			<div className='absolute top-4 cursor-default text-white'>
				<div className={`${sale ? 'bg-red-400' : newProduct ? 'bg-lime-400' : 'hidden'} rounded-full`} style={{padding:'1.1em .9em'}}>
					{sale ? 'Sale' : 'New'}
				</div>
				<div className={`${!topProduct && 'hidden'} bg-sky-300 rounded-full`} style={{padding:'1em .9em', left:'1.2px', marginTop:'-12px'}}>
					Top
				</div>
			</div>
			<div style={{transition:'8s'}} className='group/wishIcon absolute top-4 right-4 hidden group-hover:flex text-xs items-center text-stone-600 gap-2 bg-amber-400 rounded-full p-2'>
				<p className='hidden group-hover/wishIcon:block transition duration-700' >add to wishlist</p> <HeaderIcons icon='littleHeart' />
			</div>
			<div>
				<p><a href='#'>Accessories</a>, <a href='#'>Smartwatches</a></p>
				<p className='text-stone-700 text-lg font-medium hover:text-amber-400' style={{transition:'0.2s'}}>Apple - Watch Series 3 With White Sport Band</p>
				<p className='text-amber-400 text-base font-medium'>$214.99-$217.99</p>
				<p className=''>***** (2 Reviews)</p>
			</div>
		</section>	
	);
}
