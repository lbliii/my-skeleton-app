import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { sb, session }, params }) => {
	const player_id = params.id;

	if (!session) {
		// The user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	// Query the characters table and get a list of all characters with the matching player_id
	const { data: characters, error: noCharacters } = await sb
		.from('characters')
		.select('*')
		.eq('player_id', player_id)
		.neq('archive', 'TRUE')
		

	if (noCharacters) {
		throw error(404, { message: 'No threads found' });
	}

	if (!characters || characters.length === 0) {
		return new Response(JSON.stringify([]));
	}

	return new Response(JSON.stringify(characters));
};
