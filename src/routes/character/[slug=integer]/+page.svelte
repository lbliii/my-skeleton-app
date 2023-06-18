<script lang="ts">
  import CharacterDetails from '$lib/components/character/CharacterDetails.svelte';
  import type {Character} from '$lib/types'

  export let data: {character:Character}
  let character:Character = data?.character 
</script>

<main class="m-2">
  <CharacterDetails {character} />
</main>