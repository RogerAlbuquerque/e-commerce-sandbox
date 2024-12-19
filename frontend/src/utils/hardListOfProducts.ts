import { typeListProducts } from "@/@types/listProducts";
import { computeFromManifest } from "next/dist/build/utils";

export const productList: typeListProducts[] = [
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
	{
		productId: 3,
		name: 'test3',
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
		productId: 4,
		name: 'test4',
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
		stars: 1
	},
	{
		productId: 5,
		name: 'test5',
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
		stars: 2
	},
	{
		productId: 6,
		name: 'test6',
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
		productId: 7,
		name: 'test7',
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
		productId: 8,
		name: 'test8',
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
		stars: 3
	},
	{
		productId: 9,
		name: 'test9',
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
		stars: 3
	},
	{
		productId: 10,
		name: 'test10',
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
		stars: 3
	},

]



export const productList2: typeListProducts[] = [
	{
		productId: 1,
		name: 'test1',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
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
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 4
	},
	{
		productId: 3,
		name: 'test3',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 5
	},
	{
		productId: 4,
		name: 'test4',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 1
	},
	{
		productId: 5,
		name: 'test5',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 2
	},
	{
		productId: 6,
		name: 'test6',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 5
	},
	{
		productId: 7,
		name: 'test7',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 5
	},
	{
		productId: 8,
		name: 'test8',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 3
	},
	{
		productId: 9,
		name: 'test9',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 3
	},
	{
		productId: 10,
		name: 'test10',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 3
	},

]




export const productList3: typeListProducts[] = [
	{
		productId: 1,
		name: 'test1',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
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
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 4
	},
	{
		productId: 3,
		name: 'test3',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 5
	},
	{
		productId: 4,
		name: 'test4',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 1
	},
	{
		productId: 5,
		name: 'test5',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 2
	},
	{
		productId: 6,
		name: 'test6',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 5
	},
	{
		productId: 7,
		name: 'test7',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 5
	},
	{
		productId: 8,
		name: 'test8',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 3
	},
	{
		productId: 9,
		name: 'test9',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 3
	},
	{
		productId: 10,
		name: 'test10',
		price: 10.25,
		color: 'red',
		productCategories: ['Accessories', 'Smartwatches'],
		imagesPath: {
			featuredImagePath: '/Imgs/Main/productsImages/TV/TV-1.jpg',
			secondaryImagesPath: '/Imgs/Main/productsImages/TV/TV-2.jpg'
		},
		productState: {
			sale: true,
			newProduct: true,
			topProduct: true,
		},
		stars: 3
	},

]
