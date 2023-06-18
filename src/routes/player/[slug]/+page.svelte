<script lang="ts">
  import type { Player, Threads, SBSession, Characters, Forums } from '$lib/types'
  import PlayerCardDetails from '$lib/components/player/PlayerCardDetails.svelte'
	import PlayerThreadRowList from '$lib/components/player/PlayerThreadRowList.svelte';
  import PlayerCharacterRowList from '$lib/components/player/PlayerCharacterRowList.svelte';

  export let data: { player: Player, session:SBSession, threads: Threads, characters: Characters, forums: Forums };

  let player: Player = data?.player
  let threads: Threads = data?.threads
  let characters: Characters = data?.characters
  let forums: Forums = data?.forums
  let sbSession = data?.session


</script>

<div class="space-y-4">
  <PlayerCardDetails {sbSession} {player} />
  {#if characters?.length < 1 || characters == undefined}
  <!-- Hide component so they focus on creating a character first. -->
  {:else}
  <PlayerThreadRowList {sbSession} {player} {threads} {forums} />
  {/if}
  <PlayerCharacterRowList {sbSession} {player} {characters} />
</div>

