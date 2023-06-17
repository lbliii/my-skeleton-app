<script lang="ts">
    import type { Player, Threads, SBSession } from '$lib/types'
    export let threads: Threads
    export let player: Player 
    export let sbSession: SBSession
</script>

<div class="card variant-ghost-surface">
    <div class="flex flex-col space-y-4 p-4">
        <h3>threads</h3>
        {#if threads.length < 1}
            <div class="card card-hover variant-ghost p-2">
                {#if player.player_id == sbSession.user.id} 
                    Looks like you haven't joined or started any threads yet!
                {:else}
                    <strong>{player.alias}</strong> hasn't joined any threads yet.
                {/if}
            </div>
        {:else}
            {#each threads as thread}
                <div class="card card-hover variant-ghost p-2">
                    {thread.title}
                </div>
            {/each}
        {/if}
    </div>
</div>