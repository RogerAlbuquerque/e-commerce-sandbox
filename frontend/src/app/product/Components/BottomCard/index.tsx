import React from 'react';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { typeListProducts } from '@/@types/listProducts';

interface TypeProductDetails{
productDetails: typeListProducts
}
export default function BottomCard({productDetails}:TypeProductDetails) {
	const quantity = 1;
	const price = ((productDetails.price - (productDetails.price * 0.2)) * quantity).toFixed(2);
	return (
		<article className='fixed left-0 bottom-0 flex justify-center w-full bg-white py-4' style={{ boxShadow: '0px -2px 24px #8884' }}>
			<section className='customContainer flex items-center justify-between gap-12 px-4'>
				<div className='flex items-center gap-8'>
					<Image
						src={productDetails.imagesPath.featuredImagePath}
						width={160}
						height={14}
						alt=""
						className='w-full h-16'
					/>
					<p className='text-lg text-slate-600'>
						{productDetails.name}
					</p>
				</div>

				<div className='flex gap-8 text-amber-400 text-base items-center'>
					<section className='flex font-medium'>
						<div>${price}</div>

						<div className='line-through hover:text-[#57534e]'>–${productDetails.price * quantity}</div>
					</section>

					<section>
						<input type="number" placeholder='1' min={1} className='text-black border p-1 pl-4 w-20 text-center' />
					</section>

					<button
						className='flex items-center w-48 border border-amber-400 pl-8 py-2 text-amber-400 text-base hover:bg-amber-400 hover:text-white transition'
						style={{ transition: '0.3s' }}
					>
						<MdAddShoppingCart />ADD TO CART
					</button>
					<button className='p-2 text-base'><FaRegHeart /></button>
				</div>
			</section>
		</article>
	);
}
