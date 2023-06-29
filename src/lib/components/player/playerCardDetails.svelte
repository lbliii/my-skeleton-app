<script lang="ts">
    import type { Player, SBSession } from '$lib/types';
    import { modalPlayerCRUD } from '$lib/utils';

    export let player: Player | null;
    export let sbSession: SBSession | null;
</script>

<div class="card variant-ghost-surface space-y-4">
    <header class="card-header">
        <div class="flex flex-col space-y-4">
            <div class="flex flex-row justify-between items-center">
                <h2 class="text-center flex-grow ml-12">{player?.alias}</h2>
                {#if player && sbSession && player.player_id === sbSession.user?.id}
                    <button class="chip variant-soft shadow-lg" on:click={() => modalPlayerCRUD(player)}>edit</button>
                {/if}
            </div>
            <div class="flex flex-row space-x-1 justify-center">
                <div class="badge variant-filled-primary ">{player?.age}</div>
                <div class="badge variant-filled-secondary">{player?.time_zone}</div>
            </div>
        </div>
    </header>
    <section class="p-4">
        <div class="flex flex-row flex-wrap xl:space-x-4">
            <div class="flex-grow">
                <h3>likes</h3>
                <p class="card variant-soft p-4 my-4">
                    {#if player?.likes}
                        {player.likes}
                    {:else}
                        No disliked genres or plots have been listed for this player.
                    {/if}
                </p>
            </div>
            <div class="flex-grow">
                <h3>dislikes</h3>
                <p class="card variant-soft p-4 my-4 flex-grow">
                    {#if player?.dislikes}
                        {player.dislikes}
                    {:else}
                        No preferred genres or plots have been listed for this player.
                    {/if}
                </p>
            </div>
        </div>
        <div>
            <h3>bio</h3>
            <p class="card variant-soft p-4 my-4">
                {#if player?.bio}
                    {player.bio}
                {:else}
                    <!-- TBD -->
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae ultricies nisl nunc eget
                    eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel lacin
                {/if}
            </p>
        </div>
    </section>
    <!-- <footer class="card-footer">
        TBD
    </footer> -->
</div>
