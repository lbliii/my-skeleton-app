import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Character } from '$lib/types';

export const POST: RequestHandler = async ({ locals: { supabase, getSession }, request }) => {
	const session = await getSession()
	
	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	const characterProfile: Character = await request.json();

	// Add a new character to the database
	const { data, error: createCharacterError } = await supabase
		.from('characters')
		.insert({ player_id: session.user.id, ...characterProfile })
		.select()
		.single();

	if (createCharacterError) {
		throw createCharacterError;
	}
	return new Response(JSON.stringify(data));
};