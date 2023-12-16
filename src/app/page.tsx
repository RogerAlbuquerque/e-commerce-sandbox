import React from 'react';
import Image from 'next/image';
export default function Index() {
	return (
		<>
			<article id='highlightsProducts' className='flex gap-6'>
				<section className=''>
					<Image
						src='/Imgs/Main/earphone.png'
						width={800}
						height={0}
						alt=""
						style={{ height: '400px' }}
					/>
				</section>

				<section className='flex flex-col gap-4'>					
					<div>
						<Image
							src='/Imgs/Main/phoneProduct.png'
							width={410}
							height={14}
							alt="icon of a telephone to show contact number"
							style={{ height: '123px'}}
						/>
					</div>
					<div>
						<Image
							src='/Imgs/Main/GoproLink.png'
							width={410}
							height={14}
							alt="icon of a telephone to show contact number"
							style={{ height: '123px'}}
						/>
					</div>
					<div>
						<Image
							src='/Imgs/Main/appleWatch.png'
							width={410}
							height={14}
							alt="icon of a telephone to show contact number"
							style={{ height: '123px'}}
						/>
					</div>
				</section>				
			</article>

			<article>
				<section>
					<div className='flex gap-8 text-3xl font-semibold justify-center pt-8 pb-6'>
						<h1>Feature</h1>
						<h1>On Sale</h1>
						<h1>Top Rated</h1>
					</div>
					<div className='border-2 w-80'>
						<div id='ImageContents'>
							<div>Image1</div>
							<div>Image2</div>
							<div>topLeftInfos</div>
							<div>WishlistButton</div>
						</div>
						<div>ProductInfos</div>
					</div>
				</section>
			</article>
		</>
		
	);
}
