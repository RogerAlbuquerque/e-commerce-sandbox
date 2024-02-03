import React from 'react';
import Image from 'next/image';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { MdAddShoppingCart, MdArrowForwardIos } from 'react-icons/md';
import { CiViewTable } from 'react-icons/ci';
import { SiPinterest, SiTwitter} from 'react-icons/si';
import { FiInstagram,FiMove  } from 'react-icons/fi';
import { TfiFacebook } from 'react-icons/tfi';
export default function Product() {
	return (
		<main className='flex justify-center'>
			<article className='customContainer'>
				<section className='flex justify-between py-4'>
					<ul className='flex gap-2 items-center text-stone-500'>
						<li><a href="#">Home</a></li>
						<MdArrowForwardIos className='text-xs'/>
						<li><a href="#">Product</a></li>
						<MdArrowForwardIos className='text-xs'/>
						<li><a href="#" className='text-black'>Default</a></li>
					</ul>

					<ul className='flex gap-4'>
						<li>
							<a href="#" className='flex items-center gap-1 text-stone-500'>
								<MdArrowForwardIos className='text-lg rotate-180'/> Prev
							</a>
						</li>
						<li>
							<a href="#" className='flex items-center gap-1 text-stone-500'>
							Next <MdArrowForwardIos className='text-lg'/>
							</a>
						</li>
					</ul>
				</section>

				
				
				<article className='flex justify-between mb-24'>
					<section className='flex flex-1 gap-4'>
						<div>
							<Image
								src='/Imgs/Main/productsImages/appleWatchSide.png'
								width={160}
								height={14}
								alt=""
								className='w-24 h-28 border border-amber-400 p-4 max-md:w-32 max-md:h-32'
							/>
							<Image	
								src='/Imgs/Main/productsImages/appleWatchFront.jpg'
								width={160}
								height={14}
								alt=""
								className='w-24 h-28 opacity-50 p-4 max-md:w-32 max-md:h-32'
							/>
						</div>
						<div className='relative flex flex-col p-4 items-center justify-center flex-1 overflow-hidden'>
							<section className='flex flex-col gap-1'>
								<div className='w-12 top-0 absolute left-0 text-base p-1 text-center text-white bg-red-400'>Sale</div>
								<div className='w-12 top-9 absolute left-0 text-base p-1 text-center text-white bg-blue-400'>Top</div>
								<button 
									className='absolute bottom-4 right-12 text-2xl p-1 hover:bg-amber-400 text-stone-500 hover:text-white' 
									style={{transition:'0.3s', boxShadow:'0px 0px 20px -9px'}}>
									<FiMove className=' rotate-45  '/>
								</button>
							</section>
							<Image
								src='/Imgs/Main/productsImages/appleWatchSide.png'
								width={160}
								height={14}
								alt=""
								className='w-72 h-80 max-md:w-32 max-md:h-32 absolute -z-10 overflow-clip'
								style={{zoom:'1'}}
							/>
						</div>

					</section>
					
					<article className='flex flex-col flex-1  text-stone-500'>
						<h1 className='text-black  text-2xl'>Apple – Watch Series 3 with White Sport Band</h1>
						<section>
							<div className='flex gap-2 pt-2 pb-2 items-center text-stone-300'>
								<p className='flex'>
									<FaStar className='text-amber-500'/>
									<FaStar className='text-amber-500'/>
									<FaStar className='text-amber-500'/>
									<FaStar className='text-amber-500'/>
									<FaStar className=''/>
								</p>	 
								<p>( 2 Reviews )</p>
							</div>
							<p className='text-amber-400 text-2xl font-medium'>$214.99-$217.99</p>
						</section>

						
						<p className='py-4 text-stone-500 text-base'>
						Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
						</p>

						<article className='flex flex-col gap-2 mb-4'>
							<div className='flex gap-6'>
								<p>Color:</p>
								<button type="button" className='bg-pink-400 p-3 border-2  border-stone-300 rounded-full'></button>
								<button type="button" className='bg-green-600 p-3 border-2 border-stone-300 rounded-full'></button>
							</div>

							<section className='flex gap-9'>
								<p>Size:</p>
								<select name="" id="" className='border text-base p-1 pr-3'>
									<option value="">Select a Size</option>
									<option value="1">Small</option>
									<option value="2">Medium</option>
									<option value="2">Large</option>
									<option value="2">Extra Large</option>
								</select>

								<button type="button" className='text-sm flex items-center gap-1 hover:text-amber-400'>
									<CiViewTable className='text-lg'/>size guide
								</button>
								<button type="button" className='text-base text-amber-400'>clear</button>
							</section>

							<section className='flex gap-9'>
								<p>Qty:</p>
								<input type="number" placeholder='0' min={1} className='border p-1 w-32 text-center' style={{marginLeft:'2px'}}/>
							</section>

							<section className='flex items-center gap-9'>
								<button className='flex items-center w-48 border border-amber-400 pl-8 py-2 text-amber-400 text-base hover:bg-amber-400 hover:text-white transition' style={{transition:'0.3s'}}>
									<MdAddShoppingCart/>ADD TO CART
								</button>
								<p className='flex items-center gap-2'>
									<FaRegHeart /> 
									<button type='button' className='hover:text-amber-400 hover:border-b '>
										Add to Wishlist
									</button>
								</p>
							</section>
						</article>

						<hr />

						<article className='flex flex-col'>
							<p className='text-base pt-2'>
								Category: Accessories, Smartwatches
							</p>
							<section className='flex gap-2 pt-2'>
								<p className='text-base'>Share:</p>
								<a href='#' className='border rounded-full p-2 text-sm hover:border-amber-400 hover:text-amber-400'><TfiFacebook  /></a>
								<a href='#' className='border rounded-full p-2 text-sm hover:border-amber-400 hover:text-amber-400'><SiTwitter  /></a>
								<a href='#' className='border rounded-full p-2 text-sm hover:border-amber-400 hover:text-amber-400'><FiInstagram  /></a>
								<a href='#' className='border rounded-full p-2 text-sm hover:border-amber-400 hover:text-amber-400'><SiPinterest  /></a>
							</section>
						</article>


						
					</article>
				</article>



				<article>					
					<ul className='flex justify-center gap-12 text-lg'>
						<li><a href='#' className='border-b text-amber-400 border-amber-400 pb-1 px-6'>Description</a></li>
						<li>
							<a href='#' className='transition hover:border-b hover:text-amber-400 hover:border-amber-400 pb-1 px-6'>
								Additional Information
							</a>
						</li>
						<li>
							<a href='#' className='transition hover:border-b hover:text-amber-400 hover:border-amber-400 pb-1 px-6'>
								Shipping & Returns
							</a>
						</li>
						<li>
							<a href='#' className='transition hover:border-b hover:text-amber-400 hover:border-amber-400 pb-1 px-6'>
								Reviews (2)
							</a>
						</li>
					</ul>

					<div className='p-6 border flex flex-col gap-2 leading-6'>
						<h1 className='font-normal text-lg'>Product Information</h1>
						<p className='text-stone-500'>						
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
						</p>

						<ul className='list-disc pl-5 text-stone-700'>
							<li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
							<li>Vivamus finibus vel mauris ut vehicula.</li>
							<li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
						</ul>
							
						<p className=' text-stone-600'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
						</p>
					</div>
				</article>


				<article>
					<div className='text-center'>You May Also Like</div>
					<div>CARROSEL DE PRODUTOS RELACIONADOS</div>
				</article>
			</article>

		</main>
		
	);
}
