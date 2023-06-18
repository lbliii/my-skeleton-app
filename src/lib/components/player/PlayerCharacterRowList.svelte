<script lang="ts">
	import type { Player, Characters, SBSession } from '$lib/types';
	export let characters: Characters = [];
	export let player: Player;
	export let sbSession: SBSession;

	import { modalCharacterCRUD } from '$lib/utils';
	import {playerCharactersStore} from '$lib/stores'

	import { Avatar } from '@skeletonlabs/skeleton';

	$: playerCharactersStore.set(characters);
</script>

<div class="card variant-ghost-surface">
	<div class="flex flex-col space-y-4 p-4">
		<div class="flex flex-row justify-between">
			<h3>characters</h3>
			{#if player.player_id == sbSession.user.id}
				<div class="flex flex-row-reverse">
					<button class="chip variant-soft shadow-lg" on:click={() => modalCharacterCRUD()}
						>create character</button
					>
				</div>
			{/if}
		</div>

		{#if $playerCharactersStore.length < 1}
			<div class="card variant-soft p-4 my-4">
				{#if player.player_id == sbSession.user.id}
					Looks like you haven't created any characters yet! Create your first character to unlock
					threads.
				{:else}
					<strong>{player.alias}</strong> hasn't created any characters yet.
				{/if}
			</div>
		{:else}
			{#each $playerCharactersStore as { id, avatar, first_name, last_name, age, soul, species, gender, relationship_status }}
				<a href="/character/{id}" class="card card-hover variant-ghost p-4 my-4">
					<dl class="flex flex-row items-center space-x-4">
						<dt>
							<Avatar src={avatar} width="w-20" title="{first_name} {last_name}"/>
						</dt>
						<dd>
							<dl class="flex flex-row items-center space-x-4">
								<div class="badge variant-ghost-error space-x-0" title="Age">
									<dt class="sr-only">Age:</dt>
									<dd>{age}</dd>
								</div>
								<div class="badge variant-ghost-primary space-x-0" title="Soul">
									<dt class="sr-only m-0 p-0">Soul:</dt>
									<dd>{soul}</dd>
								</div>
								<div class="badge variant-ghost-secondary space-x-0" title="Species">
									<dt class="sr-only">Species:</dt>
									<dd>{species}</dd>
								</div>
                                <div class="badge variant-ghost-warning space-x-0" title="Gender">
									<dt class="sr-only">Gender:</dt>
									<dd>{gender}</dd>
								</div>
                                <div class="badge variant-ghost-tertiary space-x-0" title="Relationship Status">
									<dt class="sr-only">Relationship Status:</dt>
									<dd>{relationship_status}</dd>
								</div>
							</dl>
						</dd>
					</dl>
				</a>
			{/each}
		{/if}
	</div>
</div>
