'use client';
import ProductCart from './productCart';
import Checkout from './productCart/Checkout/Checkout';
import { useCartStore } from '../../Context/cart/cart.store';

export default function CartItems() {
    const cartItems = useCartStore((state) => state.items);

    return (
        <article className='customContainer mb-12 flex flex-col items-center justify-center mx-auto px-4'>
            <section className='min-h-screen pt-12 flex flex-col items-center w-full gap-8'>
                <section className='w-full flex flex-col gap-4 mb-8'>
                    {cartItems.map((product) => (
                        <ProductCart
                            key={product.productId}
                            productId={product.productId}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity ?? 1}
                            productImagePath={product.featuredImagePath}
                        />
                    ))}
                </section>
                <section className='w-full flex justify-center sm:justify-end'>
                    <Checkout
                        shipping={5.99}
                        total={Number(cartItems.reduce((total, item) => total + (item.price * (item.quantity ?? 1)), 0).toFixed(2))}
                    />
                </section>
            </section>
        </article>
    );
}