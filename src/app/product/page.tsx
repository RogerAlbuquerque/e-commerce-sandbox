import React from 'react';
export default function Product() {
	return (
		<main className='flex justify-center'>
			<div className='customContainer'>
				<div className='flex justify-between'>
					<ul className='flex gap-8'>
						<li><a href="#">Home</a></li>
						<li><a href="#">Product</a></li>
						<li><a href="#">Default</a></li>
					</ul>

					<ul className='flex gap-4'>
						<li><a href="#">Prev</a></li>
						<li><a href="#">Next</a></li>
					</ul>
				</div>

				
				
				<div>
					<div>
						<div>carrosel fotos</div>
						<div>foto maior</div>
					</div>
					
					<div>
						INFORMAÇÕES DO PRODUTO
					</div>
				</div>



				<div>
					<div>INFORMAÇÕES AVANÇADAS</div>
					<div>INFORMAÇÕES DETALHADAS DO PRODUTO</div>
				</div>


				<div>
					<div>You May Also Like</div>
					<div>CARROSEL DE PRODUTOS RELACIONADOS</div>
				</div>
			</div>

		</main>
		
	);
}
