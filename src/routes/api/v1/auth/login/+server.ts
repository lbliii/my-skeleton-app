import { fail, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals: { supabase, getSession }, request }) => {
	try {
		const { email } = await request.json();

		const session = getSession();
		if (!session) {
			throw fail(401, { message: 'Unauthorized' });
		}

		let { data, error } = await supabase.auth.signInWithOtp(email);

		return new Response(JSON.stringify(data));
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};