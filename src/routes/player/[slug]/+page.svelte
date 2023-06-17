<script lang="ts">
  import type { Player, Threads, SBSession } from '$lib/types'

  import PlayerCardDetails from '$lib/components/player/playerCardDetails.svelte'
	import PlayerThreadRowList from '$lib/components/player/playerThreadRowList.svelte';

  
  export let data: { player: Player, session:SBSession, threads: Threads };
  console.log(data)

  let player: Player = data?.player
  let threads: Threads = data?.threads
  let sbSession = data?.session

</script>

<div class="space-y-4">
  <PlayerCardDetails {player} />
  <PlayerThreadRowList {sbSession} {player} {threads} />
</div>

