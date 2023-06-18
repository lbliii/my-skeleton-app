import { writable } from 'svelte/store';
import type {Player, Character,} from '$lib/types'
import type {Writable} from 'svelte/store'
export const playerProfileStore: Writable<Player> = writable({
});

export const characterProfileStore: Writable<Character> = writable({
})