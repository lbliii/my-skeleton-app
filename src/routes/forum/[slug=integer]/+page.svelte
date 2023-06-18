<script lang="ts">
  import ForumDetailsCard from "$lib/components/forum/ForumDetailsCard.svelte";
  import {modalThreadCRUD} from '$lib/utils'
  export let data;
  let forum = data?.props?.forum;

  

</script>

<ForumDetailsCard forum={forum} />
<div class="flex flex-row-reverse">
  <button class="btn variant-ghost m-2" on:click={() => modalThreadCRUD({forum:forum})}>Create Thread</button>
</div>
