<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// console.log("modal store: ", $modalStore[0])

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';
	import { playerCharactersStore } from '$lib/stores';

	// Form Data
	const formData = {
		player: $modalStore[0]?.value?.player ?? "Test Player",
		characterId: $modalStore[0]?.value?.characters[0] ?? { id: 1, firstName: 'Test', lastName: 'Character' },
		forums: $modalStore[0]?.value?.forums ?? [],
		forumId: $modalStore[0]?.value?.forum?.id,
		title: '',
		description: '',
		post: ''
	};

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<div class="{cBase}">
	<header class={cHeader}>{$modalStore[0]?.title ?? '(title missing)'}</header>
	<article>{$modalStore[0]?.body ?? '(body missing)'}</article>
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<form class="modal-form {cForm}">
		<div class="flex flex-row space-x-4">
			<label class="label flex-grow">
				<span>Character</span>
				<select class="select" bind:value={formData.characterId} required>
					{#if $playerCharactersStore.length === 0}
						<option value="0">No Characters</option>
					{:else if $playerCharactersStore.length > 0}
						{#each $playerCharactersStore as character}
							<option value={character.id}>{character.first_name} {character.last_name}</option>
						{/each}
					{/if}
				</select>
			</label>
			{#if formData.forums.length > 1}
				<label class="label flex-grow">
					<span>Forum</span>
					<select class="select" bind:value={formData.forumId} required>
						{#each formData.forums as forum}
							<option value={forum.id}>{forum.title}</option>
						{/each}
					</select>
				</label>
			{/if} 
		</div>
		
		<label class="label">
			<span>Thread Title</span>
			<input class="input" type="text" bind:value={formData.title} placeholder="Your Title Here" />
		</label>
		<label class="label">
			<span>Log Line</span>
			<input class="input" type="text" bind:value={formData.description} placeholder="Once upon a time..." />
		</label>
		<label class="label">
			<span>Post</span>
			<textarea class="input textarea" rows="10" bind:value={formData.post} placeholder="Write a first, second, or third person post here as the character you selected to play." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
    </footer>
</div>