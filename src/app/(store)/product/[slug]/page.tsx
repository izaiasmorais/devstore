import { AddToCardButton } from "@/components/add-cart-button";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";

async function getProduct(slug: string): Promise<Product> {
	const response = await api(`/products/${slug}`, {
		next: {
			revalidate: 60 * 60,
		},
	});

	const product = await response.json();

	return product;
}

interface ProductProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({
	params,
}: ProductProps): Promise<Metadata> {
	const product = await getProduct(params.slug);

	return {
		title: product.title,
	};
}

export async function generateStaticParams() {
	const response = await api("/products/featured");
	const products: Product[] = await response.json();

	return products.map((product) => {
		return {
			slug: product.slug,
		};
	});
}

export default async function Product({ params }: ProductProps) {
	const product = await getProduct(params.slug);

	return (
		<div className="relative grid max-[760px] grid-cols-3">
			<div className="col-span-2 overflow-hidden">
				<Image
					src={product.image}
					alt={product.title}
					quality={100}
					width={760}
					height={760}
				/>
			</div>

			<div className="flex flex-col justify-center px-12">
				<h1 className="leading-tight text-3xl font-bold">{product.title}</h1>

				<p className="mt-2 leading-relaxed text-zinc-400">
					{product.description}
				</p>

				<div className="mt-8 flex items-center gap-3">
					<span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
						{product.price.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
							minimumFractionDigits: 0,
							maximumFractionDigits: 0,
						})}
					</span>
					<span className="text-s text-zinc-400">
						Ou em 12x de{" "}
						{(product.price / 12).toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}{" "}
						sem juros
					</span>
				</div>

				<div className="mt-8 space-y-4">
					<span className="block font-semibold">Tamanhos</span>

					<div className="flex gap-2">
						<button
							className="flex h-9 w-14 items-center justify-center rounded-full border
						border-zinc-700 bg-zinc-800 text-sm font-semibold"
						>
							P
						</button>

						<button
							className="flex h-9 w-14 items-center justify-center rounded-full border
						border-zinc-700 bg-zinc-800 text-sm font-semibold"
						>
							M
						</button>

						<button
							className="flex h-9 w-14 items-center justify-center rounded-full border
						border-zinc-700 bg-zinc-800 text-sm font-semibold"
						>
							G
						</button>
					</div>

					<AddToCardButton productId={product.id} />
				</div>
			</div>
		</div>
	);
}
