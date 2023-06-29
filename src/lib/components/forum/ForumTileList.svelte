<script lang="ts">

	import ForumTile from './ForumTile.svelte';
	import type { Forums, Forum, Player } from '$lib/types';
	import {modalForumCRUD} from '$lib/utils'

	export let forums: Forums 
	export let player: Player | null
	export let currentForum: Forum | null
</script>

{#if player?.admin === true}
	<div class="flex flex-row-reverse">
		<button class="chip variant-soft shadow-lg" on:click={() => modalForumCRUD({forums: forums, forum: currentForum})}>create forum</button>
	</div>
{/if}
<div class="container flex flex-wrap mx-auto px-4 sm:px-6 lg:px-8">
	{#each forums as forum}
		<ForumTile forum={forum} />
	{/each}
</div>
