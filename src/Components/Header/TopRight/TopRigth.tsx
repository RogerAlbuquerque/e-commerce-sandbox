'use client';
import React from 'react';
export default function TopRight() {
	function DropDownMenuShow(menuId:string){
		const menu = document.getElementById(menuId)?.style;			
		menu!.display = 'flex';
	}
	function DropDownMenuHidden(menuId:string){
		const menu = document.getElementById(menuId)?.style;
		setTimeout(function() {
		menu!.display = 'none';
		}, 2000);
	}
	return (
		<section className='flex justify-between gap-6'>
			<div onMouseEnter={() => DropDownMenuShow('moneyType')} onMouseOut={() => DropDownMenuHidden('moneyType')}>
				<a href='#' >
					USD &#8595;
				</a>
				<ul id='moneyType' className='bg-white text-neutral-400 flex flex-col p-2 mt-2 absolute hidden'>
					<a href='#'>USD</a>
					<a href='#'>EUR</a>
				</ul>
			</div>
			<div onMouseEnter={() => DropDownMenuShow('langMenu')} onMouseOut={() => DropDownMenuHidden('langMenu')}>
				<a href='#' >English &#8595;</a>
				<ul id='langMenu' className='bg-white text-neutral-400 flex flex-col p-2 mt-2 absolute hidden'>
					<a href='#'>English</a>
					<a href='#'>French</a>
					<a href='#'>Portuguese</a>
				</ul>
			</div>
			<div>
				<a href='#'>Sign in / sign up</a>
			</div>
			
		</section>
	);
}
