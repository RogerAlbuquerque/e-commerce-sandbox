import React from 'react';
import Image from 'next/image';
// import { FaRegHeart } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';

interface TypeCheckou {
    itemsOnCart: number;
    shipping: number;
    total: number;
}
export default function Checkou({ itemsOnCart, shipping, total }: TypeCheckou) {
    return (
        <article className="w-full max-w-md rounded-xl overflow-hidden" style={{ boxShadow: '0px -2px 24px #8884' }}>
            <div className='bg-slate-50 p-4'>
                <p className='font-semibold text-lg'>Purchase summary</p>
            </div>
            <div className='p-4'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between text-sm sm:text-base'>
                        <p>Products</p>
                        <p>${(Number(total)).toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between text-sm sm:text-base'>
                        <p>Shipping</p>
                        <p>${shipping.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between text-lg sm:text-xl font-semibold'>
                        <p>Total</p>
                        <p>${(Number(total) + shipping).toFixed(2)}</p>
                    </div>
                </div>

                <button className='mt-6 w-full bg-blue-400 text-xl text-white py-3 rounded-md hover:bg-blue-500 transition'>
                    Checkout
                </button>
            </div>
        </article>
    );
}
