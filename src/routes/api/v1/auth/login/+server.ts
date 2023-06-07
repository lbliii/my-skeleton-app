import type { RequestHandler } from '@sveltejs/kit';
import {ApiVersion} from '$lib/enums'


export const POST: RequestHandler = async ({ locals: { supabase }, request }) => {
	try {
		const { email } = await request.json()

		let { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: `/api/${ApiVersion}/auth/callback`
			}
		});

		return new Response(JSON.stringify(data));
	}
	catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: {
				'content-type': 'application/json',
				'Set-Cookie': `supabaseToken=${supabaseAuthToken}; Max-Age=${expirationTime}; Path=/`
			}
		});
	}
};