'use client';

import { useEffect, useState } from 'react';
import CardProduct from '../../app/(home)/Components/CardProduct';
import { typeListProducts } from '../../@types/listProducts';
import BottomCard from '../product/Components/BottomCard';
import ProductCart from './productCart';
import Checkout from './productCart/Checkout/Checkout';

export default function CartItems() {
    const [itemsOnCart, setItemsOnCart] = useState<typeListProducts[]>([]);

    useEffect(() => {
        const cartItems = JSON.parse(
            localStorage.getItem('cart') || '[]'
        ) as typeListProducts[];

        setItemsOnCart(cartItems);
    }, []);

    return (
        <article className='customContainer mb-12 flex flex-col items-center justify-center mx-auto px-4'>
            <section className='min-h-screen pt-20 flex flex-col items-center w-full gap-8'>
                <section className='w-full flex flex-col gap-4 mb-8'>
                    {itemsOnCart.map((product) => (
                        <ProductCart
                            key={product.productId}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity ?? 1}
                            productImagePath={product.featuredImagePath}
                        />
                    ))}
                </section>
                <section className='w-full flex justify-center sm:justify-end'>
                    <Checkout
                        itemsOnCart={itemsOnCart.length}
                        shipping={5.99}
                        total={Number(itemsOnCart.reduce((total, item) => total + (item.price * (item.quantity ?? 1)), 0).toFixed(2))}
                    />
                </section>
            </section>
        </article>
    );
}