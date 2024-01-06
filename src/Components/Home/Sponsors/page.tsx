import React from 'react';
import Image from 'next/image';

export default function Sponsor(){
	return(
		<article id='Sponsors' className='mb-20 customContainer'>
			<div className='flex justify-center gap-10 pt-16 pb-8 overflow-x-scroll'>
				<Image
					src='/Imgs/Main/Sponsors/GrayLogo.png'
					width={120}
					height={14}
					alt=""
					style={{height:'auto'}}
				/>

				<Image
					src='/Imgs/Main/Sponsors/GrayLogo.png'
					width={120}
					height={14}
					alt=""
					style={{height:'auto'}}
				/>

				<Image
					src='/Imgs/Main/Sponsors/GrayLogo.png'
					width={120}
					height={14}
					alt=""
					style={{height:'auto'}}
				/>

				<Image
					src='/Imgs/Main/Sponsors/GrayLogo.png'
					width={120}
					height={14}
					alt=""
					style={{height:'auto'}}
				/>
				{/* 
				<Image
					src='/Imgs/Main/Sponsors/GrayLogo.png'
					width={120}
					height={14}
					alt=""
					style={{height:'auto'}}
				/>

				<Image
					src='/Imgs/Main/Sponsors/GrayLogo.png'
					width={120}
					height={14}
					alt=""
					style={{height:'auto'}}
				/>

				<Image
					src='/Imgs/Main/Sponsors/GrayLogo.png'
					width={120}
					height={14}
					alt=""
					style={{height:'auto'}}
				/> */}
			</div>
			<hr />
		</article>
	);
}