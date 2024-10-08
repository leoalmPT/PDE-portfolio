<script lang="ts">
	import type { Experience } from '$lib/types';
	import { computeExactDuration, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
	import Chip from '../Chip/Chip.svelte';
	import CardDivider from '../Card/CardDivider.svelte';

	export let experience: Experience;

	const date_str = `${experience.date.getDate()} ${getMonthName(
		experience.date.getMonth()
	)} ${experience.date.getFullYear()}`;

</script>

<Card
	margin="0px 0px 20px 0px"
	tiltDegree={2}
	href={`${base}/activities/${experience.slug}`}
	color={experience.color}
>
	<div class="col md:flex-row items-start gap-5 md:gap-1">
		<div class="col ml-0 md:ml-[20px] gap-3 w-full">
			<div class="col ">
				<h3
					class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
				>
					<CardTitle title={`${experience.name}`} />
				</h3>
			</div>
			<div class="text-[var(--text)] text-[0.9em]">
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-calendar" classes="text-1.25em" />
					{date_str}
				</div>
				<CardDivider />
			</div>
			<div class="experience-description text-[0.9em]">{experience.shortDescription}</div>
		</div>
	</div>
</Card>
