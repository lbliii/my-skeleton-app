import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { sb } }) => {


	// Query the characters table and get a list of all characters with the matching player_id
	const { data: forums, error: noForums } = await sb
		.from('forums')
		.select('*')
		.neq('is_parent', 'true')

	if (noForums) {
		throw error(404, { message: 'No forums found' });
	}

	if (!forums || forums.length === 0) {
		return new Response(JSON.stringify([]));
	}

	return new Response(JSON.stringify(forums));
};
