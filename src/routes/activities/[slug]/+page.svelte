<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { title } from '$lib/data/experience';
	import Screenshot from '$lib/components/Screenshot/Screenshot.svelte';

	import type { Experience } from '$lib/types';

	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import { computeExactDuration, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	export let data: { experience?: Experience };

	$: computedTitle = data.experience ? `${data.experience.name} - ${title}` : title;

	const date_str = data.experience
		? `${data.experience.date.getDate()} ${getMonthName(data.experience.date.getMonth())} ${data.experience.date.getFullYear()}`
		: '';

	const screenshots = data.experience?.screenshots ?? [];

	let screenIndex: number | undefined = undefined;

	$: screenshot =
		typeof screenIndex !== 'undefined' && screenshots[screenIndex]
			? screenshots[screenIndex]
			: undefined;

</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.experience === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load experience data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
				<div class="col-center pt-20 pb-5">
					<div class="text-0.9em">
						<MainTitle>{data.experience.name}</MainTitle>
					</div>
					<p class="font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center">
						{date_str}
					</p>
					<div class="w-75%">
						<CardDivider />
					</div>	
				</div>
			<div class="pt-3 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.experience.description}
						<Markdown
							content={data.experience.description ?? 'This place is yet to be filled...'}
						/>
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description...</p>
						</div>
					{/if}
				</div>
			</div>
		</div>

		{#if screenshots.length > 0}
			<div
				class="px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 "
			>
				{#each screenshots as item, index}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px"
						on:click={() => (screenIndex = index)}
						on:keydown
						on:keypress
						on:keyup
						on:keyup
					>
						<div
							class="screenshot aspect-video bg-contain w-100% cursor-pointer"
							style={`background-image: url(${base}${item.src})`}
						/>
						<p class="text-[var(--tertiary-text)] font-300">{item.label}</p>
					</div>
				{/each}
			</div>
		{:else}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
				<UIcon icon="i-carbon-image" classes="text-3.5em" />
				<p class="font-300">No images</p>
			</div>
		{/if}
	{/if}
</div>
<Screenshot {screenshot} onClose={() => (screenIndex = undefined)} />

	<style lang="scss">
		.screenshot {
			background-repeat: no-repeat;
			background-position: center;
			background-size: 100%;
			transition: background-size 200ms;
	
			&:hover {
				background-size: 120%;
			}
		}
	</style>