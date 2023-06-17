
import {generateAlias} from '$lib/utils';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { sb, session }, params }) => {
	const player_id = params.id;
	
	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	// Query the database for the player with the given ID
	const { data: player, error: noPlayer } = await sb
		.from('players')
		.select('*')
		.eq('player_id', player_id)
		.single();

	if (noPlayer) {
		// If no player with this ID exists, generate a new alias and insert it into the database
		const alias = generateAlias();

		const { data: newPlayer, error: newPlayerError } = await sb
			.from('players')
			.insert({ player_id, alias })
			.select('*')
			.single();

		if (newPlayerError) {
			throw newPlayerError;
		}

		return new Response(JSON.stringify(newPlayer));
	}	

	// Return the existing player data
	return new Response(JSON.stringify(player));
};


export const PUT: RequestHandler = async ({ locals: { sb, session }, params, request }) => {
	const player_id = params.id;
	
	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

  	const body = await request.json();

	console.log("BODY!!! ", {...body})
	console.log(player_id)

	// Query the database for the player with the given ID
	const { data, error: editPlayerError } = await sb
		.from('players')
		.update({...body})
		.eq('player_id', player_id)
		.select()
		.single();

	if (editPlayerError) {
		throw editPlayerError
	}
		// Return the existing player data
		return new Response(JSON.stringify(data));
}


