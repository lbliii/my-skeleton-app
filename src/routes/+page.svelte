<script lang="ts">
	import ActiveThreadTracker from '$lib/components/dashboard/ActiveThreadTracker.svelte';
	import Bookmarks from '$lib/components/dashboard/Bookmarks.svelte';
	import Onboarding from '$lib/components/dashboard/Onboarding.svelte';
	import ParticipatingForums from '$lib/components/dashboard/ParticipatingForums.svelte';

	import type { PageData } from "./$types";

	export let data: PageData
</script>

{#if data.session}
	<p>Welcome, {data.session.user.email}</p>
	<form action="/logout" method="POST">
		<button type="submit" class="btn variant-ghost m-2">Logout</button>
	</form>
{:else}
	<p>Not loggedIn</p>
{/if}
<Onboarding/>
<ParticipatingForums/>
<ActiveThreadTracker/>
<Bookmarks/>