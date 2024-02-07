
import React from 'react';
import Image from 'next/image';
import { FiMove } from 'react-icons/fi';

export default function ProductInfos(){
	return(
		<section className='flex flex-1 gap-4 '>
			<div>
				<Image
					src='/Imgs/Main/productsImages/appleWatchSide.png'
					width={160}
					height={14}
					alt=""
					className='w-24 h-28 border border-amber-400 p-4 max-md:w-32 max-md:h-32'
				/>
				<Image	
					src='/Imgs/Main/productsImages/appleWatchFront.jpg'
					width={160}
					height={14}
					alt=""
					className='w-24 h-28 opacity-50 hover:opacity-100 cursor-pointer delay-100 p-4 max-md:w-32 max-md:h-32'
					style={{transition:'0.3s'}}
					
				/>
			</div>
			<div className='relative flex flex-col p-4 items-center justify-center flex-1 overflow-hidden'>
				<section className='flex flex-col gap-1'>
					<div className='w-12 top-0 absolute left-0 text-base p-1 text-center text-white bg-red-400'>Sale</div>
					<div className='w-12 top-9 absolute left-0 text-base p-1 text-center text-white bg-blue-400'>Top</div>
					<button 
						className='absolute bottom-4 right-12 text-2xl p-1 hover:bg-amber-400 text-stone-500 hover:text-white' 
						style={{transition:'0.3s', boxShadow:'0px 0px 20px -9px'}}>
						<FiMove className=' rotate-45  '/>
					</button>
				</section>
				<Image
					src='/Imgs/Main/productsImages/appleWatchSide.png'
					width={160}
					height={14}
					alt=""
					className='w-72 h-80 max-md:w-32 max-md:h-32 absolute -z-10 overflow-clip'
					style={{zoom:'1'}}
				/>
			</div>

		</section>
	);
}