<script lang="ts">
  import ForumDetailsCard from "$lib/components/forum/ForumDetailsCard.svelte";
  import {modalThreadCRUD} from '$lib/utils'
  import type {Forum, Forums, Player} from '$lib/types'
  import ForumTileList from '$lib/components/forum/ForumTileList.svelte'


  export let data: {forum: Forum, subForums: Forums, player: Player}
  let forum = data?.forum;
  let subForums = data?.subForums;
  let player = data?.player;

  console.log(subForums)
  

</script>

<ForumDetailsCard forum={forum} />
<div class="flex flex-row-reverse">
  <button class="btn variant-ghost m-2" on:click={() => modalThreadCRUD({forum:forum})}>Create Thread</button>
</div>

{#if subForums}
<ForumTileList forums={subForums} {player}/>
{/if}
