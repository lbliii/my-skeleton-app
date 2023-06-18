<script lang="ts">
	import type { Character, SBSession } from '$lib/types';
	import { Avatar } from '@skeletonlabs/skeleton';

	import {characterProfileStore} from '$lib/stores'

	import { modalCharacterCRUD } from '$lib/utils';

	export let sbSession: SBSession;
	export let character: Character

	$: characterProfileStore.set(character)
</script>

<div class="card variant-ghost overflow-hidden space-y-4 p-4">
	{#if character.player_id == sbSession.user.id}
		<div class="flex flex-row-reverse">
			<button class="chip variant-soft shadow-lg" on:click={() => modalCharacterCRUD($characterProfileStore)}
				>edit character</button
			>
		</div>
	{/if}
	<div class="flex flex-row justify-center p-6">
			<Avatar src={$characterProfileStore?.avatar} width="w-60" />
		</div>
	<div class="flex flex-row justify-center">
		<div class="-mt-12 z-10">
			<h1 class="font-semibold text-center">
				{$characterProfileStore?.first_name}
				{$characterProfileStore?.last_name}
			</h1>
			<dl class="flex flex-row py-5 justify-center">
				<dt class="sr-only">Character Age</dt>
				<dd class="badge variant-ghost-error text-white">{$characterProfileStore?.age}</dd>
				<dt class="sr-only">Soul Type</dt>
				<dd class="badge variant-ghost-primary text-white ml-4">{$characterProfileStore?.soul}</dd>
				<dt class="sr-only">Species</dt>
				<span class="badge variant-ghost-secondary text-white ml-4">{$characterProfileStore?.species}</span>
				<dt class="sr-only">Gender</dt>
				<dd class="badge variant-ghost-warning text-white ml-4">{$characterProfileStore?.gender}</dd>
				<dt class="sr-only">Relationship Status</dt>
				<dd class="badge variant-ghost-tertiary text-white ml-4">
					{$characterProfileStore?.relationship_status}
				</dd>
			</dl>
		</div>
	</div>

	<div class="px-12 pb-12 text-justify leading-7">
		{$characterProfileStore?.bio}
	</div>
</div>
