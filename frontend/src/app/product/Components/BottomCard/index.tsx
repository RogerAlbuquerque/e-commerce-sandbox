import React from 'react';
import Image from 'next/image';
// import { FaRegHeart } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';

interface TypeProductDetails {
	name: string
	price: number;
	proudctImagePath: string,
	quantity: number;
	setQuantity: (quantity: number) => void;
	addProductToCart: () => void;
	isVisible?: boolean;
}
export default function BottomCard({ name, proudctImagePath, price, quantity, setQuantity, addProductToCart, isVisible = true }: TypeProductDetails) {
	return (
		<article
			className={`z-10 fixed left-0 bottom-0 flex justify-center w-full bg-white py-4 transform transition-transform duration-200 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
			style={{ boxShadow: '0px -2px 24px #8884' }}
		>
			<section className='customContainer flex flex-col gap-3 px-4'>
				{/* Linha 1: imagem + nome */}
				<div className='flex items-center gap-4'>
					<Image
						src={proudctImagePath}
						width={160}
						height={14}
						alt=""
						className='w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0'
					/>
					<p className='text-sm sm:text-lg text-slate-600 truncate'>
						{name}
					</p>
				</div>

				{/* Linha 2: preço, quantidade, botão */}
				<div className='flex sm:flex-row items-center justify-between gap-3'>
					<div className='flex items-baseline gap-2 text-amber-400 text-sm sm:text-base'>
						<div className='font-medium'>${((price - (price * 0.2)) * quantity).toFixed(2)}</div>
						<div className='line-through hover:text-[#57534e]'>${parseFloat((price * quantity).toFixed(2))}</div>
					</div>

					<div className='flex items-center gap-2'>
						<button className='text-xs sm:text-sm border-2 px-2' onClick={() => quantity != 1 && setQuantity(quantity - 1)}>-</button>
						<input
							type="number"
							placeholder='Add qty'
							value={quantity}
							min={1}
							readOnly
							onChange={(e) => { setQuantity(Number(e.target.value)); }}
							className='border p-1 w-16 text-center'
						/>
						<button className='text-xs sm:text-sm border px-2' onClick={() => setQuantity(quantity + 1)}>+</button>
					</div>

					<button
						className='flex items-center p-4 justify-center w-full sm:w-auto border border-amber-400 pl-4 py-2 text-amber-400 text-sm sm:text-base hover:bg-amber-400 hover:text-white transition'
						style={{ transition: '0.3s' }}
						onClick={addProductToCart}
					>
						<MdAddShoppingCart />ADD TO CART
					</button>
				</div>
			</section>
		</article>
	);
}
