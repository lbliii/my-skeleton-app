import type { Player, Threads } from '$lib/types';
import {ApiVersion} from '$lib/enums';


export async function load(event) {
    const fetchPlayer = await event.fetch(`/api/${ApiVersion}/player/${event.params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

	const fetchThreads = await event.fetch(`/api/${ApiVersion}/player/${event.params.slug}/threads`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

    return {
			player: await fetchPlayer.json() as Player,
			threads: await fetchThreads.json() as Threads
		};
}

// await fetchThreads.json() as Threads