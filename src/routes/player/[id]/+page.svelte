<script lang="ts">
  import type { Player, Threads, SBSession, Characters, Forums } from '$lib/types'
  import PlayerCardDetails from '$lib/components/player/PlayerCardDetails.svelte';
	import PlayerThreadRowList from '$lib/components/player/PlayerThreadRowList.svelte';
  import PlayerCharacterRowList from '$lib/components/player/PlayerCharacterRowList.svelte';

  import {playerCharactersStore, playerStore, forumsStore, playerThreadsStore, seshStore} from '$lib/stores'

  let player: Player | null = $playerStore
  let threads: Threads = $playerThreadsStore
  let characters: Characters = $playerCharactersStore
  let forums: Forums  = $forumsStore
  let sbSession:SBSession | null = $seshStore

   $:{
        player = { ...player, ...$playerStore };
        characters = $playerCharactersStore
        threads = $playerThreadsStore
    }

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

