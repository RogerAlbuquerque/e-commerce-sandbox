'use client';
import React from 'react';
import Image from 'next/image';
export default function HomeDropdownMenu() {
	return (
		<article className='absolute w-7/12 drop-shadow-lg bg-white p-4' style={{left:'20%'}}>
			<h2 className='pl-2'>CHOOSE YOUR THEME</h2>		
			<section className=' flex flex-wrap'>
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>01 - furniture store</span>
				</div>
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>02 - furniture store</span>
				</div>
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>03 - eletronic store</span>
				</div>
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>04 - eletronic store</span>
				</div>
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>05 - fashion store</span>
				</div>
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>06 - fashion store</span>
				</div>
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>07 - fashion store</span>
				</div>
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>08 - fashion store</span>
				</div>
				
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>09 - fashion store</span>
				</div>
				
				<div className='flex flex-col m-2 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '120px', border:'1px solid #D6D2D7'}}
					/>
					<span style={{textAlign:'center'}}>10 - fashion store</span>
				</div>

			</section>
		</article>
	);
}
