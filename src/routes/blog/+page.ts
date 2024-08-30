import { allPosts } from "$lib/utils/blog";

export async function load() {
	return { posts: await allPosts() };
}
