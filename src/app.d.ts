import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit';
import type { Session } from '@supabase/supabase-js';

declare global {
  declare namespace App {
    interface Locals {
      sb: TypedSupabaseClient;
      session: Session;
    }
    interface PageData {
      session: import('@supabase/supabase-js').Session | null;
    }
    // interface Error {}
    // interface Platform {}
  }
}

export {};