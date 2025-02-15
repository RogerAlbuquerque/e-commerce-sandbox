'use client';
import React, { useState } from 'react';
import CardProduct from '@/app/(home)/Components/CardProduct';
import { MdArrowForwardIos } from 'react-icons/md';
import { typeListProducts } from '@/@types/listProducts';

interface Typelist {
	idToScroll: number,
	listVisibility: boolean,
	listProducts: typeListProducts[]
}



export default function ScrollListProducts({ listProducts, idToScroll, listVisibility }: Typelist) {

	const [leftButtonIsVisible, setleftButtonIsVisible] = useState(false);
	const [rightButtonIsVisible, setRightButtonIsVisible] = useState(true);

	function handleScrollButtons(scrollSide: string, listNumber: number) {

		const scrollButton = document.getElementById(`listProducts_${listNumber}`)!;

		scrollSide == 'left' ? scrollButton.scrollLeft -= 300 : scrollButton.scrollLeft += 300;

		setTimeout(() => setScrollButtonVisibility(listNumber), 400);

	}

	function setScrollButtonVisibility(listNumber: number) {

		const scrollButton = document.getElementById(`listProducts_${listNumber}`)!;

		scrollButton.scrollLeft > 0 ? setleftButtonIsVisible(true) : scrollButton.scrollLeft <= 0 && setleftButtonIsVisible(false);

		scrollButton.scrollLeft >= 1820 ? setRightButtonIsVisible(false) : setRightButtonIsVisible(true);
	}


	return (
		<section className={`${!listVisibility && 'hidden'} relative flex overflow-x-hidden`}>
			<div id={`listProducts_${idToScroll}`} className='flex max-md:pl-0 pl-4 gap-4 items-center overflow-x-hidden max-md:overflow-x-scroll scroll-smooth'>
				{listProducts.map((item, index) => {
					return (
						<div key={index} >
							<CardProduct
								product={item}
							/>
						</div>
					)
				})}
			</div>

			<section>
				<div id='ScrollButtonRight'
					className={`${rightButtonIsVisible == false && 'hidden'} opacity-80 h-full flex items-center justify-center w-8 absolute right-0 cursor-pointer max-md:hidden`}
					style={{ background: '#FFFE', boxShadow: '-4px 0px 4px #8884' }}
					onClick={() => handleScrollButtons('right', idToScroll)}
				>
					<MdArrowForwardIos className='text-xl text-amber-500' />
				</div>
				<div id='ScrollButtonLeft'
					className={`${leftButtonIsVisible == false && 'hidden'} opacity-80 h-full flex items-center justify-center w-8 absolute left-0 cursor-pointer max-md:hidden`}
					style={{ background: '#FFFE', boxShadow: '4px 0px 4px #8884' }}
					onClick={() => handleScrollButtons('left', idToScroll)}
				>
					<MdArrowForwardIos className='text-xl rotate-180 text-amber-500' />
				</div>
			</section>
		</section>
	);
}