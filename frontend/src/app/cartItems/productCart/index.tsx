import React from 'react';
import Image from 'next/image';
import { LuTrash2 } from "react-icons/lu";
import { useCartStore } from '../../../Context/cart/cart.store';
import Link from 'next/link';

interface TypeProductDetails {
    productId: string
    name: string
    price: number;
    productImagePath: string,
    quantity: number;
}
export default function ProductCart({ productId, name, productImagePath, price, quantity }: TypeProductDetails) {

    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItemFromCart = useCartStore((state) => state.removeItemFromCart);

    return (
        <article className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-3' w-full p-2 " style={{ boxShadow: '0px -2px 24px #8884' }}>


            <div className='flex items-center gap-4 w-full min-w-0'>
                <Link href={`/product/${productId}`}>
                    <Image
                        src={productImagePath}
                        width={160}
                        height={14}
                        alt=""
                        className='w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-md object-cover'
                    />
                </Link>
                <div className='w-full min-w-0 text-sm sm:text-base text-slate-600'>
                    <div className='truncate font-medium'>{name}</div>
                    <div className='mt-2 flex items-center gap-2'>
                        <label className='text-xs text-gray-500'>Qty</label>
                        <button className={`text-xs sm:text-sm border-2 px-2 ${quantity <= 1 && "text-gray-300  border-gray-100"}`} onClick={() => updateQuantity(productId, -1)} disabled={quantity <= 1}>-</button>
                        <input
                            type="number"
                            placeholder='Add qty'
                            value={quantity}
                            min={1}
                            readOnly
                            className='p-1 w-16 text-center rounded border border-slate-200'
                        />
                        <button className='text-xs sm:text-sm border px-2' onClick={() => updateQuantity(productId, 1)}>+</button>
                    </div>
                </div>
                <button className='pb-9 text-xl' onClick={() => removeItemFromCart(productId)}><LuTrash2 /></button>
            </div>

            {/* <div className='flex items-center gap-2'>
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
					</div> */}

            <div className='text-black flex flex-col sm:items-end gap-2 text-sm sm:text-base w-80'>
                <div className='line-through text-sm text-gray-400 hover:text-[#57534e]'>${parseFloat((price * quantity).toFixed(2))}</div>
                <div className='font-medium'>${((price - (price * 0.2)) * quantity).toFixed(2)}</div>
            </div>
        </article>
    );
}
