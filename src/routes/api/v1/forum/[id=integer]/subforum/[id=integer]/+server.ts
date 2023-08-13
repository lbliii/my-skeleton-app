import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals: { supabase }, params }) => {
	const subForum_id = params.id;

	// Query the database for the player with the given ID
	const { data: subForum, error: noSubForum } = await supabase
		.from('forums')
		.select('*')
		.eq('id', subForum_id)
		.single();

	if (noSubForum) {
		throw noSubForum;
	}

	return new Response(JSON.stringify(subForum));
};
