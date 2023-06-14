import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import type { LayoutServerLoad } from "./$types";

// Pass the session, to the rest of our App, to the client from the server side
export const load: LayoutServerLoad = async (event) => {
	return {
		session: await getServerSession(event),
	}
};
