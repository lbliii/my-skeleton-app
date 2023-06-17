<script lang="ts">
    // Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// console.log("modal store: ", $modalStore[0])

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';

	// Form Data
	const formData = {
		alias: $modalStore[0]?.value?.player.alias ?? "Test Player",
		likes: $modalStore[0]?.value?.player.likes ?? "Test Likes",
		dislikes: $modalStore[0]?.value?.player.dislikes ?? "Test Dislikes",
		bio: $modalStore[0]?.value?.player.bio ?? "Test Bio" ,
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
		<label class="label">
			<span>Alias</span>
			<input class="input" type="text" bind:value={formData.alias} placeholder="Your Alias Here" />
		</label>
		<label class="label">
			<span>Likes</span>
			<textarea class="input textarea" rows="2"  bind:value={formData.likes} placeholder="Your List of Genre/Plot Likes Here" />
		</label>
		<label class="label">
			<span>Dislikes</span>
			<textarea class="input textarea" rows="2" bind:value={formData.dislikes} placeholder="Your List of Genre/Plot Dislikes Here" />
		</label>
		<label class="label">
			<span>Bio</span>
			<textarea class="input textarea" rows="5" bind:value={formData.bio} placeholder="Write a first, second, or third person post here as the character you selected to play." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Update Profile</button>
    </footer>
</div>

