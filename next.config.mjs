/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
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
