import React from 'react';
import Image from 'next/image';
import CardProducts from '../Components/Home/CardProduct';
export default function Index() {
	return (
		<main className='text-neutral-400 grid grid-cols-1 grid-row-2 justify-items-center'>
			<article id='containerMain' className='xs:w-8/12 w-10/12 pl-12 pr-12'>
				<article id='highlightsProducts' className='flex gap-4 p-3'>
					<section className='relative'>
						<div className=''>
							<Image
								src='/Imgs/Main/earphone.png'
								width={900}
								height={0}
								alt=""
								style={{ height: '400px' }}
							/>
						</div>
						<div className='absolute top-16 ml-2 flex flex-col w-96 items-center cursor-default'>
							<div className='flex flex-col gap-2 '>
								<p className='text-xl text-amber-400'>Daily Deals</p>
								<p className='text-5xl font-bold text-stone-700'>AirPods <br/> Earphones</p>
								<p className='text-2xl text-stone-700 relative flex'>
									<span className='text-stone-700'>Today:</span> 
									<span className='text-amber-400 text-5xl font-extrabold'>$247</span>
									<span className='text-amber-400'>.99</span>
								</p>
								<a href="#" className='bg-amber-400 w-fit text-base rounded-full px-12 py-4 text-white mt-4 hover:bg-yellow-600 hover:text-white'>
									Click Here -&gt;
								</a>
							</div>
						</div>
					</section>
					<section className='flex flex-col gap-4 text-neutral-500'>					
						<div className='relative'>
							<div>
								<Image
									src='/Imgs/Main/phoneProduct.png'
									width={410}
									height={14}
									alt="icon of a telephone to show contact number"
									style={{ height: '123px'}}
								/>
							</div>
							<div className='flex flex-col text-base absolute top-0 p-2 pl-4'>
								<a href="#">Top Product</a>
								<a href="#" className='text-xl font-semibold text-black'>Edifier <br/> Stereo Bluetooth</a>
								<a href='#' className='text-amber-400 px-2 hover:bg-amber-400 w-fit rounded-xl hover:text-white ' style={{marginLeft:'-0.5rem'}}>
									Shop Now -&gt;
								</a>
							</div>
						</div>
						<div className='relative'>
							<div>
								<Image
									src='/Imgs/Main/GoproLink.png'
									width={410}
									height={14}
									alt="icon of a telephone to show contact number"
									style={{ height: '123px'}}
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
								<a href='#' className='text-amber-400 px-2 hover:bg-amber-400 w-fit rounded-xl hover:text-white' style={{marginLeft:'-0.5rem'}}>
									Shop Now -&gt;
								</a>
							</div>
						</div>
						<div className='relative'>
							<div>
								<Image
									src='/Imgs/Main/appleWatch.png'
									width={410}
									height={14}
									alt="icon of a telephone to show contact number"
									style={{ height: '123px'}}
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
								<a href='#' className='text-amber-400 px-2 hover:bg-amber-400 w-fit rounded-xl hover:text-white' style={{marginLeft:'-0.5rem'}}>
									Shop Now -&gt;
								</a>
							</div>
						</div>
					</section>				
				</article>

				<article>
					<section>
						<div className='flex gap-8 text-3xl font-semibold justify-center pt-8 pb-6'>
							<h1 className='text-stone-700 border-b-2 border-stone-700 pb-4 cursor-pointer'>Featured</h1>
							<a href='#'>On Sale</a>
							<a href='#'>Top Rated</a>
						</div>
						<div className='flex flex-row gap-4 mb-20'>
							<CardProducts sale={true} topProduct={true} />
							<CardProducts newProduct={true} topProduct={true} />
							<CardProducts topProduct={true} />
							<CardProducts newProduct={true} topProduct={true} />
						</div>

						<div className='flex items-center justify-between px-16 py-4 relative mb-20'>
							<Image
								src='/Imgs/Main/Noticebar.png'
								width={410}
								height={14}
								alt="icon of a telephone to show contact number"
								style={{ height: '9rem', position:'absolute', width:'80rem', left:'0', zIndex:'-1'}}
							/>
							<div>
								<div className='flex justify-end text-xl text-amber-400 font-bold'>New Deals</div>
								<div className='text-xl text-stone-700 font-bold'>Start Daily at 12pm e.t.</div>
							</div>
							<div id="line" className='border-l-4 h-24'></div>
							<div className='text-xl font-normal'>
								<div>Get <span className='text-stone-700'>FREE SHIPPING* & 5% rewards</span> on</div>
								<div>every order with Molla Theme rewards program</div>
							</div>
							<div className='flex items-center bg-amber-400 text-white rounded-full px-8 py-4 text-base cursor-pointer hover:bg-amber-500 transition'>
								<p>Add to Cart for $50.00/yr -&gt;</p>
							</div>
						</div>
					</section>				
				</article>				
			</article>
			<article className='flex items-center flex-col bg-blue-50 h-96 w-full'>
				<h1 className='text-2xl text-stone-700 font-bold'>Deals & Outlet</h1>
				<p className='text-xl font-light'>Today s deal and more</p>
			</article>
		</main>
		
	);
}
