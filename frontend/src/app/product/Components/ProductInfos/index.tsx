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
import BottomCard from '../BottomCard';
import { typeListProducts } from '../../../../@types/listProducts';

interface TypeProductDetails {
	productDetails: typeListProducts,
	showBottomCard?: boolean
}

export default function ProductsImages({ productDetails, showBottomCard = false }: TypeProductDetails) {

	const [productName] = useState<string>(productDetails.name);
	const [colorList] = useState<string[]>(productDetails.hexColor);
	const [colorSelected, setColorSelected] = useState<number>(0);
	const [size, setSize] = useState<string>();
	const [quantity, setQuantity] = useState<number>(1);
	const [price, setPrice] = useState<number>(productDetails.price);

	function addProductToCart() {
		alert("Produto: " + productName + "\nCor: " + colorList[colorSelected] + "\nTamanho: " + size + "\nQuantidade: " + quantity + "\nTotal: R$ " + ((price - (price * 0.2)) * quantity).toFixed(2));
	}

	useEffect(() => {
		setPrice(price);
	}, [price]);

	return (
		<article className='flex flex-col flex-1 text-stone-500 px-4 sm:px-0'>
			<h1 className='text-black text-xl sm:text-2xl'>{productName}</h1>
			<section>
				<div className='flex gap-2 pt-2 pb-2 items-center text-stone-300'>
					<p className='flex'>
						<FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='text-amber-500' />
						<FaStar className='' />
					</p>
					<p className='text-sm sm:text-base'>( 2 Reviews )</p>
				</div>								{/*Values with 20% discount*/}
				<p className='text-amber-400 text-lg sm:text-2xl font-medium'>
					${((price - (price * 0.2)) * quantity).toFixed(2)} - <span className='line-through hover:text-[#57534e]'>${parseFloat((price * quantity).toFixed(2))}</span>
				</p>
			</section>


			<p className='py-4 text-stone-500 text-sm sm:text-base'>
				Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
			</p>

			<article className='flex flex-col gap-2 mb-4'>

				<ColorProduct
					colorList={colorList}
					colorSelected={colorSelected}
					setColorSelected={setColorSelected}
				/>

				<section className='flex flex-col sm:flex-row gap-4 sm:gap-9'>
					<p className='text-sm sm:text-base'>Size:</p>
					<select onChange={(e) => setSize(e.target.value)} name="produtSize" id="productSize" className='border text-sm sm:text-base p-1 pr-3 w-full sm:w-auto'>
						<option value="">Select a Size</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="extra-large">Extra Large</option>
					</select>

					<button type="button" className='text-xs sm:text-sm flex items-center gap-1 hover:text-amber-400'>
						<CiViewTable className='text-base sm:text-lg' /> size guide
					</button>

					{/*
					<button type="button" className='text-sm sm:text-base text-amber-400'>
						clear
					</button>
					*/}
				</section>

				<section className='flex sm:flex-row gap-4 sm:gap-9 items-start sm:items-center'>
					<p className='text-sm sm:text-base'>Qty:</p>
					<button className='text-xs sm:text-sm border-2 px-2 mt-1' onClick={() => quantity != 1 && setQuantity(quantity - 1)}>-</button>
					<input
						type="number"
						placeholder='Add qty'
						value={quantity}
						min={1}
						readOnly
						onChange={(e) => { setQuantity(Number(e.target.value)); }}
						className='border p-1 w-16 text-center'
					/>
					<button className='text-xs sm:text-sm border px-2 mt-1' onClick={() => setQuantity(quantity + 1)}>+</button>
				</section>

				<section className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-9'>
					<button
						onClick={addProductToCart}
						className='flex items-center justify-center w-full sm:w-48 border border-amber-400 pl-4 sm:pl-8 py-2 text-amber-400 text-sm sm:text-base hover:bg-amber-400 hover:text-white transition'
						style={{ transition: '0.3s' }}
					>
						<MdAddShoppingCart />ADD TO CART
					</button>

					<p className='flex items-center gap-2 text-sm sm:text-base'>
						<FaRegHeart />
						<button type='button' className='hover:text-amber-400 hover:border-b '>
							Add to Wishlist
						</button>
					</p>
				</section>
			</article>

			<hr />

			<article className='flex flex-col'>
				<p className='text-sm sm:text-base pt-2'>
					Category: Accessories, Smartwatches
				</p>
				<section className='flex gap-2 pt-2'>
					<p className='text-sm sm:text-base'>Share:</p>
					<Link href='#' className='border rounded-full p-1 sm:p-2 text-xs sm:text-sm hover:border-amber-400 hover:text-amber-400'><TfiFacebook /></Link>
					<Link href='#' className='border rounded-full p-1 sm:p-2 text-xs sm:text-sm hover:border-amber-400 hover:text-amber-400'><FaTwitter /></Link>
					<Link href='#' className='border rounded-full p-1 sm:p-2 text-xs sm:text-sm hover:border-amber-400 hover:text-amber-400'><FiInstagram /></Link>
					<Link href='#' className='border rounded-full p-1 sm:p-2 text-xs sm:text-sm hover:border-amber-400 hover:text-amber-400'><SiPinterest /></Link>
				</section>

				<BottomCard
					name={productName}
					price={price}
					quantity={quantity}
					proudctImagePath={productDetails.featuredImagePath}
					setQuantity={setQuantity}
					addProductToCart={addProductToCart}
					isVisible={showBottomCard}
				/>
			</article>
		</article>
	);
}