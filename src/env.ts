import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		APP_URL: z.string().url(),
	},
	client: {
		NEXT_PUBLIC_API_BASE_URL: z.string().url(),
	},
	runtimeEnv: {
		APP_URL: process.env.DATABASE_URL,
		NEXT_PUBLIC_API_BASE_URL: process.env.OPEN_AI_API_KEY,
	},
});
