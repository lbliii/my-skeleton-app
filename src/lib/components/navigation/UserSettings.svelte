<script lang="ts">
	import type { SBSession } from '$lib/types';
	import { popup, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let session: SBSession;

	$: session 

	let popupCombobox: PopupSettings = {
		event: 'click',
		target: 'combobox',
		placement: 'left',
		// Close the popup when the item is clicked
		closeQuery: 'a[href]'
	};

</script>

<div class="" use:popup={popupCombobox}>
	<Avatar width="w-10" />
</div>

<div class="card shadow-xl p-2" data-popup="combobox">
	<nav class="list-nav">
		<ul class="space-y-4">
			{#if session?.user?.id}
				<li>
					<a href="/player/{session?.user?.id}">Profile</a>
				</li>
			{/if}
			{#if session?.user?.id}
				<li>
					<form action="/logout" method="POST">
						<button type="submit" class="">Logout</button>
					</form>
				</li>
			{:else}
				<li>
					<a href="/loginWithSupabase">Login</a>
				</li>
			{/if}
			<li class="flex flex-row justify-center pt-2">
				<LightSwitch />
			</li>
		</ul>
		
	</nav>
</div>
