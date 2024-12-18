export interface typeListProducts {
	productId: number,
	name: string;
	price: number;
	color?: string;
	productCategories: string[]
	imagesPath: {
		featuredImagePath: string;
		secondaryImagesPath: string;
	};
	productState: {
		sale: boolean;
		newProduct: boolean;
		topProduct: boolean;
	};
	stars: number;
}