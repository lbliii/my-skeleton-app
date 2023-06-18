<script lang="ts">
	import type { Character } from '$lib/types';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let character: Character 
</script>

<div class="card variant-ghost overflow-hidden">
	<div class="flex flex-row justify-center p-6">
			<Avatar src={character?.avatar} width="w-60" />
		</div>
	<div class="flex flex-row justify-center">
		<div class="-mt-12 z-10">
			<h1 class="font-semibold text-center">
				{character?.first_name}
				{character?.last_name}
			</h1>
			<dl class="flex flex-row py-5 justify-center">
				<dt class="sr-only">Character Age</dt>
				<dd class="badge variant-ghost-error text-white">{character?.age}</dd>
				<dt class="sr-only">Soul Type</dt>
				<dd class="badge variant-ghost-primary text-white ml-4">{character?.soul}</dd>
				<dt class="sr-only">Species</dt>
				<span class="badge variant-ghost-secondary text-white ml-4">{character?.species}</span>
				<dt class="sr-only">Gender</dt>
				<dd class="badge variant-ghost-warning text-white ml-4">{character?.gender}</dd>
				<dt class="sr-only">Relationship Status</dt>
				<dd class="badge variant-ghost-tertiary text-white ml-4">
					{character?.relationship_status}
				</dd>
			</dl>
		</div>
	</div>

	<div class="px-12 pb-12 text-justify leading-7">
		{character?.bio}
	</div>
</div>
