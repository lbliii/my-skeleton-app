import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { sb, session } }) => {
	const player_id = session?.user.id;

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
		throw noPlayer
	}

	// Return the existing player data
	return new Response(JSON.stringify(player));
};
