import React from 'react';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';

interface TypeProductDetails {
	name: string
	price: number;
	proudctImagePath: string,
	quantity: number;
	setQuantity: (quantity:number) => void;
	addProductToCart: () => void;

}
export default function BottomCard({ name, proudctImagePath, price, quantity, setQuantity,addProductToCart }: TypeProductDetails) {
	return (
		<article className='z-10 fixed left-0 bottom-0 flex justify-center w-full bg-white py-4' style={{ boxShadow: '0px -2px 24px #8884' }}>
			<section className='customContainer flex items-center justify-between gap-12 px-4'>
				<div className='flex items-center gap-8'>
					<Image
						src={proudctImagePath}
						width={160}
						height={14}
						alt=""
						className='w-16 h-16'
					/>
					<p className='w-96 text-lg text-slate-600 overflow-hidden whitespace-nowrap text-ellipsis'>
						{name}
					</p>
				</div>

				<div className='flex gap-8 text-amber-400 text-base items-center'>
					<section className='flex font-medium'>
						<div>${((price - (price * 0.2)) * quantity).toFixed(2)}</div>

						<div className='line-through hover:text-[#57534e]'>–${parseFloat((price * quantity).toFixed(2)) }</div>
					</section>

					<section>
						<input
							type="number"
							placeholder='1'
							value={quantity}
							min={1}
							onChange={(e) => { setQuantity(Number(e.target.value)); }}
							style={{ marginLeft: '2px' }} />
					</section>

					<button
						className='flex items-center w-48 border border-amber-400 pl-8 py-2 text-amber-400 text-base hover:bg-amber-400 hover:text-white transition'
						style={{ transition: '0.3s' }}
						onClick={addProductToCart}
					>
						<MdAddShoppingCart />ADD TO CART
					</button>
					<button className='p-2 text-base'><FaRegHeart /></button>
				</div>
			</section>
		</article>
	);
}
