import { writable } from 'svelte/store';
import type {Player, Character, Characters, Forums, Forum, Threads, Thread, SBSession} from '$lib/types'
import type {Writable} from 'svelte/store'

export const playerStore: Writable<Player | null> = writable({});

export const playerProfileStore: Writable<Player | null> = writable({});

export const playerCharactersStore: Writable<Characters> = writable([]);

export const playerThreadsStore: Writable<Threads> = writable([]);

export const characterProfileStore: Writable<Character | null> = writable({});

export const forumStore: Writable<Forum | null>  = writable({});

export const forumsStore: Writable<Forums> = writable([]);

export const threadStore = writable<Thread | null>(null);

export const threadsStore: Writable<Threads | null> = writable([]);

export const seshStore = writable<SBSession | null>(null);