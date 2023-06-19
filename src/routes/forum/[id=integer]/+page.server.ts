import { ApiVersion, HostName } from '$lib/enums';

export async function load(event) {
    const fetchForum = await event.fetch(`/api/${ApiVersion}/forum/${event.params.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'host': `${HostName}`
			}
		});
    const fetchSubForums = await event.fetch(`/api/${ApiVersion}/forums/${event.params.id}`, {
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
		forum: await fetchForum.json(),
        subForums: await fetchSubForums.json(),
        player: await fetchPlayer.json()
	};
}