import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkBreaks from "remark-breaks";
import myRemarkPlugin from "$lib/utils/remark";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: [".md"],
			smartypants: false,
			remarkPlugins: [remarkBreaks, remarkDirective, remarkDirectiveRehype, myRemarkPlugin],
		}),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		appDir: "app",
		adapter: adapter({ strict: false }),
	},

	extensions: [".svelte", ".md"],
};

export default config;
