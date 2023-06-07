<script lang="ts">
	import { popup, Avatar, ListBox, ListBoxItem, LightSwitch } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { ApiVersion } from '$lib/enums'

	export let session: any;

	$: session 

	let comboboxValue: string;

	let popupCombobox: PopupSettings = {
		event: 'click',
		target: 'combobox',
		placement: 'left',
		// Close the popup when the item is clicked
		closeQuery: '.listbox-item'
	};

	async function handleLogout() {
		try {
			fetch(`/api/${ApiVersion}/auth/logout`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})

		} catch (error) {
			
		}
	
	}

</script>

<div class="" use:popup={popupCombobox}>
	<Avatar width="w-10" initials="lb"/>
</div>

<div class="card shadow-xl py-2" data-popup="combobox">
	<!-- Listbox -->
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={comboboxValue} name="medium" value="books">
			<a href="/player/{session?.user?.id}">Profile</a>
		</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="movies">
			<LightSwitch />
		</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="television">
			{#if session?.user?.id}
				<a href="/" on:click|preventDefault={handleLogout}>
					Logout
				</a>
			{:else}
				<a href="/login">Login</a>
			{/if}
		</ListBoxItem>
	</ListBox>
	<!-- Arrow -->
	<div class="arrow bg-surface-100-800-token" />
</div>
