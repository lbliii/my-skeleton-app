<script lang="ts">
	import { genderOptions, relationshipStatusOptions, soulOptions, speciesOptions } from '$lib/enums';

    // Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// console.log("modal store: ", $modalStore[0])

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';

	const character = $modalStore[0]?.value?.character

	// Form Data
	const formData = {
		id: character?.id,
		avatar: character?.avatar ?? "https://cdn.midjourney.com/eaa42a60-2bae-4661-8b16-a88ea9ef45c1/grid_0.png",
		first_name: character?.first_name, 
		last_name: character?.last_name,
		age: character?.age,	
		gender: character?.gender,
		relationship_status: character?.relationship_status,
		species: character?.species,
		soul: character?.soul,
		bio: character?.bio,
		archive: false
	};

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		// if required fields don't have inputs, log in console 
		// and return early to prevent submission
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	function onArchiveSubmit(): void {
		formData.archive = true
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
	<form class="modal-form {cForm}" on:submit|preventDefault={onFormSubmit}>
		<div class="flex flex-row space-x-4">
			<label class="label flex-grow">
				<span>First</span>
				<input class="input" type="text" bind:value={formData.first_name} placeholder="First Name" required />
			</label>
			<label class="label flex-grow">
				<span>Last</span>
				<input class="input" type="text" bind:value={formData.last_name} placeholder="Last Name" />
			</label>
		</div>
		<div class="flex flex-row space-x-4">
			<label class="label">
				<span>Age</span>
				<input class="input flex-grow" type="number" bind:value={formData.age} placeholder="1000" required/>
			</label>
			<label class="label flex flex-col flex-grow">
				<span>Soul</span>
				<select bind:value={formData.soul} class="select w-auto">
					{#each soulOptions as soul}
						{#if soul == "Mortal"}
							<option value={soul} selected>{soul}</option>
						{:else}
							<option value={soul}>{soul}</option>
						{/if}
					{/each}
				</select>
			</label>
			<label class="label flex flex-col flex-grow">
				<span>Species</span>
				<select bind:value={formData.species} class="select w-auto">
					{#each speciesOptions as species}
						{#if species == "Human"}
							<option value={species} selected>{species}</option>
						{:else}
							<option value={species}>{species}</option>
						{/if}
					{/each}
				</select>
			</label>
		</div>
		<div class="flex flex-row space-x-4">
			<label class="label flex flex-col flex-grow">
				<span>Gender</span>
				<select bind:value={formData.gender} class="select w-auto">
					{#each genderOptions as gender}
						{#if gender == "Cisgender"}
							<option value={gender} selected>{gender}</option>
						{:else}
							<option value={gender}>{gender}</option>
						{/if}
					{/each}
				</select>
			</label>
			<label class="label flex flex-col flex-grow">
				<span>Relationship Status</span>
				<select bind:value={formData.relationship_status} class="select w-auto">
					{#each relationshipStatusOptions as relationshipStatus}
						{#if relationshipStatus == "Single"}
							<option value={relationshipStatus} selected>{relationshipStatus}</option>
						{:else}
							<option value={relationshipStatus}>{relationshipStatus}</option>
						{/if}
					{/each}
				</select>
			</label>
		</div>
		<label class="label">
			<span>Bio</span>
			<textarea class="input textarea" rows="5" bind:value={formData.bio} placeholder="This can be an abstract representation, a slice of life, a script -- anything you want. Use this space to showcase the vibes & history of your character" required />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
		{#if character?.id}
			<button class="btn variant-filled-error {parent.buttonPositive}" on:click={onArchiveSubmit}> Archive</button>
		{/if}
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" type="submit">{$modalStore[0]?.value?.character? 'Update' : 'Create'} Character</button>
    </footer>
</div>

