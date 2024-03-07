/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "github.com",
				port: "",
				pathname: "/izaiasmorais.png",
			},
		],
	},
};

export default nextConfig;
