<script lang="ts">
    import ForumTileList from '$lib/components/forum/ForumTileList.svelte';
    import type { Forums, Player, SBSession } from '$lib/types';
    import {forumsStore} from '$lib/stores'

    export let data: { player: Player, session:SBSession, forums: Forums };

    let player: Player = data?.player
    let forums: Forums = data?.forums

    $: forumsStore.set(forums)

</script>

<ForumTileList {forums} {player}/>


