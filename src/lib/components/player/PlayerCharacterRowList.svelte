<script lang="ts">
    import type { Player, Characters, SBSession } from '$lib/types'
    export let characters: Characters = []
    export let player: Player 
    export let sbSession: SBSession
</script>

<div class="card variant-ghost-surface">
    <div class="flex flex-col space-y-4 p-4">
        <h3>Characters</h3>
        {#if characters.length < 1}
            <div class="card card-hover variant-ghost p-2">
                {#if player.player_id == sbSession.user.id} 
                    Looks like you haven't created any characters yet!
                {:else}
                    <strong>{player.alias}</strong> hasn't created any characters yet.
                {/if}
            </div>
        {:else}
            {#each characters as character}
                <div class="card card-hover variant-ghost p-2">
                    {character.firstName}
                    {character.lastName}
                </div>
            {/each}
        {/if}
    </div>
</div>