'use client';
import React from 'react';
export default function TopRight() {
	// function showMenu(menuId:string){
	// 	const menu = document.getElementById(menuId)?.style;
	// 	menu!.display = 'flex';
	// }

	// function hideMenu(menuId:string){
	// 	const menu = document.getElementById(menuId)?.style;
	// 	menu!.display ='none';
	// }
	return (
		<section className='flex justify-between gap-6'>			
			<div className="group">
				<a href="#">USD &#8595;</a>
				<div className="hidden absolute w-32 bg-white group-hover:block">
					<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2 absolute '>
						<a href='#'>USD</a>
						<a href='#'>EUR</a>
					</ul>
				</div>
			</div>

			<div className="group">
				<a href="#">English &#8595;</a>
				<div className="hidden absolute w-32 bg-white group-hover:block">
					<ul  id='money' className='bg-white text-neutral-400 flex flex-col p-2  absolute '>
						<a href='#'>English</a>
						<a href='#'>French</a>
						<a href='#'>Portuguese</a>
					</ul>
				</div>
			</div>

			<div>
				<a href='#'>Sign in / sign up</a>
			</div>	

		</section>
	);
}
