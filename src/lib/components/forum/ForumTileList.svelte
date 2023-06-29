<script lang="ts">

	import ForumTile from './ForumTile.svelte';
	import type { Forum, Forums, Player } from '$lib/types';
	import {modalForumCRUD} from '$lib/utils'
	import {forumsStore} from '$lib/stores'

	export let forums: Forums
	export let forum: Forum
	export let player: Player

	$: forumsStore.set(forums)
</script>

{#if player?.admin === true}
	<div class="flex flex-row-reverse">
		<button class="chip variant-soft shadow-lg" on:click={() => modalForumCRUD({forums:forums})}>create forum</button>
	</div>
{/if}
<div class="container flex flex-wrap mx-auto px-4 sm:px-6 lg:px-8">
	{#each $forumsStore as forum}
		<ForumTile {forum} />
	{/each}
</div>
