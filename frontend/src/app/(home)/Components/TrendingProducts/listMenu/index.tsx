import React, { useState } from 'react';
interface listStatus {
	listMenuStatus: boolean[];
	handleMenuListStatus: (menuId: number) => void;

}
export default function ListMenu({ listMenuStatus, handleMenuListStatus }: listStatus) {
const LinksClass = 'border-b-2 border-amber-400 text-amber-500 transition delay-100 px-2';
	return (
		<ul className='flex max-sm:justify-center gap-6 flex-wrap text-stone-800'>
			<li className={listMenuStatus[0] ? LinksClass : ''}><button onClick={() => handleMenuListStatus(0)}>ALL</button></li>
			<li className={listMenuStatus[1] ? LinksClass : ''}><button onClick={() => handleMenuListStatus(1)}>ACCESSORIES</button></li>
			<li className={listMenuStatus[2] ? LinksClass : ''}><button onClick={() => handleMenuListStatus(2)}>CAMERAS & CAMCORDERS</button></li>
			<li className={listMenuStatus[3] ? LinksClass : ''}><button onClick={() => handleMenuListStatus(3)}>COMPUTERS & TABLETS</button></li>
			<li className={listMenuStatus[4] ? LinksClass : ''}><button onClick={() => handleMenuListStatus(4)}>ENTERTAINMENT</button></li>
			<li className={listMenuStatus[4] ? LinksClass : ''}><button onClick={() => handleMenuListStatus(4)}>ENTERTAINMENT</button></li>
		</ul>
	);
}