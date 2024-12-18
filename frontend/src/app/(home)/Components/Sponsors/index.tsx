import React from 'react';
import Image from 'next/image';
import './infinteHorizontalScrollStyles.css'
export default function Sponsor() {
	return (
		<article id='Sponsors' className='mb-20 customContainer'>
			<div className="relative overflow-hidden scroll-container flex justify-start gap-10 pt-16 pl-4 pb-8">
				<div className="carousel-primary">
					<Image width={120} height={120} alt='' src='/Imgs/Main/Sponsors/GrayLogo.png' />
					<Image width={120} height={120} alt='' src='/Imgs/Main/Sponsors/GrayLogo.png' />
					<Image width={120} height={120} alt='' src='/Imgs/Main/Sponsors/GrayLogo.png' />
					<Image width={120} height={120} alt='' src='/Imgs/Main/Sponsors/GrayLogo.png' />
				</div>
				<div className="carousel-primary carousel-secondary">
					<Image width={120} height={120} alt='' src='/Imgs/Main/Sponsors/GrayLogo.png' />
					<Image width={120} height={120} alt='' src='/Imgs/Main/Sponsors/GrayLogo.png' />
					<Image width={120} height={120} alt='' src='/Imgs/Main/Sponsors/GrayLogo.png' />
					<Image width={120} height={120} alt='' src='/Imgs/Main/Sponsors/GrayLogo.png' />
				</div>
			</div>
			<hr />
		</article>
	);
}