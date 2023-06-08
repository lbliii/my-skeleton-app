import type { Player } from '$lib/types';
import {ApiVersion} from '$lib/enums';


export async function load(event) {
	const session = await event.locals.getSession()
    const res = await event.fetch(`/api/${ApiVersion}/player/${event.params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-supabase-auth': session?.access_token || '',
			}
		});

    return {
        player: await res.json() as Player
    };
}