import React from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';

interface productInfos{
	name:string;
	extraInfo:string;	
	imageName:string;
	productCategory:string;
	emphasisInfo?:boolean;
}

export function AsideProduct({name,extraInfo,emphasisInfo,imageName,productCategory}:productInfos){
	return(					
		<div className='relative '>
			<div>
				<Image
					src={`/Imgs/Main/${imageName}.png`}
					width={310}
					height={14}
					alt="icon of a telephone to show contact number"
					style={{ height: '123px'}}
					className='w-full max-sm:h-48'
				/>
			</div>
			<div className='flex flex-col text-base absolute top-0 p-2 pl-4'>
				<Link href="#">{productCategory}</Link>
				<Link href="#" className={`group text-lg  ${emphasisInfo ? 'text-black text-xl font-semibold' : 'text-stone-600'}`}>
					<span className='text-xl font-semibold text-black group-hover:text-amber-400'>
						{name}
					</span><br/>
					{extraInfo}
				</Link>
				<Link href='#' className='flex gap-1 items-center text-amber-400 px-2 hover:bg-amber-400 w-fit rounded-xl hover:text-white ' style={{marginLeft:'-0.5rem'}}>
					Shop Now <IoIosArrowRoundForward className='text-xl'/>
				</Link>
			</div>
		</div>
	);
}