import React from 'react';
import Image from 'next/image';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { LiaBinocularsSolid } from 'react-icons/lia';
import Link from 'next/link';
import { typeListProducts } from '@/@types/listProducts';

interface typeProduct extends typeListProducts {
	simpleLayout?: boolean
}

export default function CardProduct({ productId, name, price, productCategories, stars, imagesPath, productState, simpleLayout }: typeProduct) {

	function renderItems(stars: number) {
		const items = [];
		for (let i = 1; i <= 5; i++) {
			i <= stars ? items.push(<FaStar key={i} className='text-amber-500' />) : items.push(<FaStar key={i} />)
		}
		return items;
	};

	return (
		<section className={` group border relative p-4 bg-white flexWidthToCard ${simpleLayout && 'border-none'}`} >
			<div className='flex justify-center relative pb-16 max-md:p-4 cursor-pointer w-64 max-md:w-auto'>
				<div >
					<Link href={`/product/${productId}`} className='transition-opacity duration-500 group-hover:opacity-0 group-hover:absolute'>
						<Image
							src={imagesPath ? imagesPath.featuredImagePath : '/Imgs/Main/productsImages/appleWatchSide.png'}
							width={160}
							height={192}
							alt=""
							className='w-full h-48 max-md:w-32 max-md:h-32'

						/>
					</Link>

					{imagesPath?.secondaryImagesPath &&
						<Link href={`/product/${productId}`} className='absolute top-0 opacity-0 group-hover:block group-hover:static group-hover:opacity-100 transition-opacity duration-500'>
							<Image
								src={imagesPath.secondaryImagesPath}
								width={160}
								height={192}
								alt=""
								className='w-full h-48 max-md:w-32 max-md:h-32'
							/>
						</Link>
					}
				</div>
				<div className='absolute bottom-0 bg-stone-800 hidden items-center group-hover:flex ' style={{ width: '112%' }}>
					<Link href='#' className='text-white text-xl py-2 w-full flex justify-center'>
						<MdAddShoppingCart />
					</Link>
					<div id="line" className='border-l h-5 border-slate-400'></div>
					<Link href='#' className='text-white text-xl py-2 w-full flex justify-center '>
						<LiaBinocularsSolid />
					</Link>
				</div>
			</div>
			<div className='absolute top-4 cursor-default text-white'>
				<div
					className={`
						${productState?.sale ? 'bg-red-400' : productState?.newProduct ? 'bg-lime-400' : 'hidden'} 
						${simpleLayout ? 'rounded-none px-2 py-1 mb-4' : 'rounded-full px-3 py-4 max-md:px-2 max-md:py-3'}  
						text-xs`
					}>
					{productState?.sale ? 'Sale' : 'New'}
				</div>
				<div className={`
					${!productState?.topProduct && 'hidden'}  
					${simpleLayout ? 'rounded-none px-2 py-1 mb-4' : 'rounded-full px-3 py-4 max-md:px-2 max-md:py-3'}  
					bg-sky-300 text-xs`} style={{
						left: '1.2px', marginTop: '-12px'
					}}>
					Top
				</div>
			</div>
			<div style={{ transition: '8s' }} className='group/wishIcon absolute top-4 right-4 text-stone-600 text-xs items-center hidden group-hover:flex '>
				<p className='bg-amber-400 opacity-0 p-2 pr-5 -mr-4 rounded-l-full group-hover/wishIcon:opacity-100 transition duration-500' >
					add to wishlist
				</p>
				<p className='bg-amber-400 p-2 text-base rounded-full z-10'><FaRegHeart /></p>
			</div>
			<div>
				{productCategories?.map((item, index, arr) => {
					const isLast = index === arr.length - 1;
					return (
						<p key={index} className={`text-ellipsis whitespace-nowrap overflow-hidden ${simpleLayout && 'hidden'}`}>
							<Link href='#'  >{item}</Link>{!isLast && ', '}
						</p>
					)
				})}

				<p
					className={`text-stone-700 text-ellipsis overflow-hidden text-lg max-md:text-sm font-medium hover:text-amber-400 ${simpleLayout && 'text-center'}`}
					style={{ transition: '0.2s' }}>
					{name}
					{/* Apple - Watch Series 3 With White Sport Band */}
				</p>
				<section
					className={`
						${simpleLayout && 'justify-center'} 
						${productState?.sale && 'text-red-400'}
						text-amber-400 text-base font-medium flex gap-2
					`}>
					<div>
						${price}
					</div>
					<div className='line-through text-gray-300'>
						${(price + price * 0.4).toFixed(2)}
					</div>

				</section>

				<div className={`flex max-sm:flex-col pt-2 pb-2 items-center gap-1 ${simpleLayout && 'justify-center'}`}>
					<p className='flex text-gray-300'>
						{renderItems(stars)}
						{/* <FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='hover:text-amber-500' /> */}
					</p>
					<p>(2 Reviews)</p>
				</div>
			</div>
		</section>
	);
}
