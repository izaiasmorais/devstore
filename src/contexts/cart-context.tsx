"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
	productId: number;
	quantity: number;
}

interface CartContextType {
	items: CartItem[];
	addToCart: (productId: number) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	function addToCart(productId: number) {
		setCartItems((prev) => {
			const productIndex = prev.findIndex(
				(item) => item.productId === productId
			);

			if (productIndex >= 0) {
				const updatedItems = [...prev];
				updatedItems[productIndex].quantity++;
				return updatedItems;
			}

			return [...prev, { productId, quantity: 1 }];
		});
	}

	return (
		<CartContext.Provider value={{ items: cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}

export const useCart = () => useContext(CartContext);
