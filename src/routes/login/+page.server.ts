// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ url, locals: { session } }) => {
	// if the user is already logged in return them to the account page
	if (session) {
		throw redirect(303, '/');
	}

	return { url: url.origin };
};
