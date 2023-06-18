import { ApiVersion, HostName } from '$lib/enums';

export async function load(event) {
    const res = await event.fetch(`/api/${ApiVersion}/thread/${event.params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'host': `${HostName}`
			}
		});
    return {
        slug: event.params.slug,
        thread: await res.json()
    };
}