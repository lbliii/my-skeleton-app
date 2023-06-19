import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals: { sb }, params }) => {
	const parent_id = params.id;

	console.log("Forum Parent ID ", parent_id)

	// Query the database for the player with the given ID
	const { data: subForums, error: noSubForums } = await sb
		.from('forums')
		.select('*')
		.eq('parent', parent_id)

	if (noSubForums) {
		throw noSubForums;
	}

	console.log('SUBFORUMS ', subForums);

	return new Response(JSON.stringify(subForums));
};
