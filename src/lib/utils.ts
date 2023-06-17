import { modalStore } from '@skeletonlabs/skeleton';
import type { ModalSettings } from '@skeletonlabs/skeleton';
import { ApiVersion } from '$lib/enums';
import type {Character, Player, Forum} from '$lib/types'
import { playerProfileStore } from '$lib/stores';

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

	let title
	if (character){
		title = `Edit ${character.firstName}`
	} else {
		title = 'Create a Character'
	}
	
	const prompt: ModalSettings = {
		type: 'component',
		component: 'characterCRUD',
		title: title,
		body: "",
		value: {
			character: character
		},
		response: (r: any) => {
			if (r) {
				console.log('response:', r);
				fetch(`/api/${ApiVersion}/character/`, {
					method: `${character ? 'PUT' : 'POST'}`,
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


export function modalThreadCRUD(forum?:Forum): void {
	const prompt: ModalSettings = {
		type: 'component',
		component: 'threadCRUD',
		title: `Create a ${forum?.title} Thread`,
		body: 'Complete the form below and then press submit.',
		value: {
			characters: [],
			forum: forum
		},
		response: (r: any) => {
			if (r) {
				console.log('response:', r);
				fetch(`/api/${ApiVersion}/thread`, {
					method: `${forum ? 'PUT' : 'POST'}`,
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