<script lang="ts">
	// Do not re-order this CSS. theme > all > app
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	// Svelte Global Imports
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	// Skeleton Global Imports
	import {
		Drawer,
		drawerStore,
		AppShell,
		AppBar,
		Modal,
		storePopup
	} from '@skeletonlabs/skeleton';

	// Popup Global Settings
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Floating UI Global Imports
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	// CRUD Modal Global Components
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import ThreadCRUD from '$lib/components/thread/ThreadCRUD.svelte';
	import PlayerCRUD from '$lib/components/player/PlayerCRUD.svelte';
	import CharacterCRUD from '$lib/components/character/CharacterCRUD.svelte';
	import ForumCRUD from '$lib/components/forum/ForumCRUD.svelte';
	const modalComponentRegistry: Record<string, ModalComponent> = {
		// Custom Modal 1
		characterCRUD: {
			// Pass a reference to your custom component
			ref: CharacterCRUD,
			// Add the component properties as key/value pairs
			props: {},
			// Provide a template literal for the default component slot
			slot: ``
		},
		threadCRUD: {
			// Pass a reference to your custom component
			ref: ThreadCRUD,
			// Add the component properties as key/value pairs
			props: {},
			// Provide a template literal for the default component slot
			slot: ``
		},
		playerCRUD: {
			// Pass a reference to your custom component
			ref: PlayerCRUD,
			// Add the component properties as key/value pairs
			props: {},
			// Provide a template literal for the default component slot
			slot: ``
		},
		forumCRUD: {
			// Pass a reference to your custom component
			ref: ForumCRUD,
			// Add the component properties as key/value pairs
			props: {},
			// Provide a template literal for the default component slot
			slot: ``
		}
	};

	// AppShell Components & Settings
	$: classesSidebar = $page.url.pathname === '/' ? 'w-0 lg:w-64' : 'w-0 lg:w-64';
	/// Navbar
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	function drawerOpen(): void {
		drawerStore.open({});
	}

	/// APP Bar
	//// CRUD Settings
	import {modalThreadCRUD} from '$lib/utils'
	import {forumsStore, forumStore, playerCharactersStore, playerStore, playerThreadsStore, seshStore} from '$lib/stores'
	//// User Settings
	import UserSettings from '$lib/components/navigation/UserSettings.svelte';
	
	// Authentication Supabase
	import { invalidate } from "$app/navigation";

  	import type { Player, Threads, SBSession, Characters, Forums } from '$lib/types'
	export let data: { player: Player, session:SBSession, threads: Threads, characters: Characters, forums: Forums };
	let player: Player = data?.player
	let threads: Threads = data?.threads
	let characters: Characters = data?.characters
	let forums: Forums = data?.forums
	let sesh: SBSession = data?.session
	let supabase = data?.supabase

	onMount(() => {
		const {
		data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
		if (_session?.expires_at !== session?.expires_at) {
			invalidate('supabase:auth')
		}
		});

		return () => subscription.unsubscribe();
	});

	console.log(data)

	$: { 

		playerStore.set(player)
		playerCharactersStore.set(characters)
		playerThreadsStore.set(threads)
		forumsStore.set(forums)
		seshStore.set(sesh)
	}
	
</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<Modal components={modalComponentRegistry} />
<!-- App Shell -->

<AppShell slotSidebarLeft="bg-surface-500/5 {classesSidebar}">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="variant-ghost-surface">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">EMDASH</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button class="btn variant-ghost m-2" on:click={() => modalThreadCRUD({forum:$forumStore, characters: $playerCharactersStore})}>Create Thread</button>
				<UserSettings session={data?.session} />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<!-- Page Route Content -->
	<main class="mx-3 md:mx-12 my-6">
    	<slot />
	</main>
</AppShell>
