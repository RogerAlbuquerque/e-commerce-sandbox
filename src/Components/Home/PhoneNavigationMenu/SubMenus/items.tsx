import React,{useState} from 'react';
import { IoIosArrowDown,IoIosArrowUp  } from 'react-icons/io';

interface itemsData{
	itemData?:{
		title:string,
		children?:itemsData[];	
	}
}
export default function Items({itemData}:itemsData){
	const [isSubmenuOpen, setSubmenuOpen] = useState(false);
	return(
		<li className='border-t py-3' >
			<div className='flex justify-between px-5 text-xs items-center'>
				<h1>{itemData?.title}</h1>
				<div onClick={()=>setSubmenuOpen(!isSubmenuOpen)}>
					{isSubmenuOpen ? <IoIosArrowUp className='text-base'/> : <IoIosArrowDown  className='text-base'/>}
				</div>
			</div>

			{isSubmenuOpen && itemData?.children && itemData?.children.map((childItem:itemsData,childIndex:number) => {
				return(
					<ul key={childIndex} className={`text-sm gap-6 pt-4 pl-8 mt-3 ${childIndex == 0 && 'border-t'}`}>
						<li>
							{childItem.title}
						</li>
					</ul>
				);
			})
			}
		</li>
	);
}