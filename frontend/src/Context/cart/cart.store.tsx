import { create } from "zustand";
import { persist } from "zustand/middleware";
import { typeListProducts } from "../../@types/listProducts";

type CartStore = {
	items: typeListProducts[];
	quantityItemsOnCart: () => string;
	addItem: (item: typeListProducts) => void;
	updateQuantity: (productId: string, newQuantity: number) => void;
	removeItemFromCart: (productId: string) => void;
}

//export const useCartStore = create<CartState>(persist(set) => ({
//   items: [],

//	addItem: (item:typeListProducts) => set((state) => ({
//			items: [...state.items, item]
//		})) 

//}));
//
export const useCartStore = create<CartStore>()(
	persist((set, get) => ({
		items: [],
		quantityItemsOnCart: (): string => {
			return get().items.reduce((total, item) => total + (item.quantity ?? 0),0).toString();
		},
		
		addItem: (item: typeListProducts) => set((state) => {
			const existingItem = state.items.find((cartItem) => cartItem.productId === item.productId);
			if (existingItem) {
				return {
					items: state.items.map((cartItem) => {
						if (cartItem.productId !== item.productId) return cartItem;
						return {
							...cartItem,
							quantity: (cartItem.quantity ?? 0) + (item.quantity ?? 0),
							price: parseFloat(
								((Number(cartItem.price) || 0) + (Number(item.price) || 0)).toFixed(2)
							)
						};
					})
				};
			}

			return { items: [...state.items, item] };
		}),

		updateQuantity: (productId, newQuantity) =>
			set((state) => ({
				items: state.items.map((item) => {
					if (item.productId !== productId) {
						return item;
					}

					if ((item.quantity == undefined || item.quantity <= 1) && newQuantity == -1) {
						return item;
					}


					return {
						...item,
						quantity: item.quantity! + (newQuantity)
					};
				})
			})),

		removeItemFromCart: (productId) =>
			set((state) => ({
				items: state.items.filter(
					(item) => item.productId !== productId
				),
			})),

	}),
		{
			name: "cart"
		}
	));