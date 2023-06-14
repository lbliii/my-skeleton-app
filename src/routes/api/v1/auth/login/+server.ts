import { fail, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals: { sb, session }, request }) => {
	try {
		const { email } = await request.json()

		if (!session) {
			throw fail(401, { message: 'Unauthorized' });
		}

		let { data, error } = await sb.auth.signInWithOtp(email);

		return new Response(JSON.stringify(data));
	}
	catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};