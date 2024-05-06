import { posts } from '../data.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const post = posts.find(p => p.slug === params.slug);

	if (!post){
		throw error(404);
	}

	return { post };
}