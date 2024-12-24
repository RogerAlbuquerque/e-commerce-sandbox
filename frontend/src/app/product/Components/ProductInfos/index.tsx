'use client';
import React, { useEffect, useState } from 'react';
import { FiInstagram } from 'react-icons/fi';
import { CiViewTable } from 'react-icons/ci';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { TfiFacebook } from 'react-icons/tfi';
import { SiPinterest } from 'react-icons/si';
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import ColorProduct from './Components/ColorProduct';
import { typeListProducts } from '@/@types/listProducts';

interface TypeProductDetails{
productDetails: typeListProducts
}

export default function ProductsImages({productDetails}:TypeProductDetails) {

	const [productName, setProductName] = useState<string>(productDetails.name);
	const [colorList] = useState<string[]>(productDetails.color);
	const [colorSelected, setColorSelected] = useState<number>(0);
	const [size, setSize] = useState<string>();
	const [quantity, setQuantity] = useState<number>(1);
	const [price, setPrice] = useState<number>(productDetails.price);



	function showAll() {

		console.log(productName, colorList[colorSelected], size, quantity, (price * quantity).toFixed(2))
	}

	useEffect(() => {
		setPrice(Number(((price - (price * 0.2))).toFixed(2)));
	}, []);

	return (
		<article className='flex flex-col flex-1  text-stone-500'>
			<h1 className='text-black  text-2xl'>{productName}</h1>
			<section>
				<div className='flex gap-2 pt-2 pb-2 items-center text-stone-300'>
					<p className='flex'>
						<FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='' />
					</p>
					<p>( 2 Reviews )</p>
				</div>								{/*Values with 20% discount*/}
				<p className='text-amber-400 text-2xl font-medium'>
					${((price - (price * 0.2)) * quantity).toFixed(2)} - <span className='line-through hover:text-[#57534e]'>${price * quantity}</span>
				</p>
			</section>


			<p className='py-4 text-stone-500 text-base'>
				Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
			</p>

			<article className='flex flex-col gap-2 mb-4'>

				<ColorProduct
					colorList={colorList}
					colorSelected={colorSelected}
					setColorSelected={setColorSelected}
				/>

				<section className='flex gap-9'>
					<p>Size:</p>
					<select onChange={(e) => setSize(e.target.value)} name="produtSize" id="productSize" className='border text-base p-1 pr-3'>
						<option value="">Select a Size</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="extra-large">Extra Large</option>
					</select>

					<button type="button" className='text-sm flex items-center gap-1 hover:text-amber-400'>
						<CiViewTable className='text-lg' /> size guide
					</button>

					<button type="button" className='text-base text-amber-400'>
						clear
					</button>
				</section>

				<section className='flex gap-9'>
					<p>Qty:</p>
					<input
						type="number"
						placeholder='1'
						defaultValue={1}
						min={1}
						className='border p-1 w-32 text-center'
						onChange={(e) => { setQuantity(Number(e.target.value)); }}
						style={{ marginLeft: '2px' }} />
				</section>

				<section className='flex items-center gap-9'>
					<button
						onClick={showAll}
						className='flex items-center w-48 border border-amber-400 pl-8 py-2 text-amber-400 text-base hover:bg-amber-400 hover:text-white transition'
						style={{ transition: '0.3s' }}
					>
						<MdAddShoppingCart />ADD TO CART
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
					<Link href='#' className='border rounded-full p-2 text-sm hover:border-amber-400 hover:text-amber-400'><TfiFacebook /></Link>
					<Link href='#' className='border rounded-full p-2 text-sm hover:border-amber-400 hover:text-amber-400'><FaTwitter /></Link>
					<Link href='#' className='border rounded-full p-2 text-sm hover:border-amber-400 hover:text-amber-400'><FiInstagram /></Link>
					<Link href='#' className='border rounded-full p-2 text-sm hover:border-amber-400 hover:text-amber-400'><SiPinterest /></Link>
				</section>
			</article>
		</article>
	);
}