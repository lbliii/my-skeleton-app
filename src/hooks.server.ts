import "$lib/supabase";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import type { Handle } from "@sveltejs/kit";

// To initialize the Supabse Client on server whenever our app run or hit the server
export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);

	// Get the access of supabaseClient and session on every single server Load function and Actions
	event.locals.sb = supabaseClient;
	event.locals.session = session;

	return resolve(event);
}
