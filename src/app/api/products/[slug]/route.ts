import { z } from "zod";
import data from "../data.json";

interface GetProductBySlugParams {
	params: {
		slug: string;
	};
}

export async function GET(_: Request, { params }: GetProductBySlugParams) {
	const slug = z.string().parse(params.slug);

	const product = data.products.find((product) => product.slug === slug);

	if (!product)
		Response.json({ message: "Product not found" }, { status: 404 });

	return Response.json(product);
}
