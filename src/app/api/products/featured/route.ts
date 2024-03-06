import data from "../data.json";

export async function GET() {
	const featuredProducsts = data.products.filter((product) => product.featured);

	return Response.json(featuredProducsts);
}
