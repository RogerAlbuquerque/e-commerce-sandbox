import { typeListProducts } from "@/@types/listProducts";

export const productDeals:typeListProducts[] = [
	{
		productId: 1,
		name: 'test1',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/notebook/macbook.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/notebook/macbook2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 5
	},
	{
		productId: 2,
		name: 'test2',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/notebook/macbook.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/notebook/macbook2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 4
	},
]