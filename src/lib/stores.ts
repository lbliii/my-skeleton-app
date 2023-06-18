import { writable } from 'svelte/store';
import type {Player, Character, Characters} from '$lib/types'
import type {Writable} from 'svelte/store'
export const playerProfileStore: Writable<Player> = writable({
});

export const characterProfileStore: Writable<Character> = writable({
})

export const playerCharactersStore: Writable<Characters> = writable([])