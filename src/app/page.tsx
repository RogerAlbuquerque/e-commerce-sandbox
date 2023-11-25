import React from 'react';
export default function Index() {
	return (
		<main>
			<article className='grid grid-cols-4 grid-rows-3 gap-6'>
				<section className='bg-red-800 col-span-3 row-span-3'>
					<div className='h-96'>Teste</div>
				</section>

				<section className='bg-red-700 '>
					Tela 2
				</section>

				<section className='bg-red-600 '>
					Tela 3
				</section>

				<section className='bg-red-500 '>
					Tela 4
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
						<div>Image</div>
						<div>ProductInfos</div>
					</div>
				</section>
			</article>
		</main>
		
	);
}
