<script lang="ts">
    import type { Player } from '$lib/types'

    export let player: Player = {
        id: '1',
        alias: 'Player 1',
        createdAt: '2021-08-01T00:00:00.000Z',
        characters: [],
        age: 31,
        avatar: 'https://blah.png',
        bio: '',
        dislikes: 'everyone',
        likes: 'you',
        time_zone: 'EST'

    }

</script>


<div class="card variant-ghost-surface space-y-4">
	<header class="card-header space-y-4">
        <h2 class="text-center">{player.alias}</h2>
        <div class="flex flex-row space-x-1 justify-center">
            <div class="badge variant-filled-primary ">{player.age}</div>
            <div class="badge variant-filled-secondary">{player.time_zone}</div>
        </div>
    </header>
	<section class="p-4">
        <div class="flex flex-row flex-wrap xl:space-x-4">
            <div class="flex-grow">
                <h3>likes</h3>
                <p class="card variant-soft p-4 my-4">
                    {#if player.likes}
                        {player.likes}
                    {:else}
                        No disliked generes or plots have been listed for this player.
                    {/if}
                </p>
            </div>
            <div class="flex-grow">
                <h3>dislikes</h3>
                <p class="card variant-soft p-4 my-4 flex-grow">
                    {#if player.dislikes}
                        {player.dislikes}
                    {:else}
                        No preferred generes or plots have been listed for this player.
                    {/if}
                </p>
            </div>
            
        </div>
        <div>
            <h3>bio</h3>
            <p class="card variant-soft p-4 my-4">
                {#if player.bio}
                {player.bio}
            {:else}
                <!-- write a fake roleplayer bio -->
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