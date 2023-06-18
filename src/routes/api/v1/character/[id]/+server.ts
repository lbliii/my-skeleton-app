import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const GET: RequestHandler = async ({ locals: { sb, session }, params }) => {
	const character_id = params.id;

	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	// Query the database for the player with the given ID
	const { data: character, error: noCharacter } = await sb
		.from('characters')
		.select('*')
		.eq('id', character_id)
		.single();

	if (noCharacter) {
		throw error(404, { message: 'Character not found' });
	}

	return new Response(JSON.stringify(character));
};

export const PUT: RequestHandler = async ({ locals: { sb, session }, params, request }) => {
	const character_id = params.id;

	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	const characterProfile = await request.json();

	console.log("Character ID ", character_id)
	console.log("Character Profile", characterProfile)

	// Query the database for the player with the given ID
	const { data: character, error: noCharacter } = await sb
		.from('characters')
		.update({ ...characterProfile })
		.eq('id', character_id)
		.select()
		.single();

	if (noCharacter) {
		throw noCharacter
	}

	return new Response(JSON.stringify(character));
};