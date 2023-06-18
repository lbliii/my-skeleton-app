import { createClient } from '@supabase/auth-helpers-sveltekit';
// import type { Character, Player, Post, Thread } from '$lib/types';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

// Create a Supabase Client to use across the app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
