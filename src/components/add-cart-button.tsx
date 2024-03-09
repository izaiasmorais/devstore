"use client";

import { useCart } from "@/contexts/cart-context";

interface AddToCardButtonProps {
	productId: number;
}

export function AddToCardButton({ productId }: AddToCardButtonProps) {
	const { addToCart } = useCart();

	function handleAddProductToCart() {
		addToCart(productId);
	}

	return (
		<button
			onClick={handleAddProductToCart}
			className="mt-8 flex h-12 w-full items-center justify-center rounded-full bg-emerald-600 hover:opacity-80 transiction-all duration-200  font-semibold text-white"
		>
			Adicionar ao carrinho
		</button>
	);
}
