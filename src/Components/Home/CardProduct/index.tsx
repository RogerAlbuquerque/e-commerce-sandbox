import React from 'react';
import Image from 'next/image';
import HeaderIcons from '../../Header/HeaderIcons';

// interface productSituation{
// 	sale:boolean;
// 	newProduct:boolean;
// 	top:boolean;
// }

export default function CardProduct() {
	return (
		<section className='border w-72 relative cursor-pointer p-4 group ' style={{transition:'8s'}}>
			<div className='flex justify-center'>
				<Image
					src='/Imgs/Main/productsImages/appleWatchSide.png'
					width={180}
					height={14}
					alt="icon of a telephone to show contact number"
					style={{ height: '220px'}}
				/>
			</div>
			<div className='absolute top-4 cursor-default text-white'>
				<div className='bg-red-400 rounded-full' style={{padding:'1em .9em'}}>Sale</div>
				<div className='bg-sky-300 rounded-full absolute top-10' style={{padding:'1em .9em', left:'1.2px'}}>Top</div>
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
