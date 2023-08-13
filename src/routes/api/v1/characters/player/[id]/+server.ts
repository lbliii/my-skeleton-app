import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { supabase }, params }) => {
	const player_id = params.id;

	// Query the characters table and get a list of all characters with the matching player_id
	const { data: characters, error: noCharacters } = await supabase
		.from('characters')
		.select('*')
		.eq('player_id', player_id)
		.neq('archive', 'TRUE');

	if (noCharacters) {
		throw error(404, { message: 'No threads found' });
	}

	if (!characters || characters.length === 0) {
		return new Response(JSON.stringify([]));
	}

	return new Response(JSON.stringify(characters));
};
