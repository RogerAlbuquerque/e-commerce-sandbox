'use client';
import React from 'react';
import Image from 'next/image';
import './style.css';
export default function HomeDropdownMenu() {
	return (
		<article className='absolute drop-shadow-lg left-0 top-16 bg-white p-4 '>
			<h2 className='pl-2 font-normal'>CHOOSE YOUR THEME</h2>		
			<section className=' flex flex-wrap text-stone-400'>
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>01 - furniture store</p>
				</div>
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>02 - furniture store</p>
				</div>
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>03 - eletronic store</p>
				</div>
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>04 - eletronic store</p>
				</div>
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>05 - fashion store</p>
				</div>
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>06 - fashion store</p>
				</div>
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>07 - fashion store</p>
				</div>
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>08 - fashion store</p>
				</div>
				
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>09 - fashion store</p>
				</div>
				
				<div className='flex flex-col m-3 '>
					<Image
						src='/Imgs/toHeader/imagePag.png'
						width={200}
						height={20}
						alt=""
						style={{ height: '160px', border:'1px solid #D6D2D7'}}
					/>
					<p style={{textAlign:'center'}}>10 - fashion store</p>
				</div>

			</section>
			<section className='text-center mt-8 mb-8 cursor-pointer'>
				<span className="border border-amber-400 text-amber-400 text-base font-normal px-10 py-1.5">VIEW ALL DEMO -&gt;</span>
			</section>
		</article>
	);
}
