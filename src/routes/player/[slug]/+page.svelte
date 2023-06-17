<script lang="ts">
  import { ApiVersion } from '$lib/enums';
  import type { Player, Threads, SBSession } from '$lib/types'
  import PlayerCardDetails from '$lib/components/player/PlayerCardDetails.svelte'
	import PlayerThreadRowList from '$lib/components/player/PlayerThreadRowList.svelte';

  import { modalStore } from "@skeletonlabs/skeleton";
  import type { ModalSettings } from "@skeletonlabs/skeleton";

  export let data: { player: Player, session:SBSession, threads: Threads };

  let player: Player = data?.player
  let threads: Threads = data?.threads
  let sbSession = data?.session

  function modalCRUD(): void {
      const prompt: ModalSettings = {
          type: 'component',
          component: 'playerCRUD',
          title: `Edit Your Profile`,
          body: "Make any changes you'd like and then select Update Profile.",
          value: {
              player: player,
          },
			  response: (r: any) => {
				if (r) console.log('response:', r);
        // send a post request to the server to create a thread
        // then update the forum threads

        fetch(`/api/${ApiVersion}/player/${player.player_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(r),
        })
			}
      }
      modalStore.trigger(prompt);
  }

</script>

<div class="space-y-4">
  {#if player.player_id == sbSession.user.id}
    <div class="flex flex-row-reverse">
        <button class="chip variant-soft" on:click={modalCRUD}>edit</button>
    </div>
  {/if}
  <PlayerCardDetails {player} />
  <PlayerThreadRowList {sbSession} {player} {threads} />
</div>

