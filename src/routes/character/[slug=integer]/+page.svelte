<script lang="ts">
  import CharacterDetails from '$lib/components/character/CharacterDetails.svelte';
  import type {Character, SBSession} from '$lib/types'

  export let data: {character:Character, session: SBSession}
  let character:Character = data?.character 
  let sbSession:SBSession = data?.session
</script>

<main class="m-2">
  <CharacterDetails {sbSession}{character} />
</main>