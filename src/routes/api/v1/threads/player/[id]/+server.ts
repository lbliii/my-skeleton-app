import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { supabase, getSession }, params }) => {
	const session = getSession();
	const player_id = params.id;

	if (!session) {
		// The user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	// Query the threads table and get a list of all threads with the matching player_id
	const { data: threads, error: noThreads } = await supabase
		.from('threads')
		.select('*')
		.eq('player_id', player_id)
		.limit(1000); // Add a limit to the number of threads retrieved

	if (noThreads) {
		throw error(404, { message: 'No threads found' });
	}

	if (threads.length < 1) {
		return new Response(JSON.stringify([]));
	}

	if (error) {
		throw error;
	}

	return new Response(JSON.stringify(threads));
};
