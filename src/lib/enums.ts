export type Gender =
	| 'Androgyne'
	| 'Cisgender'
	| 'Bigender'
	| 'Fluid'
	| 'Non-Binary'
	| 'Queer'
	| 'Transgender';
export const genderOptions: Gender[] = [
	'Androgyne',
	'Cisgender',
	'Bigender',
	'Fluid',
	'Non-Binary',
	'Queer',
	'Transgender'
]

export type RelationshipStatus =
	| 'Divorced'
	| 'Married'
	| 'Open Relationship'
	| 'Polyarmorous'
	| 'Single'
	| 'Widowed';
export const relationshipStatusOptions: RelationshipStatus[] =[
	'Divorced',
	'Married',
	'Open Relationship',
	'Polyarmorous',
	'Single',
	'Widowed'
]

export type Soul = 'Ghost' | 'Immortal' | 'Mortal' | 'Undead';
export const soulOptions: Soul[] = ['Ghost', 'Immortal', 'Mortal', 'Undead'];

export type Species =
	| 'Alien'
	| 'Android'
	| 'Angel'
	| 'Centaur'
	| 'Demon'
	| 'Djinn'
	| 'Dragon'
	| 'Dwarf'
	| 'Elemental'
	| 'Elf'
	| 'Fae'
	| 'Giant'
	| 'Gnome'
	| 'Goblin'
	| 'God/dess'
	| 'Human'
	| 'Mermaid'
	| 'Pixie'
	| 'Ogre'
	| 'Orc'
	| 'Robot'
	| 'Titan'
	| 'Troll'
	| 'Unicorn'
	| 'Vampire'
	| 'Werewolf'
	| 'Other';

export const speciesOptions: Species[] = [
	'Alien',
	'Android',
	'Angel',
	'Centaur',
	'Demon',
	'Djinn',
	'Dragon',
	'Dwarf',
	'Elemental',
	'Elf',
	'Fae',
	'Giant',
	'Gnome',
	'Goblin',
	'God/dess',
	'Human',
	'Mermaid',
	'Pixie',
	'Ogre',
	'Orc',
	'Robot',
	'Titan',
	'Troll',
	'Unicorn',
	'Vampire',
	'Werewolf',
	'Other'
]

export const ApiVersion = 'v1';

export type TimeZone =
	| 'GMT'
	| 'UTC'
	| 'EST'
	| 'EDT'
	| 'CST'
	| 'CDT'
	| 'MST'
	| 'MDT'
	| 'PST'
	| 'PDT'
	| 'IST'
	| 'CET'
	| 'JST'
	| 'AEST'
	| 'AWST'

export const timeZoneOptions: TimeZone[] = [
	'GMT',
	'UTC',
	'EST',
	'EDT',
	'CST',
	'CDT',
	'MST',
	'MDT',
	'PST',
	'PDT',
	'IST',
	'CET',
	'JST',
	'AEST',
	'AWST'
]

export const HostName = 'https://localhost:5173'