import { ApiVersion, HostName } from '$lib/enums';

export async function load(event) {
    const res = await event.fetch(`/api/${ApiVersion}/character/${event.params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'host': `${HostName}`
			}
		});


	return {
            character: await res.json()
	};
}
