<script lang="ts">
  import type { Player } from '$lib/types'
  export let data: { player?: Player };
  console.log("player page ", data)

  let player: Player | undefined = data?.player
  // console.log(player)

</script>

<h1>{player?.alias}</h1>

