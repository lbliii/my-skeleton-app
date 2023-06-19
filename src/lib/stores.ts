import { writable } from 'svelte/store';
import type {Player, Character, Characters, Forums, Forum} from '$lib/types'
import type {Writable} from 'svelte/store'
export const playerProfileStore: Writable<Player> = writable({
});

export const characterProfileStore: Writable<Character> = writable({
})

export const playerCharactersStore: Writable<Characters> = writable([])

export const forumStore: Writable<Forum> = writable({});

export const forumsStore: Writable<Forums>= writable([])