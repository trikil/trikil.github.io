import { allPosts } from "$lib/utils/blog";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	for (const post of await allPosts()) {
		if (post.slug === params.slug) {
			return post;
		}
	}
	error(404, "Not found");
}

export async function entries() {
	return (await allPosts()).map((post) => {
		return { slug: post.slug };
	});
}
