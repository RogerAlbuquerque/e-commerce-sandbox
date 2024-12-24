
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiMove } from 'react-icons/fi';

interface imagePathProp {
	imagesPath: {
		featuredImagePath: string,
		secondaryImagesPath?: string
	}
}
export default function ProductInfos({ imagesPath }: imagePathProp) {

	const [selectedImageProduct, setSelectedImageProduct] = useState<1 | 2>(1);
	return (
		<section className='flex flex-1 gap-4 '>
			<div>
				<Image
					src={imagesPath.featuredImagePath}
					width={160}
					height={14}
					style={{ transition: '0.3s' }}
					alt=""
					className={`w-24 h-[90px] ${selectedImageProduct == 2 && 'opacity-50 hover:opacity-100 delay-100'} cursor-pointer p-4 max-md:w-32 max-md:h-32`}
					onClick={() => setSelectedImageProduct(1)}
				/>
				{imagesPath.secondaryImagesPath &&
					<Image
						src={imagesPath.secondaryImagesPath}
						width={160}
						height={14}
						style={{ transition: '0.3s' }}
						alt=""
						className={`w-24 h-[90px] ${selectedImageProduct == 1 && 'opacity-50 hover:opacity-100 delay-100'}  cursor-pointer p-4 max-md:w-32 max-md:h-32`}
						onClick={() => setSelectedImageProduct(2)}


					/>}
			</div>
			<div className='relative flex flex-col p-4 items-center justify-center flex-1 overflow-hidden'>
				<section className='flex flex-col gap-1'>
					<div className='w-12 top-0 absolute left-0 text-base p-1 text-center text-white bg-red-400'>Sale</div>
					<div className='w-12 top-9 absolute left-0 text-base p-1 text-center text-white bg-blue-400'>Top</div>
					<button
						className='absolute bottom-4 right-12 text-2xl p-1 hover:bg-amber-400 text-stone-500 hover:text-white'
						style={{ transition: '0.3s', boxShadow: '0px 0px 20px -9px' }}>
						<FiMove className=' rotate-45  ' />
					</button>
				</section>
				<Image
					src={selectedImageProduct == 1 ? String(imagesPath.featuredImagePath) : imagesPath ? String(imagesPath.secondaryImagesPath) : '/Imgs/no-image.jpg'}
					width={1280}
					height={720}
					alt=""
					className=' w-full max-md:w-32 max-md:h-32 absolute -z-10 overflow-clip'
					style={{ zoom: '1' }}
				/>
			</div>

		</section>
	);
}