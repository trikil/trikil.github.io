import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const routes = import.meta.glob("/pages/**/*.md");
	console.log("PATHS");
	for (const path in routes) {
		console.log(path);
		if (path === `/pages/${params.slug}.md`) {
			const page = await routes[path]();
			console.log(page);
			return { content: page.default };
		}
	}
	error(404, "Not found");
}

export async function entries() {
	const routes = import.meta.glob("/pages/**/*.md");
	return Object.keys(routes).map((route) => {
		return { slug: route.slice("/pages/".length, -3) };
	});
}
