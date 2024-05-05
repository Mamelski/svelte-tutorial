import { posts } from './[slug]/data.js';

export function load() {
	return {
		summaries: posts.map(p =>
			({
				slug: p.slug,
				title: p.title
			}))
	};
}