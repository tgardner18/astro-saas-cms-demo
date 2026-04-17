<script lang="ts">
	const TOPICS = [
		{ value: 'Baking Soda', displayName: 'Baking Soda' },
		{ value: 'Cat Litter', displayName: 'Cat Litter' },
		{ value: 'Oral Care', displayName: 'Oral Care' },
		{ value: 'Laundry', displayName: 'Laundry' },
		{ value: 'Personal Care', displayName: 'Personal Care' },
	];

	const TASKS = [
		{ value: 'Cat Litter', displayName: 'Cat Litter' },
		{ value: 'Cleaning', displayName: 'Cleaning' },
		{ value: 'Deodorizing', displayName: 'Deodorizing' },
		{ value: 'Health & Beauty', displayName: 'Health & Beauty' },
		{ value: "Kids' Activities", displayName: "Kids' Activities" },
		{ value: 'Pet Care', displayName: 'Pet Care' },
		{ value: 'Seasonal', displayName: 'Seasonal' },
		{ value: 'Allergy & Sensitivity', displayName: 'Allergy & Sensitivity' },
		{ value: 'Whitening', displayName: 'Whitening' },
	];

	interface Props {
		initialItems: any[];
		gridClasses: string;
		cardClasses: string;
		figureClasses: string;
		buttonClasses: string;
		config: {
			loc: string;
			site: string | null;
			limit: number;
			rootUrl: string;
		};
	}

	let {
		initialItems,
		gridClasses,
		cardClasses,
		figureClasses,
		buttonClasses,
		config,
	}: Props = $props();

	let items = $state(initialItems);
	let selectedTopic = $state<string | null>(null);
	let selectedTasks = $state<string[]>([]);
	let isLoading = $state(false);
	let topicOpen = $state(false);
	let taskOpen = $state(false);

	let hasFilters = $derived(selectedTopic !== null || selectedTasks.length > 0);

	async function fetchArticles() {
		isLoading = true;
		const params = new URLSearchParams();
		params.set('loc', config.loc);
		if (config.site) params.set('site', config.site);
		params.set('limit', String(config.limit));
		if (config.rootUrl) params.set('rootUrl', config.rootUrl);
		if (selectedTopic) params.set('topic', selectedTopic);
		selectedTasks.forEach((t) => params.append('tasks[]', t));

		try {
			const res = await fetch(`/api/articles-filtered.json?${params}`);
			const data = await res.json();
			items = data.items || [];
		} catch (err) {
			console.error('Failed to fetch articles:', err);
		} finally {
			isLoading = false;
		}
	}

	function selectTopic(value: string | null) {
		selectedTopic = value;
		topicOpen = false;
		fetchArticles();
	}

	function toggleTask(value: string) {
		if (selectedTasks.includes(value)) {
			selectedTasks = selectedTasks.filter((t) => t !== value);
		} else {
			selectedTasks = [...selectedTasks, value];
		}
		fetchArticles();
	}

	function clearFilters() {
		selectedTopic = null;
		selectedTasks = [];
		fetchArticles();
	}

	function closeDropdowns() {
		topicOpen = false;
		taskOpen = false;
	}

	function getArticleUrl(item: any) {
		return (
			(item._metadata?.url?.base || '') +
				(item._metadata?.url?.hierarchical || '') || '#'
		);
	}

	function getImageSrc(item: any) {
		return (
			item.PromoImage?.item?.Url ||
			item.PromoImage?.url?.default ||
			'/article-list-placeholder.jpg'
		);
	}

	function getImageAlt(item: any) {
		return (
			item.PromoImage?.item?.AltText ||
			item.PromoImage?.item?._metadata?.displayName ||
			`Promo image for ${item.Heading}` ||
			'Article promo image'
		);
	}

	function getExcerpt(item: any) {
		if (!item.Body?.html) return null;
		return (
			item.Body.html
				.replace(/<[^>]*>/g, '')
				.split(' ')
				.slice(0, 30)
				.join(' ') + '...'
		);
	}
</script>

<!-- Backdrop to close dropdowns -->
{#if topicOpen || taskOpen}
	<button
		class="fixed inset-0 z-10 cursor-default bg-transparent"
		onclick={closeDropdowns}
		aria-label="Close dropdowns"
	></button>
{/if}

<!-- Filter bar -->
<div class="mb-6 flex flex-wrap items-center gap-3">
	<!-- Topic Dropdown -->
	<div class="relative z-20">
		<button
			class="btn btn-outline gap-2"
			class:btn-primary={selectedTopic !== null}
			onclick={() => {
				topicOpen = !topicOpen;
				taskOpen = false;
			}}
			aria-expanded={topicOpen}
		>
			{selectedTopic ?? 'Topic'}
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</button>

		{#if topicOpen}
			<div
				class="absolute left-0 top-full z-30 mt-1 min-w-48 rounded-box border border-base-300 bg-base-100 shadow-xl"
			>
				<ul class="menu p-2">
					<li>
						<button
							class="flex items-center gap-2"
							class:active={selectedTopic === null}
							onclick={() => selectTopic(null)}
						>
							<input
								type="radio"
								class="radio radio-primary radio-sm"
								checked={selectedTopic === null}
								readonly
							/>
							All Topics
						</button>
					</li>
					{#each TOPICS as topic}
						<li>
							<button
								class="flex items-center gap-2"
								class:active={selectedTopic === topic.value}
								onclick={() => selectTopic(topic.value)}
							>
								<input
									type="radio"
									class="radio radio-primary radio-sm"
									checked={selectedTopic === topic.value}
									readonly
								/>
								{topic.displayName}
							</button>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>

	<!-- Task Dropdown -->
	<div class="relative z-20">
		<button
			class="btn btn-outline gap-2"
			class:btn-primary={selectedTasks.length > 0}
			onclick={() => {
				taskOpen = !taskOpen;
				topicOpen = false;
			}}
			aria-expanded={taskOpen}
		>
			Task{selectedTasks.length > 0 ? ` (${selectedTasks.length})` : ''}
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</button>

		{#if taskOpen}
			<div
				class="absolute left-0 top-full z-30 mt-1 min-w-56 rounded-box border border-base-300 bg-base-100 shadow-xl"
			>
				<ul class="menu p-2">
					{#each TASKS as task}
						<li>
							<label class="flex cursor-pointer items-center gap-2">
								<input
									type="checkbox"
									class="checkbox checkbox-primary checkbox-sm"
									checked={selectedTasks.includes(task.value)}
									onchange={() => toggleTask(task.value)}
								/>
								{task.displayName}
							</label>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>

	<!-- Clear filters -->
	{#if hasFilters}
		<button class="btn btn-ghost btn-sm" onclick={clearFilters}> Clear filters </button>
	{/if}
</div>

<!-- Results -->
{#if isLoading}
	<div class="flex justify-center py-12">
		<span class="loading loading-spinner loading-lg"></span>
	</div>
{:else if items.length === 0}
	<div class="py-12 text-center">
		<p class="text-lg text-base-content/60">
			No articles found. Try adjusting your filters.
		</p>
	</div>
{:else}
	<div class={gridClasses}>
		{#each items as item}
			{@const articleUrl = getArticleUrl(item)}
			{@const excerpt = getExcerpt(item)}
			<div class="card bg-base-100 shadow-sm flex {cardClasses}">
				<figure class={figureClasses}>
					<img
						class="aspect-[3/2] h-full w-full object-cover"
						src={getImageSrc(item)}
						alt={getImageAlt(item)}
						width={600}
						height={400}
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">{item.Heading}</h2>
					{#if excerpt}
						<p>{excerpt}</p>
					{/if}
					<div class="card-actions mt-auto {buttonClasses}">
						<a href={articleUrl} class="btn btn-primary">Read more</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
