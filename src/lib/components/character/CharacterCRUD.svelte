<script lang="ts">
    // Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// console.log("modal store: ", $modalStore[0])

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';

	// Form Data
	const formData = {
		avatar: $modalStore[0]?.value?.character?.avatar ?? "https://cdn.midjourney.com/eaa42a60-2bae-4661-8b16-a88ea9ef45c1/grid_0.png",
		first_name: $modalStore[0]?.value?.character?.firstName ?? "First Name",
		last_name: $modalStore[0]?.value?.character?.lastName ?? "Last Name",
		age: $modalStore[0]?.value?.character?.age ?? 23,	
		gender: $modalStore[0]?.value?.character?.gender ?? "A Donut",
		relationship_status: $modalStore[0]?.value?.character?.relationshipStatus ?? "single",
		species: $modalStore[0]?.value?.character?.species ?? "Unicorn",
		soul:  $modalStore[0]?.value?.character?.soul ?? "Undead",
		bio: $modalStore[0]?.value?.character?.bio ?? "A misunderstood orphan with big dreams." ,
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
				<span>First</span>
				<input class="input" type="text" bind:value={formData.first_name} placeholder="Your Alias Here" />
			</label>
			<label class="label flex-grow">
				<span>Last</span>
				<input class="input" type="text" bind:value={formData.last_name} placeholder="Your Alias Here" />
			</label>
		</div>
		<label class="label">
			<span>Age</span>
			<input class="input flex-grow" type="number" bind:value={formData.age} placeholder="Your Alias Here" />
		</label>
		<label class="label">
			<span>Bio</span>
			<textarea class="input textarea" rows="5" bind:value={formData.bio} placeholder="Write a first, second, or third person post here as the character you selected to play." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>{$modalStore[0]?.value?.character? 'Update' : 'Create'} Character</button>
    </footer>
</div>
