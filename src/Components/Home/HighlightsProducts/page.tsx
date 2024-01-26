'use client';
import React from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';
import CardProducts from '../CardProduct';



export default function HighlightsProducts(){
	// function scrollRight(){
	// 	document.getElementById('listProducts')!.scrollLeft += 290;
	// }

	// function scrollLeft(){
	// 	document.getElementById('listProducts')!.scrollLeft -= 290;
	// }


	return(
		<article id='containerMain' className='customContainer flex flex-col items-center'>
			<article id='highlightsProducts' className='flex gap-4 pt-4 max-sm:flex-col'>
				<section className='relative'>
					<div className='h-full'>
						<Image
							src='/Imgs/Main/earphone.png'
							width={783}
							height={0}
							alt=""
							className='h-full w-full max-sm:h-96'
						/>
					</div>
					<div className='absolute top-16 max-sm:top-24 ml-2 flex flex-col w-80 items-center max-md:pl-2 max-md:items-start cursor-default '>
						<div className='flex flex-col gap-2 '>
							<p className='text-base text-amber-400'>Daily Deals</p>
							<p className='text-5xl max-sm:text-3xl font-bold text-stone-800'>AirPods <br/> Earphones</p>
							<p className='text-sm text-stone-800 relative flex'>
								<span className='text-stone-800'>Today:</span> 
								<span className='text-amber-400  text-5xl max-sm:text-3xl font-extrabold'>$247</span>
								<span className='text-amber-400'>.99</span>
							</p>
							<a href="#" className='bg-amber-400 flex gap-1 items-center w-fit text-base max-sm:text-xs rounded-full px-12 max-sm:px-2 py-4 max-sm:py-1 text-white mt-4 max-sm:mt-0 hover:bg-yellow-600 hover:text-white'>
								Click Here <IoIosArrowRoundForward className='text-xl'/>
							</a>
						</div>
					</div>
				</section>
				<section className='flex flex-col gap-4 text-neutral-500 '>					
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
					<div className='relative'>
						<div>
							<Image
								src='/Imgs/Main/GoproLink.png'
								width={410}
								height={14}
								alt=""
								style={{ height: '123px'}}
								className='max-sm:w-full max-sm:h-48'
							/>
						</div>
						<div className='flex flex-col text-base absolute top-0 p-2 pl-4'>
							<a href="#">
								Clearence
							</a>
							<a href="#" className='group text-lg text-black'>
								<span className='text-xl font-semibold text-black group-hover:text-amber-400'>
									GoPro - Fusion 360
								</span><br/>
									Save $70
							</a>
							<a href='#' className='flex gap-1 items-center text-amber-400 px-2 hover:bg-amber-400 w-fit rounded-xl hover:text-white' style={{marginLeft:'-0.5rem'}}>
								Shop Now <IoIosArrowRoundForward className='text-xl'/>
							</a>
						</div>
					</div>
					<div className='relative'>
						<div>
							<Image
								src='/Imgs/Main/appleWatch.png'
								width={410}
								height={14}
								alt=""
								style={{ height: '123px'}}
								className='max-sm:w-full max-sm:h-48'
							/>
						</div>
						<div className='flex flex-col text-base absolute top-0 p-2 pl-4'>
							<a href="#">
								Featured
							</a>
							<a href="#" className='group text-lg text-black'>
								<span className='text-xl font-semibold text-black group-hover:text-amber-400'>
									Apple Watch 4
								</span><br/> 
									Our Hottest Deals
							</a>
							<a href='#' className='flex gap-1 items-center text-amber-400 px-2 hover:bg-amber-400 w-fit rounded-xl hover:text-white' style={{marginLeft:'-0.5rem'}}>
								Shop Now <IoIosArrowRoundForward className='text-xl'/>
							</a>
						</div>
					</div>
				</section>				
			</article>

			<article className='w-full '>
				<section className=''>
					<div className='flex flex-wrap gap-8 text-3xl font-semibold justify-center pt-8 pb-6'>
						<h1 className='text-stone-800 border-b-2 border-stone-700 pb-4 cursor-pointer'>Featured</h1>
						<a href='#'>On Sale</a>
						<a href='#'>Top Rated</a>
					</div>
					<div className='relative flex mb-20'>
						<div id='listProducts' className='flex pl-4 max-md:pl-8 gap-4 items-center overflow-x-auto scroll-smooth'>
							<CardProducts sale={true} topProduct={true} />
							<CardProducts newProduct={true} topProduct={true} />
							<CardProducts topProduct={true} />
							<CardProducts newProduct={true} topProduct={true} />
							<CardProducts newProduct={true} topProduct={true} />
							<CardProducts newProduct={true} topProduct={true} />
						</div>
						<div id='ScrollButtonRight' className='h-full flex items-center justify-center w-8 absolute right-0 cursor-pointer' style={{background:'#FFFE', boxShadow:'-4px 0px 4px #8884'}} onClick={() => document.getElementById('listProducts')!.scrollLeft += 290}> 
							<MdArrowForwardIos className='text-xl'/>
						</div>
						<div id='ScrollButtonLeft' className='h-full flex items-center justify-center w-8 absolute left-0 cursor-pointer' style={{background:'#FFFE', boxShadow:'4px 0px 4px #8884'}} onClick={() => document.getElementById('listProducts')!.scrollLeft -= 290}> 
							<MdArrowForwardIos className='text-xl rotate-180'/>
						</div>
					</div>

					<div className='relative flex max-md:flex-col items-center justify-between px-8 max-1lg:px-4 py-4 mb-20 gap-4 '>
						<Image
							src='/Imgs/Main/Noticebar.png'
							width={410}
							height={14}
							alt=""
							style={{width:'80rem', left:'0', zIndex:'-1'}}
							className='absolute -top-3 max-1lg:-top-1 max-md:-top-7 max-md:w-full max-md:h-80 '
						/>
						<div>
							<div className='flex justify-end max-md:justify-center text-xl text-amber-400 font-bold'>New Deals</div>
							<div className='text-xl text-stone-800 font-bold'>Start Daily at 12pm e.t.</div>
						</div>
						<div id="line" className='border-l-4 h-24 max-md:hidden'></div>
						<div className='text-xl font-normal max-md:text-center'>
							<div>Get <span className='text-stone-800'>FREE SHIPPING* & 5% rewards</span> on</div>
							<div>every order with Molla Theme rewards program</div>
						</div>
						<div className='bg-amber-400 text-white rounded-full px-8 py-3 text-base cursor-pointer hover:bg-amber-500 transition'>
							<p className='flex gap-1 items-center'>Add to Cart for $50.00/yr <IoIosArrowRoundForward className='text-xl'/></p>
						</div>
					</div>
				</section>				
			</article>				
		</article>
	);
}