import { fail, type RequestHandler } from '@sveltejs/kit';
import { goto } from '$app/navigation';

export const POST: RequestHandler = async ({ locals: { sb, session } }) => {
	try {

		if (!session) {
			throw fail(401, { message: 'Unauthorized' });
		}

		await sb.auth.signOut();

		goto('/');

	} catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};
