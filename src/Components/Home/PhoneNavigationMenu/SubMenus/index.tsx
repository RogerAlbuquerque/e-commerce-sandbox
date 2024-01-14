import React from 'react';
import { SubMenuData } from '../subMenusData';
import Items from './items';

export default function SubMenus(){
	return(					
		<ul className='text-stone-600 font-light flex flex-col '>
			{SubMenuData.map((item,index)=>{
				return <Items itemData={item} key={index}/>;
			})}					
		</ul>
	);
}