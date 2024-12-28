export interface typeListProducts {
	productId: number,
	name: string;
	price: number;
	color: string[] | ['#ffff', '#f1f1f1'];
	size?:string;
	productCategories: string[]
	imagesPath: {
		featuredImagePath: string;
		secondaryImagesPath?: string;
	};
	productState: {
		sale: boolean;
		newProduct: boolean;
		topProduct: boolean;
	};
	stars: number;
}