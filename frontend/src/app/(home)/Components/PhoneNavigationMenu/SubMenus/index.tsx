import React from 'react';
import { SubMenuData } from '../subMenusData.js';
import SubMenuItem from './SubMenuItem.tsx';

export default function SubMenus(){
	return(					
		<ul className='text-stone-600 font-light flex flex-col '>
			{SubMenuData.map((item,index)=>{
				return (
					<div className={`border-t ${(index == SubMenuData.length - 1) && 'border-b'}`} key={index}>
						<SubMenuItem title={item.title} childrenData={item.children}/>
					</div>
				);
			})}					
		</ul>
	);
}