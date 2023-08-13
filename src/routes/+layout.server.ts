
// import type { LayoutServerLoad } from "./$types";
import type { Player, Threads, Forums, Characters } from '$lib/types';
import { ApiVersion, HostName } from '$lib/enums';

export async function load(event) {

	const session = await getServerSession(event);

	const fetchPlayer = await event.fetch(`/api/${ApiVersion}/player/${session?.user.id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			host: `${HostName}`
		}
	});

	const fetchCharacters = await event.fetch(
		`/api/${ApiVersion}/characters/player/${session?.user.id}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				host: `${HostName}`
			}
		}
	);

	const fetchThreads = await event.fetch(`/api/${ApiVersion}/threads/player/${session?.user.id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			host: `${HostName}`
		}
	});

	const fetchForums = await event.fetch(`/api/${ApiVersion}/forums`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			host: `${HostName}`
		}
	});

	return {
		session: session,
		player: (await fetchPlayer.json()) as Player,
		characters: (await fetchCharacters.json()) as Characters,
		threads: (await fetchThreads.json()) as Threads,
		forums: (await fetchForums.json()) as Forums
	};
}
