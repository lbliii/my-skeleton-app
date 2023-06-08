import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	const serverSettings = env.APP_ENV === "local"
        ? { server: { host: "localhost" } } 
        : {};

	return {
		plugins: [sveltekit()],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		},
		...serverSettings, 
	}
});
