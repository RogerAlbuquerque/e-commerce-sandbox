import React from 'react';
import ProductsImages from '../Components/ProductImage';
import ProductInfos from '../Components/ProductInfos';
import AdvancedInformation from '@/app/product/Components/AdvancedInformation';
import HeaderOfProducts from '@/app/product/Components/HeaderOfProducts';
import BottomCard from '@/app/product/Components/BottomCard';
import { productList} from '@/utils/hardListOfProducts';

export default function Product({ params }: { params: { productId: string } }) {
	const product = productList.find((product) =>product.productId == Number(params.productId))
	
	if(!product)
	{
		return null
	}

	return (
		<main className='flex justify-center border-b mb-12'>
			
			<article className='customContainer '>	
				<HeaderOfProducts />
				<article className='flex justify-between mb-24 '>
					<ProductsImages imagesPath={product?.imagesPath}/>
					<ProductInfos productDetails={product}/>
				</article>			
				<AdvancedInformation/>
				<BottomCard/>		
			</article>
		</main>
		
	);
}
