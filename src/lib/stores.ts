import { writable } from 'svelte/store';
import type {PlayerProfile} from '$lib/types'
import type {Writable} from 'svelte/store'

export const playerProfileStore: Writable<PlayerProfile> = writable({
    alias: '',
    age: 0,
    avatar: '',
    bio: '',
    characters: [],
    dislikes: '',
    likes: '',
    time_zone: ''
});
