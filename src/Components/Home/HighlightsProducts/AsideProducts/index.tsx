import React from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';



export default function AsideProduct(){
	return(					
		<div className='relative'>
			<div>
				<Image
					src='/Imgs/Main/phoneProduct.png'
					width={310}
					height={14}
					alt="icon of a telephone to show contact number"
					style={{ height: '123px'}}
					className='w-full max-sm:h-48'
				/>
			</div>
			<div className='flex flex-col text-base absolute top-0 p-2 pl-4'>
				<a href="#">Top Product</a>
				<a href="#" className='text-xl font-semibold text-black'>Edifier <br/> Stereo Bluetooth</a>
				<a href='#' className='flex gap-1 items-center text-amber-400 px-2 hover:bg-amber-400 w-fit rounded-xl hover:text-white ' style={{marginLeft:'-0.5rem'}}>
					Shop Now <IoIosArrowRoundForward className='text-xl'/>
				</a>
			</div>
		</div>
	);
}