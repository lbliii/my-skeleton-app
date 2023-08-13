import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const GET: RequestHandler = async ({ locals: { supabase, getSession }, params }) => {
	const character_id = params.id;

	const session = getSession()

	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	// Query the database for the player with the given ID
	const { data: character, error: noCharacter } = await supabase
		.from('characters')
		.select('*')
		.eq('id', character_id)
		.single();

	if (noCharacter) {
		throw error(404, { message: 'Character not found' });
	}

	return new Response(JSON.stringify(character));
};

export const PUT: RequestHandler = async ({ locals: { supabase, session }, params, request }) => {
	const character_id = params.id;

	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	const characterProfile = await request.json();

	// Query the database for the player with the given ID
	const { data: character, error: noCharacter } = await supabase
		.from('characters')
		.update({ ...characterProfile })
		.eq('id', character_id)
		.select()
		.single();

	if (noCharacter) {
		throw noCharacter;
	}

	return new Response(JSON.stringify(character));
};


export const DELETE: RequestHandler = async ({ locals: { supabase, session }, params }) => {
	const character_id = params.id;

	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	// Query the database for the player with the given ID
	const { data: character, error: noCharacter } = await supabase
		.from('characters')
		.delete()
		.eq('id', character_id)
		.select()
		.single();

	if (noCharacter) {
		throw noCharacter;
	}

	return new Response(JSON.stringify(character));
};