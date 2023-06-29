import { modalStore } from '@skeletonlabs/skeleton';
import type { ModalSettings } from '@skeletonlabs/skeleton';
import { ApiVersion } from '$lib/enums';
import type {Character, Player, Forum, Forums, Thread} from '$lib/types'
import { playerStore, characterProfileStore, playerCharactersStore, forumStore, forumsStore } from '$lib/stores';

export const handleError = (error: any): any => {
	console.error(error);
	return error;
};

// Generate a random user alias in the format [genre]-[animal]-123
export const generateAlias = (): string => {
	const genres: string[] = [
		'Action',
		'Adventure',
		'Crime',
		'Comedy',
		'Drama',
		'Horror',
		'Mystery',
		'Romance',
		'SciFi',
		'Spy',
		'Thriller'
	];
	const animals: string[] = [
		'Ant',
		'Bear',
		'Bison',
		'Cat',
		'Crocodile',
		'Dog',
		'Dolphin',
		'Eagle',
		'Elephant',
		'Flamingo',
		'Fox',
		'Giraffe',
		'Gorilla',
		'Hedgehog',
		'Hippo',
		'Iguana',
		'Impala',
		'Jaguar',
		'Jellyfish',
		'Kangaroo',
		'Koala',
		'Lemur',
		'Lion',
		'Moose',
		'Monkey',
		'Narwhal',
		'Nightingale',
		'Octopus',
		'Ocelot',
		'Penguin',
		'Peacock',
		'Quokka',
		'Raccoon',
		'Rhino',
		'Seagull',
		'Squirrel',
		'Tiger',
		'Toucan',
		'Uakari',
		'Unicorn',
		'Viper',
		'Vulture',
		'Walrus',
		'Wombat',
		'Xenops',
		'Xerus',
		'Yak',
		'Yellowjacket',
		'Zebra',
		'Zonkey'
	];
	const randomGenre: string = genres[Math.floor(Math.random() * genres.length)];
	const randomAnimal: string = animals[Math.floor(Math.random() * animals.length)];
	const randomNumber: number = Math.floor(Math.random() * 900) + 100;
	return `${randomGenre}-${randomAnimal}-${randomNumber}`;
};

export function modalCharacterCRUD(character?: Character): void {
	
	const prompt: ModalSettings = {
		type: 'component',
		component: 'characterCRUD',
		title: character ? 'Edit Character' : 'Create a Character',
		body: "",
		value: {
			character: character
		},
		response: async (r: any) => {
			if (r) {
				console.log('response:', r);
				const url = character?.id
					? `/api/${ApiVersion}/character/${character.id}`
					: `/api/${ApiVersion}/character`;
				const method = character?.id ? 'PUT' : 'POST';
				const response = await fetch(url, {
					method: method,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(r)
				});
				const addedCharacter = await response.json()
				characterProfileStore.set(addedCharacter);
				if(!addedCharacter.archive) {
					playerCharactersStore.update((characters) => [...characters, addedCharacter]);
				} else {
					playerCharactersStore.update((characters) => {
						const index = characters.findIndex((c) => c.id === addedCharacter.id);
						characters.splice(index, 1, addedCharacter);
						return characters;
					});
				}
			}
		}
	};

	modalStore.trigger(prompt);
}

export function modalForumCRUD(forums?: Forums, forum?: Forum): void {
	const prompt: ModalSettings = {
		type: 'component',
		component: 'forumCRUD',
		title: forum ? 'Edit Forum' : 'Create a Forum',
		body: '',
		value: {
			forum: forum,
			forums: forums
		},
		response: async (r: any) => {
			if (r) {
				console.log('response:', r);
				const url = forum?.id ? `/api/${ApiVersion}/forum/${forum.id}` : `/api/${ApiVersion}/forum`;
				const method = forum?.id ? 'PUT' : 'POST';
				const response = await fetch(url, {
					method: method,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(r)
				});
				const addedForum = await response.json();

				if (addedForum) {
					forumStore.set(addedForum);
					forumsStore.update((forums) => [...forums, addedForum]);
				}
			}
		}
	};
	modalStore.trigger(prompt);
}


export function modalPlayerCRUD(player:Player | null): void {
	const prompt: ModalSettings = {
		type: 'component',
		component: 'playerCRUD',
		title: `Edit Your Profile`,
		body: "Make any changes you'd like and then select Update Profile.",
		value: {
			player: player
		},
		response: (r: any) => {
			if (r) {
				console.log('response:', r);
				fetch(`/api/${ApiVersion}/player/${player?.player_id}`, {
					method: `${player ? 'PUT' : 'POST'}`,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(r)
				});
				playerStore.update((player) => {
					return { ...player, ...r };
				});
			}
		}
	};
	modalStore.trigger(prompt);
}

export function modalThreadCRUD(options: { forums?: Forums | null; forum?: Forum | null; thread?: Thread | null }): void {
	const { forums, forum, thread } = options;
	
	const prompt: ModalSettings = {
		type: 'component',
		component: 'threadCRUD',
		title: forum?.title ? `Create a ${forum.title} Thread` : 'Create a Thread',
		body: 'Complete the form below and then press submit.',
		value: {
			characters: [],
			forum: forum,
			forums: forums,
			thread: thread
		},
		response: (r: any) => {
			if (r) {
				console.log('response:', r);
				fetch(`/api/${ApiVersion}/thread`, {
					method: `${thread ? 'PUT' : 'POST'}`,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(r)
				});
			}
		}
	};
	modalStore.trigger(prompt);
}