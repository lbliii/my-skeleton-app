import { modalStore } from '@skeletonlabs/skeleton';
import type { ModalSettings } from '@skeletonlabs/skeleton';
import { ApiVersion } from '$lib/enums';
import type {Character, Player, Forum, Forums, Thread} from '$lib/types'
import { playerProfileStore, characterProfileStore, playerCharactersStore } from '$lib/stores';

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
		response: (r: any) => {
			if (r) {
				console.log('response:', r);
				const url = character?.id
					? `/api/${ApiVersion}/character/${character.id}`
					: `/api/${ApiVersion}/character`;
				const method = character?.id ? 'PUT' : 'POST';
				fetch(url, {
					method: method,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(r)
				});
				characterProfileStore.set(r);
				playerCharactersStore.update((characters) => [...characters, r]);
			}
		}
	};
	modalStore.trigger(prompt);
}

export function modalPlayerCRUD(player:Player): void {
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
				fetch(`/api/${ApiVersion}/player/${player.player_id}`, {
					method: `${player ? 'PUT' : 'POST'}`,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(r)
				});
				playerProfileStore.set(r);
			}
		}
	};
	modalStore.trigger(prompt);
}


export function modalThreadCRUD(options: { forums?: Forums; forum?: Forum; thread?: Thread }): void {
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