<script lang="ts">
    import type { Player, Threads, SBSession, Forums } from '$lib/types'
    export let threads: Threads | null 
    export let forums: Forums | null 
    export let player: Player | null 
    export let sbSession: SBSession | null
    import {modalThreadCRUD} from '$lib/utils'
</script>

<div class="card variant-ghost-surface">
    <div class="flex flex-col space-y-4 p-4">
        <div class="flex flex-row flex-wrap justify-between">
            <h3>threads</h3>
            {#if player?.player_id == sbSession?.user.id}
                <div class="flex flex-row-reverse">
                    <button class="chip variant-soft shadow-lg" on:click={() => modalThreadCRUD({forums:forums})}>create thread</button>
                </div>
            {/if}
        </div>
        {#if threads.length < 1 || threads == null }
            <div class="card card-hover variant-ghost p-2">
                {#if player?.player_id == sbSession?.user.id} 
                    Looks like you haven't joined or started any threads yet!
                {:else}
                    <strong>{player?.alias}</strong> hasn't joined any threads yet.
                {/if}
            </div>
        {:else}
            {#each threads as thread}
                <div class="card card-hover variant-ghost p-2">
                    {thread?.title}
                </div>
            {/each}
        {/if}
    </div>
</div>