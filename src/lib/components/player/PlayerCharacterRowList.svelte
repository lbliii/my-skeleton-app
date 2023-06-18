<script lang="ts">
    import type { Player, Characters, SBSession } from '$lib/types'
    export let characters: Characters = []
    export let player: Player 
    export let sbSession: SBSession
    import {modalCharacterCRUD} from '$lib/utils'

    console.log("chars ", characters)
</script>

<div class="card variant-ghost-surface">
    <div class="flex flex-col space-y-4 p-4">
        <div class="flex flex-row justify-between">
            <h3>characters</h3>
            {#if player.player_id == sbSession.user.id}
                <div class="flex flex-row-reverse">
                    <button class="chip variant-soft shadow-lg " on:click={() => modalCharacterCRUD()}>create character</button>
                </div>
            {/if}

        </div>
        
        {#if characters.length < 1}
            <div class="card variant-soft p-4 my-4">
                {#if player.player_id == sbSession.user.id} 
                    Looks like you haven't created any characters yet! Create your first character to unlock threads.
                {:else}
                    <strong>{player.alias}</strong> hasn't created any characters yet.
                {/if}
            </div>
        {:else}
            {#each characters as {first_name}}
                <div class="card card-hover variant-ghost p-4 my-4">
                    {first_name}
                </div>
            {/each}
        {/if}
    </div>
</div>

