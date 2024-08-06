import React,{useState} from 'react';
import { IoIosArrowDown,IoIosArrowUp  } from 'react-icons/io';

interface dataItem{
	title:string;
	childrenData?:dataItem[]
	children?:dataItem[]
}
export default function SubMenuItem({title, childrenData}:dataItem){
	const [isSubmenuOpen, setSubmenuOpen] = useState(false);
	return(
		<li className='py-3' >
			<div className='flex justify-between px-5 text-xs items-center '>
				<a href="#"><h1>{title}</h1></a>
				{childrenData && 
				<div onClick={()=>setSubmenuOpen(!isSubmenuOpen)}>
					{isSubmenuOpen ? <IoIosArrowUp className='text-base'/> : <IoIosArrowDown  className='text-base'/>}
				</div>}
			</div>

			{isSubmenuOpen && childrenData && childrenData.map((childItem,childIndex) => {
				return(
					<ul key={childIndex} className='pl-4'>
						<SubMenuItem title={childItem.title} childrenData={childItem.children} key={childIndex}/>
					</ul>
				);
			})
			}
		</li>
	);
}