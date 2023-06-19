import { ApiVersion, HostName } from '$lib/enums';
import type {Forums, Player} from '$lib/types'

export async function load(event) {
    const fetchForums = await event.fetch(`/api/${ApiVersion}/forums`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				host: `${HostName}`
			}
		});

    const fetchPlayer = await event.fetch(`/api/${ApiVersion}/player`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				host: `${HostName}`
			}
		});
        
    return {
			forums: (await fetchForums.json()) as Forums,
			player: (await fetchPlayer.json()) as Player
		};
}