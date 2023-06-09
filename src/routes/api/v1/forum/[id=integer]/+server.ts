import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals: { sb }, params }) => {
	const forum_id = params.id;

	// Query the database for the player with the given ID
	const { data: forum, error: noForum } = await sb
		.from('forums')
		.select('*')
		.eq('id', forum_id)
		.single();

	if (noForum) {
		throw noForum;
	}

	return new Response(JSON.stringify(forum));
};

export const PUT: RequestHandler = async ({ locals: { sb, session }, params, request }) => {
	const forum_id = params.id;

	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	const forum = await request.json();

	// Query the database for the player with the given ID
	const { data: updateForum, error: noForum } = await sb
		.from('forums')
		.update({ ...forum })
		.eq('id', forum_id)
		.select()
		.single();

	if (noForum) {
		throw noForum;
	}

	return new Response(JSON.stringify(updateForum));
};

export const DELETE: RequestHandler = async ({ locals: { sb, session }, params }) => {
	const forum_id = params.id;

	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	// Query the database for the player with the given ID
	const { data: deletedForum, error: noForum } = await sb
		.from('forums')
		.delete()
		.eq('id', forum_id)
		.select()
		.single();

	if (noForum) {
		throw noForum;
	}

	return new Response(JSON.stringify(deletedForum));
};
