import React from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { SiPinterest, SiTwitter, SiYoutube } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { TfiFacebook } from 'react-icons/tfi';
import Link from 'next/link';
export default function Contact(){
	return(
		<article className='customContainer flex max-sm:flex-col items-center justify-center relative p-12 px-28 max-sm:px-8 mb-20 gap-16 '>
			<article className='text-center w-96 max-sm:w-full'>
				<h2 className='text-stone-800 text-medium text-4xl mb-2'>Shop Social</h2>
				<div className='text-lg mb-6'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</div>
				<div className='flex gap-2 justify-center text-2xl text-white'>
					<Link href='#' className='socialMediaIcons bg-indigo-400 hover:text-indigo-400 '><TfiFacebook  /></Link>
					<Link href='#' className='socialMediaIcons bg-sky-300 hover:text-sky-300 '><SiTwitter  	/></Link>
					<Link href='#' className='socialMediaIcons bg-pink-400 hover:text-pink-400 '><FiInstagram /></Link>
					<Link href='#' className='socialMediaIcons bg-red-400 hover:text-red-400 '><SiYoutube 	/></Link>
					<Link href='#' className='socialMediaIcons bg-red-400 hover:text-red-400 '><SiPinterest /></Link>
				</div>
			</article>
			<div id="line" className='max-sm:hidden border-l h-60 -mt-2'></div>
			<div id="line" className='hidden max-sm:block border w-full -mt-2'></div>
			<article className='text-center relative flex flex-col'>
				<h2 className='text-stone-800 text-medium text-4xl'>Get the Latest Deals</h2>
				<p className='text-xl '>and</p>
				<p className='text-xl font-light mb-2'>receive <span className='text-amber-500'>$20 coupon</span> for first shopping</p>
				<form action="" className='flex justify-center relative'>
					<input type="email" name="email" id="" placeholder='Enter your Email Address' className='border rounded-full pl-8 py-2 text-base text-left w-96 max-md:w-80'/>
					<button 
						type="button" 
						className='border rounded-r-full absolute bg-amber-500 hover:bg-amber-600 transition text-white top-0 right-0' 
						style={{padding:'0.6rem 1.5rem'}}><IoIosArrowRoundForward className='text-xl'/>
					</button>
				</form>
			</article>

			<Image
				src='/Imgs/Main/DealsNoticeBar.png'
				width={410}
				height={14}
				alt=""
				style={{ height: '100%', position:'absolute', width:'100%',top:'0', left:'0',zIndex:'-1'}}
			/>
		</article>
	);
}