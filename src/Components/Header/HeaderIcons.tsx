'use client';
import React from 'react';
import { useState } from 'react';

interface test{
	icon:string;
}

export default function SearchIconButton({icon}:test){
	const [isActive, setIsActive] = useState(true);
	return icon == 'search' ?  
		<svg xmlns="http://www.w3.org/2000/svg"  fill = {isActive ? 'black' : 'orange'} onMouseEnter={() => setIsActive(false)} onMouseLeave={() => setIsActive(true)} onClick={() => document.getElementById('SearchProducts')?.focus() } style={{transition: 'fill 0.6s', cursor:'pointer'}} viewBox="0 0 32 32" width="20px" height="20px"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"/></svg>
		:
		icon == 'heart' ?
			<svg xmlns="http://www.w3.org/2000/svg" fill = {isActive ? 'white' : 'orange'} onMouseEnter={() => setIsActive(false)} onMouseLeave={() => setIsActive(true)} style={{transition: 'fill 0.4s', cursor:'pointer'}} width="24" height="24" data-name="Layer 1" viewBox="0 0 24 24" id="heart"><path d="M17.086,1.223a6.748,6.748,0,0,0-4.96,2.155L12,3.511l-.123-.129a6.794,6.794,0,0,0-9.713-.227A7.748,7.748,0,0,0,2.146,13.9l7.433,7.827a3.314,3.314,0,0,0,4.842,0L21.854,13.9a7.748,7.748,0,0,0-.017-10.744A6.811,6.811,0,0,0,17.086,1.223Zm3.317,11.3L12.971,20.35a1.346,1.346,0,0,1-1.942,0L3.6,12.523a5.792,5.792,0,0,1-.044-7.929A4.821,4.821,0,0,1,6.914,3.223a4.772,4.772,0,0,1,3.509,1.532l.852.9a1.028,1.028,0,0,0,1.45,0l.855-.9a4.772,4.772,0,0,1,3.506-1.528A4.822,4.822,0,0,1,20.448,4.6,5.792,5.792,0,0,1,20.4,12.523Z"></path></svg>
			:
			icon	== 'compare' ?
				<svg xmlns="http://www.w3.org/2000/svg" fill = {isActive ? 'white' : 'orange'} onMouseEnter={() => setIsActive(false)} onMouseLeave={() => setIsActive(true)} style={{transition: 'fill 0.4s', cursor:'pointer'}} width="24" height="24" viewBox="0 0 24 24" id="compare"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V14zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.31.85.09.85-.36z"></path></svg>
				:
				<svg xmlns="http://www.w3.org/2000/svg" fill = {isActive ? 'white' : 'orange'} onMouseEnter={() => setIsActive(false)} onMouseLeave={() => setIsActive(true)} style={{transition: 'fill 0.4s', cursor:'pointer'}} width="24" height="24" viewBox="0 0 512.002 512.002" id="cart"><path d="M194.59 382.711c-35.646 0-64.646 29-64.646 64.646s29 64.646 64.646 64.646 64.646-29 64.646-64.646-29.001-64.646-64.646-64.646zm0 90.504c-14.261 0-25.858-11.597-25.858-25.858 0-14.261 11.597-25.858 25.858-25.858 14.254 0 25.858 11.597 25.858 25.858 0 14.26-11.597 25.858-25.858 25.858zm191.351-90.504c-35.646 0-64.646 29-64.646 64.646s29 64.646 64.646 64.646 64.646-29 64.646-64.646-29-64.646-64.646-64.646zm0 90.504c-14.261 0-25.858-11.597-25.858-25.858 0-14.261 11.597-25.858 25.858-25.858 14.261 0 25.858 11.597 25.858 25.858 0 14.26-11.597 25.858-25.858 25.858zm112.147-346.941a19.4 19.4 0 0 0-15.179-7.324H143.326l-17.629-89.095a19.392 19.392 0 0 0-15.528-15.308L32.594.325C22.038-1.621 11.953 5.368 10.02 15.905s5.042 20.641 15.58 22.574l64.607 11.843 56.914 287.667c1.797 9.083 9.768 15.631 19.025 15.631h271.512c9.031 0 16.86-6.225 18.896-15.037l45.252-195.876a19.38 19.38 0 0 0-3.718-16.433zm-75.855 188.559H182.074l-31.075-157.089h307.519l-36.285 157.089z"></path></svg>;			
}