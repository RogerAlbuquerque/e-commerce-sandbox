
'use client'
import React from 'react';
import Image from 'next/image'
export default function Error() {
	return (
		<article className='flex w-full justify-center'>
			<Image
				src="/Imgs/errorpage.png"
				width={660}
				height={660}
				alt="error image"
			/>
		</article>
	);
}
