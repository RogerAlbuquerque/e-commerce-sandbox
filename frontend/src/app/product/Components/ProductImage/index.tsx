
"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { FiMove } from 'react-icons/fi';

interface imagePathProp {
	featuredImagePath: string,
	secondaryImagesPath?: string[],
	mainImageRef?: React.RefObject<HTMLDivElement | null>
}
export default function ProductInfos({ featuredImagePath, secondaryImagesPath, mainImageRef }: imagePathProp) {

	const [selectedImageProduct, setSelectedImageProduct] = useState<1 | 2>(1);
	return (
		<div ref={mainImageRef} className='flex flex-1 relative w-full min-h-[300px] sm:min-h-[400px] items-center justify-center'>
			<div className='absolute top-0 left-16 flex gap-2 z-10'>
				<Image
					src={featuredImagePath}
					width={160}
					height={14}
					style={{ transition: '0.3s' }}
					alt=""
					className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 ${selectedImageProduct == 2 && 'opacity-50 hover:opacity-100 delay-100'} cursor-pointer p-1 sm:p-2 border-2 ${selectedImageProduct == 1 ? 'border-amber-400' : 'border-transparent'}`}
					onClick={() => setSelectedImageProduct(1)}
				/>
				{secondaryImagesPath &&
					<Image
						src={secondaryImagesPath[0]}
						width={160}
						height={14}
						style={{ transition: '0.3s' }}
						alt=""
						className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 ${selectedImageProduct == 1 && 'opacity-50 hover:opacity-100 delay-100'} cursor-pointer p-1 sm:p-2 border-2 ${selectedImageProduct == 2 ? 'border-amber-400' : 'border-transparent'}`}
						onClick={() => setSelectedImageProduct(2)}
					/>
				}
			</div>
			<section className='flex flex-col gap-1 z-20'>
				<div className='w-10 sm:w-12 top-0 absolute left-0 text-sm sm:text-base p-1 text-center text-white bg-red-400'>Sale</div>
				<div className='w-10 sm:w-12 top-7 sm:top-9 absolute left-0 text-sm sm:text-base p-1 text-center text-white bg-blue-400'>Top</div>
				<button
					className='absolute bottom-4 right-4 sm:right-12 text-lg sm:text-2xl p-1 hover:bg-amber-400 text-stone-500 hover:text-white'
					style={{ transition: '0.3s', boxShadow: '0px 0px 20px -9px' }}>
					<FiMove className=' rotate-45  ' />
				</button>
			</section>
			<Image
				src={selectedImageProduct == 1 ? String(featuredImagePath) : secondaryImagesPath ? String(secondaryImagesPath) : '/Imgs/no-image.jpg'}
				width={1280}
				height={720}
				alt=""
				className='w-96 h-full object-contain'
				style={{ zoom: '1' }}
			/>
		</div>
	);
}