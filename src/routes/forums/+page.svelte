<script lang="ts">
    import ForumTileList from '$lib/components/forum/ForumTileList.svelte';
    import type { Forums, Player } from '$lib/types';
    import {forumsStore, playerStore} from '$lib/stores'


    let player: Player | null = $playerStore
    let forums: Forums = $forumsStore

    $:{
        player = { ...player, ...$playerStore };
        forums = $forumsStore
    }
    
</script>

<!-- todo: if landing on a top-level category, currentForum would not be null -->
<ForumTileList currentForum={null} {forums} {player}/>


