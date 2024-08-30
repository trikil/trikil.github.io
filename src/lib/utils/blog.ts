import type { Component } from "svelte";

export type Post = {
	slug: string;
	date: Date | undefined;
	title: string | undefined;
	metadata: Metadata;
	component: Component;
};

type Metadata = { [key: string]: unknown };

type Resolved = {
	metadata: Metadata;
	default: Component;
};

export async function allPosts(): Promise<Post[]> {
	const posts = await Promise.all(
		Object.entries(import.meta.glob("/pages/blog/**/*.md")).map(async ([route, resolve]) => {
			const slug = route.slice("/pages/blog/".length, -3);
			const resolved = (await resolve()) as Resolved;
			const metadata = resolved.metadata;
			const date = typeof metadata.date === "string" ? new Date(metadata.date) : undefined;
			const title = typeof metadata.title === "string" ? metadata.title : undefined;

			return {
				slug,
				title,
				date,
				metadata: resolved.metadata,
				component: resolved.default,
			};
		}),
	);

	return posts.sort((a, b) => {
		if (a.date !== undefined && b.date !== undefined) {
			if (a.date < b.date) {
				return -1;
			} else if (a.date > b.date) {
				return 1;
			}
		}

		if (a.date !== undefined && b.date === undefined) {
			return -1;
		}

		if (a.date === undefined && b.date !== undefined) {
			return 1;
		}

		if (a.slug < b.slug) {
			return -1;
		} else if (a.slug > b.slug) {
			return 1;
		}

		return 0;
	});
}
