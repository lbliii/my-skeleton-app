<script lang="ts">
  import type { Player, Threads, SBSession, Characters } from '$lib/types'
  import PlayerCardDetails from '$lib/components/player/PlayerCardDetails.svelte'
	import PlayerThreadRowList from '$lib/components/player/PlayerThreadRowList.svelte';
  import PlayerCharacterRowList from '$lib/components/player/PlayerCharacterRowList.svelte';
  import {modalCharacterCRUD, modalPlayerCRUD, modalThreadCRUD} from '$lib/utils'

  export let data: { player: Player, session:SBSession, threads: Threads, characters: Characters };

  let player: Player = data?.player
  let threads: Threads = data?.threads
  let characters: Characters = data?.characters
  let sbSession = data?.session


</script>

<div class="space-y-4">
  {#if player.player_id == sbSession.user.id}
    <div class="flex flex-row-reverse">
        <button class="chip variant-soft" on:click={() => modalPlayerCRUD(player)}>edit</button>
    </div>
  {/if}
  <PlayerCardDetails {player} />
  {#if player.player_id == sbSession.user.id}
    <div class="flex flex-row-reverse">
        <button class="chip variant-soft" on:click={() => modalThreadCRUD()}>create thread</button>
    </div>
  {/if}
  <PlayerThreadRowList {sbSession} {player} {threads} />
  {#if player.player_id == sbSession.user.id}
    <div class="flex flex-row-reverse">
        <button class="chip variant-soft" on:click={() => modalCharacterCRUD()}>create character</button>
    </div>
  {/if}
  <PlayerCharacterRowList {sbSession} {player} {characters} />
</div>

