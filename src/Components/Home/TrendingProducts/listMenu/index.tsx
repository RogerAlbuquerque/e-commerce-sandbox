'use client';
import React,{useState} from 'react';
export default function ListMenu(){
	const [listMenuStatus,setListMenuStatus] = useState([true,false,false,false,false]);

	function handleMenuListStatus(menuId:number){
		const newArray = [false,false,false,false,false];
		newArray[menuId] = true;
		setListMenuStatus(newArray);

	}
	return(
		<ul className='flex max-sm:justify-center gap-6 flex-wrap text-stone-800'>
			<li className={`${listMenuStatus[0] && 'border-b-2 border-amber-400 text-amber-500 transition delay-100 px-2'}`}><button onClick={() => handleMenuListStatus(0)} >ALL</button></li>
			<li className={`${listMenuStatus[1] && 'border-b-2 border-amber-400 text-amber-500 transition delay-100 px-2'}`}><button onClick={() => handleMenuListStatus(1)} >ACCESSORIES</button></li>
			<li className={`${listMenuStatus[2] && 'border-b-2 border-amber-400 text-amber-500 transition delay-100 px-2'}`}><button onClick={() => handleMenuListStatus(2)} >CAMERAS & CAMCORDERS</button></li>
			<li className={`${listMenuStatus[3] && 'border-b-2 border-amber-400 text-amber-500 transition delay-100 px-2'}`}><button onClick={() => handleMenuListStatus(3)} >COMPUTERS & TABLETS</button></li>
			<li className={`${listMenuStatus[4] && 'border-b-2 border-amber-400 text-amber-500 transition delay-100 px-2'}`}><button onClick={() => handleMenuListStatus(4)} >ENTERTAINMENT</button></li>
		</ul>			
	);
}