<script lang="ts">
    import { Autocomplete, popup } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';
	import type {TimeZone} from '$lib/enums'

    let timezonePopup: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom',
	};

	let inputTimezone: string = '';

	const timezoneOptions: AutocompleteOption[] = [
		{ label: 'GMT', value: 'gmt' },
		{ label: 'UTC', value: 'utc' },
		{ label: 'EST', value: 'est' },
		{ label: 'EDT', value: 'edt' },
		{ label: 'CST', value: 'cst' },
		{ label: 'CDT', value: 'cdt' },
		{ label: 'MST', value: 'mst' },
		{ label: 'MDT', value: 'mdt' },
		{ label: 'PST', value: 'pst' },
		{ label: 'PDT', value: 'pdt' },
		{ label: 'IST', value: 'ist' },
		{ label: 'CET', value: 'cet' },
		{ label: 'JST', value: 'jst' },
		{ label: 'AEST', value: 'aest' },
		{ label: 'AWST', value: 'awst' }
	]

	function timezoneSelect(event: any): void {
		inputTimezone = event.detail.label;
	}
</script>

<input
			class="input autocomplete"
			type="search"
			name="autocomplete-search"
			bind:value={inputTimezone}
			placeholder="Search..."
			use:popup={timezonePopup}
		/>
		<div data-popup="popupAutocomplete">
			<Autocomplete
				bind:input={inputTimezone}
				options={timezoneOptions}
				on:selection={timezoneSelect}
			/>
		</div>