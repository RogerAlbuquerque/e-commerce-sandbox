import React from 'react';
import Image from 'next/image';
import CardProducts from '../Components/Home/CardProduct';
import DealsOfTheDay from '../Components/Home/Deals';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { TfiFacebook } from 'react-icons/tfi';
import { FiInstagram   } from 'react-icons/fi';
import { SiPinterest,SiYoutube,SiTwitter   } from 'react-icons/si';
export default function Index() {
	return (
		<main className='text-neutral-400 grid justify-items-center'>
			<article id='containerMain' className='customContainer'>
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
								<p className='text-5xl font-bold text-stone-800'>AirPods <br/> Earphones</p>
								<p className='text-2xl text-stone-800 relative flex'>
									<span className='text-stone-800'>Today:</span> 
									<span className='text-amber-400 text-5xl font-extrabold'>$247</span>
									<span className='text-amber-400'>.99</span>
								</p>
								<a href="#" className='bg-amber-400 flex gap-1 items-center w-fit text-base rounded-full px-12 py-4 text-white mt-4 hover:bg-yellow-600 hover:text-white'>
									Click Here <IoIosArrowRoundForward className='text-xl'/>
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

				<article>
					<section>
						<div className='flex gap-8 text-3xl font-semibold justify-center pt-8 pb-6'>
							<h1 className='text-stone-800 border-b-2 border-stone-700 pb-4 cursor-pointer'>Featured</h1>
							<a href='#'>On Sale</a>
							<a href='#'>Top Rated</a>
						</div>
						<div className='flex flex-row gap-4  items-center mb-20'>
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
								alt=""
								style={{ height: '9rem', position:'absolute', width:'80rem', left:'0', zIndex:'-1'}}
							/>
							<div>
								<div className='flex justify-end text-xl text-amber-400 font-bold'>New Deals</div>
								<div className='text-xl text-stone-800 font-bold'>Start Daily at 12pm e.t.</div>
							</div>
							<div id="line" className='border-l-4 h-24'></div>
							<div className='text-xl font-normal'>
								<div>Get <span className='text-stone-800'>FREE SHIPPING* & 5% rewards</span> on</div>
								<div>every order with Molla Theme rewards program</div>
							</div>
							<div className='bg-amber-400 text-white rounded-full px-8 py-4 text-base cursor-pointer hover:bg-amber-500 transition'>
								<p className='flex gap-1 items-center'>Add to Cart for $50.00/yr <IoIosArrowRoundForward className='text-xl'/></p>
							</div>
						</div>
					</section>				
				</article>				
			</article>
			<article className='flex items-center flex-col bg-blue-50 w-full pb-24'>
				<div className='py-12'>
					<h1 className='text-2xl text-stone-800 font-bold'>Deals & Outlet</h1>
					<p className='text-xl font-light'>Today&#8217;s deal and more</p>
				</div>

				<article className='flex flex-col items-center justify-center gap-16'>
					<div className='flex gap-4'>
						<section>
							<DealsOfTheDay />
						</section>
						<section className='flex gap-4'>
							<CardProducts/>
							<CardProducts newProduct={true} topProduct={true}/>	
						</section>
					</div>

					<div className='text-stone-800 text-base border border-stone-300 px-12 py-2 rounded-full hover:bg-white'>
						<a href='#' className='flex gap-1 items-center'>Shop More Outlet Deals <IoIosArrowRoundForward className='text-xl'/></a>
					</div>				
				</article>					
			</article>

			<article id='Sponsors' className='mb-20'>
				<div className='flex gap-10 px-12 pt-16 pb-8'>
					<Image
						src='/Imgs/Main/Sponsors/GrayLogo.png'
						width={120}
						height={14}
						alt=""
					/>

					<Image
						src='/Imgs/Main/Sponsors/GrayLogo.png'
						width={120}
						height={14}
						alt=""
					/>

					<Image
						src='/Imgs/Main/Sponsors/GrayLogo.png'
						width={120}
						height={14}
						alt=""
					/>

					<Image
						src='/Imgs/Main/Sponsors/GrayLogo.png'
						width={120}
						height={14}
						alt=""
					/>

					<Image
						src='/Imgs/Main/Sponsors/GrayLogo.png'
						width={120}
						height={14}
						alt=""
					/>

					<Image
						src='/Imgs/Main/Sponsors/GrayLogo.png'
						width={120}
						height={14}
						alt=""
					/>

					<Image
						src='/Imgs/Main/Sponsors/GrayLogo.png'
						width={120}
						height={14}
						alt=""
					/>
				</div>
				<hr />
			</article>

			<article className='customContainer mb-20'>
				<section className='w-full flex justify-between mb-8'>
					<div>
						<h2 className='text-2xl font-bold text-stone-800'>Trending Products</h2>
					</div>
					<ul className='flex gap-6 text-stone-800'>
						<li className='border-b-2 border-amber-400 px-2'><a href='#'>ALL</a></li>
						<li className='px-2'><a href='#'>ACCESSORIES</a></li>
						<li className='px-2'><a href='#'>CAMERAS & CAMCORDERS</a></li>
						<li className='px-2'><a href='#'>COMPUTERS & TABLETS</a></li>
						<li className='px-2'><a href='#'>ENTERTAINMENT</a></li>
					</ul>
				</section>
				<section className='flex gap-4 pb-20'>
					<Image
						src='/Imgs/Main/Sponsors/SponsorProducts/product1.png'
						width={246}
						height={14}
						alt=""
						className='cursor-pointer'
						style={{height:'425px'}}
					/>
					<div className='flex gap-4'>
						<CardProducts sale={true} topProduct={true}/>
						<CardProducts newProduct={true} topProduct={true}/>
						<CardProducts newProduct={true} topProduct={true}/>
					</div>					
				</section>
				<hr />
			</article>

			<article className='customContainer mb-20'>
				<section className='w-full flex justify-between mb-8'>
					<div>
						<h2 className='text-2xl font-bold text-stone-800'>Top Selling Products</h2>
					</div>
					<ul className='flex gap-6 text-stone-800'>
						<li className='border-b-2 border-amber-400 px-2'><a href='#'>ALL</a></li>
						<li className='px-2'><a href='#'>ACCESSORIES</a></li>
						<li className='px-2'><a href='#'>CAMERAS & CAMCORDERS</a></li>
						<li className='px-2'><a href='#'>COMPUTERS & TABLETS</a></li>
						<li className='px-2'><a href='#'>ENTERTAINMENT</a></li>
					</ul>
				</section>
				<section className='flex pb-20'>
					<div className='flex gap-4'>
						<CardProducts sale={true} topProduct={true}/>
						<CardProducts newProduct={true} topProduct={true}/>
						<CardProducts topProduct={true}/>
						<CardProducts newProduct={true} topProduct={true}/>
					</div>					
				</section>
				<hr />
			</article>

			<article className='flex justify-between px-20 customContainer mb-20'>
				<section className='flex gap-2 items-center'>
					<div>
						<Image
							src='/Imgs/Main/rocket.png'
							width={40}
							height={14}
							alt=""
							style={{}}
						/>
					</div>
					<div>
						<h1 className='text-xl font-semibold text-stone-800'>Free Shipping</h1>
						<p className='text-base'>orders $50 or more</p>
					</div>
				</section>
				<section className='flex gap-2 items-center'>
					<div>
						<Image
							src='/Imgs/Main/update.png'
							width={40}
							height={14}
							alt=""
							style={{}}
						/>
					</div>
					<div>
						<h1 className='text-xl font-semibold text-stone-800'>Free Returns</h1>
						<p className='text-base'>witthin 30 days</p>
					</div>
				</section>
				<section className='flex gap-2 items-center'>
					<div>
						<Image
							src='/Imgs/Main/iconIn.png'
							width={40}
							height={14}
							alt=""
							style={{}}
						/>
					</div>
					<div>
						<h1 className='text-xl font-semibold text-stone-800'>Get 20% oof 1 item</h1>
						<p className='text-base'>When you sign up</p>
					</div>
				</section>
				<section className='flex gap-2 items-center'>
					<div>
						<Image
							src='/Imgs/Main/Help.png'
							width={40}
							height={14}
							alt=""
							style={{}}
						/>
					</div>
					<div>
						<h1 className='text-xl font-semibold text-stone-800'>We Support</h1>
						<p className='text-base'>24/7 amazing services</p>
					</div>
				</section>
			</article>

			<article className='customContainer flex justify-between relative p-20 px-40 mb-20'>
				<article className='text-center w-96'>
					<h2 className='text-stone-800 text-medium text-4xl mb-2'>Shop Social</h2>
					<div className='text-lg mb-6'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</div>
					<div className='flex gap-2 justify-center text-2xl text-white'>
						<a href='#' className='socialMediaIcons bg-indigo-400 hover:text-indigo-400 '><TfiFacebook  /></a>
						<a href='#' className='socialMediaIcons bg-sky-300 hover:text-sky-300 '><SiTwitter  	/></a>
						<a href='#' className='socialMediaIcons bg-pink-400 hover:text-pink-400 '><FiInstagram /></a>
						<a href='#' className='socialMediaIcons bg-red-400 hover:text-red-400 '><SiYoutube 	/></a>
						<a href='#' className='socialMediaIcons bg-red-400 hover:text-red-400 '><SiPinterest /></a>
					</div>
				</article>
				<div id="line" className='border-l h-full'></div>
				<article className='text-center relative flex flex-col'>
					<h2 className='text-stone-800 text-medium text-4xl'>Get the Latest Deals</h2>
					<p className='text-xl '>and</p>
					<p className='text-xl font-light mb-2'>receive <span className='text-amber-500'>$20 coupon</span> for first shopping</p>
					<form action="" className='flex justify-center relative'>
						<input type="email" name="email" id="" placeholder='Enter your Email Address' className='border rounded-full pl-8 py-2 text-base text-left w-96'/>
						<button 
							type="button" 
							className='border rounded-r-full absolute bg-amber-500 hover:bg-amber-600 transition text-white top-0 right-0' 
							style={{padding:'0.6rem 1.5rem'}}><IoIosArrowRoundForward className='text-xl'/>
						</button>
					</form>
				</article>

				<Image
					src='/Imgs/Main/DealsNoticeBar.png'
					width={410}
					height={14}
					alt=""
					style={{ height: '100%', position:'absolute', width:'92%', left:'3.5rem', top:'0',zIndex:'-1'}}
				/>
			</article>
			
		</main>
		
	);
}
