import { writable } from 'svelte/store';
import type {Player, Character, Characters, Forums, Forum} from '$lib/types'
import type {Writable} from 'svelte/store'

export const playerStore: Writable<Player | null> = writable({});

export const playerProfileStore: Writable<Player | null> = writable({});

export const playerCharactersStore: Writable<Characters> = writable([]);

export const characterProfileStore: Writable<Character | null> = writable({});

export const forumStore: Writable<Forum | null>  = writable({});

export const forumsStore: Writable<Forums | null> = writable([]);