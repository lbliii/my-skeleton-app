// import { createClient } from '@supabase/auth-helpers-sveltekit';

// export const load = async ({ fetch, data, depends }) => {
// 	depends('supabase:auth');

// 	const supabase = createClient({
// 		supabaseUrl: import.meta.env.VITE_PUBLIC_SUPABASE_URL,
// 		supabaseKey: import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
// 	});

// 	const {
// 		data: { session }
// 	} = await supabase.auth.getSession();


// 	return { supabase, session };
// };
