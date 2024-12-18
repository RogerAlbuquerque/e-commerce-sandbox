'use client';
import React, { useState } from 'react';
import CardProduct from '../../app/(home)/Components/CardProduct';
import { MdArrowForwardIos } from 'react-icons/md';
import { typeListProducts } from '@/@types/listProducts';

interface Typelist {
	listId: number,
	listVisibility: boolean,
<<<<<<< HEAD:frontend/src/app/(home)/Components/ScrollListProducts/index.tsx
	listProducts: {
		productId: number,
		name: string;
		price: number;
		color: string;
		productCategories:string[]
		imagesPath: {
			featuredImagePath: string;
			secondaryImagesPath: string;
		};
		productState: {
			sale: boolean;
			newProduct: boolean;
			topProduct: boolean;
		};
		stars: number;
	}[]
=======
	listProducts: typeListProducts[]
>>>>>>> 92b39dd (feat: Im doing a lot of things):frontend/src/Components/ScrollListProducts/index.tsx
}



export default function ScrollListProducts({ listProducts, listId, listVisibility }: Typelist) {

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
			<div id={`listProducts_${listId}`} className='flex max-md:pl-0 pl-4 gap-4 items-center overflow-x-hidden max-md:overflow-x-scroll scroll-smooth'>
				{listProducts?.map((item, index) => {
					return (
						<div key={index} >
							<CardProduct
								productId={item.productId}
<<<<<<< HEAD:frontend/src/app/(home)/Components/ScrollListProducts/index.tsx
								productName={item.name}
								productPrice={item.price}
								productCategories={item.productCategories}
								stars={item.stars}
								sale={item.productState.sale}
								topProduct={item.productState.topProduct}
								newProduct={item.productState.newProduct}
								imagePath={
									listId == 1 ? item.imagesPath.featuredImagePath :
										listId == 2 ? '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg' :
											'/Imgs/Main/productsImages/appleWatchSide.png'
								}
								secondaryImagesPath={
									listId == 1 ? item.imagesPath.secondaryImagesPath :
										listId == 2 ? '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg' :
											'/Imgs/Main/productsImages/appleWatchFront.jpg'
								}
=======
								name={item.name}
								price={item.price}
								productCategories={item.productCategories}
								stars={item.stars}
								productState={item.productState}
								imagesPath={item.imagesPath}
>>>>>>> 92b39dd (feat: Im doing a lot of things):frontend/src/Components/ScrollListProducts/index.tsx
							/>
						</div>
					)
				})}
			</div>

			<section>
				<div id='ScrollButtonRight'
					className={`${rightButtonIsVisible == false && 'hidden'} opacity-80 h-full flex items-center justify-center w-8 absolute right-0 cursor-pointer max-md:hidden`}
					style={{ background: '#FFFE', boxShadow: '-4px 0px 4px #8884' }}
					onClick={() => handleScrollButtons('right', listId)}
				>
					<MdArrowForwardIos className='text-xl text-amber-500' />
				</div>
				<div id='ScrollButtonLeft'
					className={`${leftButtonIsVisible == false && 'hidden'} opacity-80 h-full flex items-center justify-center w-8 absolute left-0 cursor-pointer max-md:hidden`}
					style={{ background: '#FFFE', boxShadow: '4px 0px 4px #8884' }}
					onClick={() => handleScrollButtons('left', listId)}
				>
					<MdArrowForwardIos className='text-xl rotate-180 text-amber-500' />
				</div>
			</section>
		</section>
	);
}