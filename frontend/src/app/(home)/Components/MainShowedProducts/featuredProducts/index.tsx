'use client';
import { useState } from "react";
import ScrollListProducts from '@/Components/ScrollListProducts';
import { typeListProducts } from "@/@types/listProducts";

interface listProductPropType{
	listProducts:typeListProducts[]
}

export function FeaturedProducts({listProducts}:listProductPropType) {
	const [scrollListId, setScrollListId] = useState(1);
	const [listVisibility, setListVisibility] = useState([true, false, false]);


	function handleListValue(newValue: number) {

		newValue == 1 ? setListVisibility([true, false, false]) : newValue == 2 ? setListVisibility([false, true, false]) : newValue == 3 && setListVisibility([false, false, true]);

		setScrollListId(newValue);
	}
	return (
		<section className=''>
			<div className='flex flex-wrap gap-8 text-3xl font-semibold justify-center pt-8 pb-6'>
				<button
					onClick={() => handleListValue(1)}
					className={`${scrollListId == 1 && 'text-stone-800 border-b-2 border-stone-700 pb-4 cursor-pointer hover:text-stone-800'}`}>Featured
				</button>
				<button
					onClick={() => handleListValue(2)}
					className={`${scrollListId == 2 && 'text-stone-800 border-b-2 border-stone-700 pb-4 cursor-pointer hover:text-stone-800'}`}>On Sale
				</button>
				<button
					onClick={() => handleListValue(3)}
					className={`${scrollListId == 3 && 'text-stone-800 border-b-2 border-stone-700 pb-4 cursor-pointer hover:text-stone-800'}`}>Top Rated
				</button>
			</div>

			<div className=''>
				<ScrollListProducts listProducts={listProducts}  idToScroll={1} listVisibility={listVisibility[0]} /> {/*Only products with featured flag*/}
				<ScrollListProducts listProducts={listProducts} idToScroll={2} listVisibility={listVisibility[1]} /> {/*Only products with "On Sale" flag  */}
				<ScrollListProducts listProducts={listProducts} idToScroll={3} listVisibility={listVisibility[2]} /> {/*Only products with "Top Rated" flag  */}
			</div>
		</section>
	)
}