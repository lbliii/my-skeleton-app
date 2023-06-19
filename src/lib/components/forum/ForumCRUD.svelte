<script lang="ts">
    // Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';
	import { forumsStore } from '$lib/stores'
    import type {Forum} from '$lib/types'

	// Form Data
	const formData: Forum = {
		title: $modalStore[0]?.value?.forum?.title,
        description: $modalStore[0]?.value?.forum?.description,
        hero_image: $modalStore[0]?.value?.forum?.hero_image,
		parent: $modalStore[0]?.value?.forum?.parent,
		is_parent: $modalStore[0]?.value?.forum?.is_parent,
	};

	$: {
		formData.is_parent = formData.parent !== null;
	}

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
	<header class={cHeader}>{$modalStore[0]?.title ?? 'Closing..'}</header>
	<article>{$modalStore[0]?.body ?? '(body missing)'}</article>
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<form class="modal-form {cForm}">
		<label class="label">
			<span>Title</span>
			<input class="input" type="text" bind:value={formData.title} placeholder="Forum Title" />
		</label>
        <label class="label">
			<span>Description</span>
			<input class="input" type="text" bind:value={formData.description} placeholder="Short Forum Description" />
		</label>
		<label>
			<span>Cover Image</span>
			<input class="input" type="text" bind:value={formData.hero_image} placeholder="https://image.url.here" />
		</label>
		<label class="label flex flex-col flex-grow">
				<span>Parent</span>
				<select bind:value={formData.parent} class="select w-auto">
					<option value={null}></option>
					{#each $forumsStore as forum}
						<option value={forum.id}>{forum.title}</option>
					{/each}
				</select>
			</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>{$modalStore[0]?.value?.forum? 'Update' : 'Create'} Forum</button>
    </footer>
</div>

