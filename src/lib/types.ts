import type {Gender, RelationshipStatus, Soul, Species} from './enums';

export interface Character extends CharacterProfile{
	id?: number;
	created_at?: string;
	player_id?: string;
	threads?: Thread[];
	updated_at?: string;
	archive: boolean
}

export interface CharacterProfile{
	age?: number;
	avatar?: string;
	bio?: string;
	first_name?: string;
	gender?: Gender;
	last_name?: string;
	relationship_status?: RelationshipStatus;
	soul?: Soul;
	species?: Species;
}

export interface Characters extends Array<Character> {}

export interface Forum {
	id?: number;
	created_at?: string;
	description?: string;
	hero_image?: string;
	is_parent?: boolean;
	owner_id?: number;
	owner?: Player;
	parent?: Forum;
	title?: string;
	updated_at?: string;
}

export interface Forums extends Array<Forum> {}

export interface Player extends PlayerProfile {
	player_id?: string;
	created_at?: string;
	updated_at?: string;
	admin?: boolean;
}

export interface PlayerProfile {
	alias?: string;
	age?: number;
	avatar?: string;
	bio?: string;
	characters?: Character[];
	dislikes?: string;
	likes?: string;
	time_zone?: string;
}

export interface Players extends Array<Player> {}

export interface Post {
	id: number;
	body: string;
	createdAt: string;
	character: Character;
	likes?: number;
	owner: Player;
	thread: Thread;
	updatedAt?: string;
}

export interface Posts extends Array<Post> {}

export interface Thread {
	id: number;
	createdAt: string;
	description?: string;
	forum: Forum;
  	likes?: number; // todo: total of all post likes.
	owner: Player;
	title: string;
	updatedAt?: string;
}

export interface Threads extends Array<Thread> {}

export interface User {
	id: number;
	email: string;
	role: string;
}

export interface SBSession {
	accessToken: string;
	expires_at: number;
	provider_referesh_token: string,
	provider_token: string,
	refresh_token: string,
	token_type: string
	user: {
		aud: string,
		email: string,
		id: string,
		role: string,
		session_id: string
	}
}