import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Forum } from '$lib/types';

export const POST: RequestHandler = async ({ locals: { supabase, getSession }, request }) => {
	const session = getSession()
	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	const forum: Forum = await request.json();

	// Add a new character to the database
	const { data: newForum, error: createForumError } = await supabase
		.from('forums')
		.insert({ ...forum })
		.select()
		.single();

	if (createForumError) {
		throw createForumError;
	}
	return new Response(JSON.stringify(newForum));
};
