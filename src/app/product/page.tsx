import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
export default function Product() {
	return (
		<main className='flex justify-center'>
			<article className='customContainer'>
				<section className='flex justify-between'>
					<ul className='flex gap-2 items-center text-stone-500'>
						<li><a href="#">Home</a></li>
						<MdArrowForwardIos className='text-xs'/>
						<li><a href="#">Product</a></li>
						<MdArrowForwardIos className='text-xs'/>
						<li><a href="#" className='text-black'>Default</a></li>
					</ul>

					<ul className='flex gap-4'>
						<li>
							<a href="#" className='flex items-center gap-1 text-stone-500'>
								<MdArrowForwardIos className='text-lg rotate-180'/> Prev
							</a>
						</li>
						<li>
							<a href="#" className='flex items-center gap-1 text-stone-500'>
							Next <MdArrowForwardIos className='text-lg'/>
							</a>
						</li>
					</ul>
				</section>

				
				
				<article className='flex justify-between border border-red-600'>
					<div className='flex flex-1 gap-4 border border-green-600'>
						<div>carrosel fotos</div>
						<div>foto maior</div>
					</div>
					
					<div className='flex flex-1 gap-4 border border-green-600'>
						INFORMAÇÕES DO PRODUTO
					</div>
				</article>



				<article>					
					<ul className='flex justify-center gap-4 border'>
						<li><a href='#'>Description</a></li>
						<li><a href='#'>Additional Information</a></li>
						<li><a href='#'>Shipping & Returns</a></li>
						<li><a href='#'>Reviews</a></li>
					</ul>
					<div className='border p-4'>
						INFORMAÇÕES DETALHADAS DO PRODUTO
					</div>
				</article>


				<article>
					<div className='text-center'>You May Also Like</div>
					<div>CARROSEL DE PRODUTOS RELACIONADOS</div>
				</article>
			</article>

		</main>
		
	);
}
