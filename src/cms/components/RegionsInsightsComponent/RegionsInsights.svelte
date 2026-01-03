<script lang="ts">
    import { Image as AstroImage } from 'astro:assets';
    import type { ArticlePageExcerptFragment } from '../../../../__generated/sdk';

    // Props
    interface Props {
        articles: ArticlePageExcerptFragment[];
        config: {
            itemsPerPage: number;
            locale: string;
            domain: string;
        };
        isEditMode?: boolean;
    }

    let { articles, config, isEditMode = false }: Props = $props();

    // State
    let selectedTopic = $state<string>('All');
    let selectedSubtopic = $state<string>('All');
    let selectedContentType = $state<string>('All');
    let currentPage = $state(1);

    // Extract unique topics from articles
    let allTopics = $derived.by(() => {
        const topics = new Set<string>();
        articles.forEach((article) => {
            if (article.ArticleTaxonomy?.ArticleTopic) {
                topics.add(article.ArticleTaxonomy.ArticleTopic);
            }
        });
        return ['All', ...Array.from(topics).sort()];
    });

    // Get subtopics based on selected topic
    let availableSubtopics = $derived.by(() => {
        if (selectedTopic === 'All') {
            return ['All'];
        }

        const subtopics = new Set<string>();

        // Map topic names to their corresponding subtopic field names
        const topicToSubtopicField: Record<string, string> = {
            Auto: 'SubtopicAuto',
            'Financial Hardship': 'SubtopicFinancialHardship',
            Home: 'SubtopicHome',
            'Life Stages': 'SubtopicLifeStages',
            'Personal Finances': 'SubtopicPersonalFinances',
            Retirement: 'SubtopicRetirement',
        };

        const subtopicField = topicToSubtopicField[selectedTopic];

        if (subtopicField) {
            articles.forEach((article) => {
                if (article.ArticleTaxonomy?.ArticleTopic === selectedTopic) {
                    const subtopicArray =
                        article.ArticleTaxonomy[
                            subtopicField as keyof typeof article.ArticleTaxonomy
                        ];
                    if (Array.isArray(subtopicArray)) {
                        subtopicArray.forEach((sub: string) =>
                            subtopics.add(sub)
                        );
                    }
                }
            });
        }

        return ['All', ...Array.from(subtopics).sort()];
    });

    // Reset subtopic when topic changes
    $effect(() => {
        selectedTopic;
        selectedSubtopic = 'All';
    });

    // Filter articles based on selections
    let filteredArticles = $derived.by(() => {
        let filtered = articles;

        // Filter by topic
        if (selectedTopic !== 'All') {
            filtered = filtered.filter(
                (article) =>
                    article.ArticleTaxonomy?.ArticleTopic === selectedTopic
            );
        }

        // Filter by subtopic
        if (selectedSubtopic !== 'All' && selectedTopic !== 'All') {
            const topicToSubtopicField: Record<string, string> = {
                Auto: 'SubtopicAuto',
                'Financial Hardship': 'SubtopicFinancialHardship',
                Home: 'SubtopicHome',
                'Life Stages': 'SubtopicLifeStages',
                'Personal Finances': 'SubtopicPersonalFinances',
                Retirement: 'SubtopicRetirement',
            };

            const subtopicField = topicToSubtopicField[selectedTopic];

            if (subtopicField) {
                filtered = filtered.filter((article) => {
                    const subtopicArray =
                        article.ArticleTaxonomy?.[
                            subtopicField as keyof typeof article.ArticleTaxonomy
                        ];
                    if (Array.isArray(subtopicArray)) {
                        return subtopicArray.includes(selectedSubtopic);
                    }
                    return false;
                });
            }
        }

        // Filter by content type (for now, all items are Article type)
        // This is a placeholder for future expansion
        if (selectedContentType !== 'All') {
            // Content type filtering logic would go here
        }

        return filtered;
    });

    // Paginate results
    let paginatedArticles = $derived.by(() => {
        const start = (currentPage - 1) * config.itemsPerPage;
        const end = start + config.itemsPerPage;
        return filteredArticles.slice(start, end);
    });

    let totalPages = $derived(
        Math.ceil(filteredArticles.length / config.itemsPerPage)
    );

    // Calculate display range for results summary
    let resultsStart = $derived((currentPage - 1) * config.itemsPerPage + 1);
    let resultsEnd = $derived(
        Math.min(currentPage * config.itemsPerPage, filteredArticles.length)
    );

    // Reset to first page when filters change
    $effect(() => {
        selectedTopic;
        selectedSubtopic;
        selectedContentType;
        currentPage = 1;
    });

    // Apply filters handler
    function applyFilters() {
        // Reset to first page when applying filters
        currentPage = 1;
    }

    // Reset filters handler
    function resetFilters() {
        selectedTopic = 'All';
        selectedSubtopic = 'All';
        selectedContentType = 'All';
        currentPage = 1;
    }

    // Pagination handlers
    function goToPage(page: number) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
        }
    }

    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
        }
    }
</script>

<div class="regions-insights">
    <!-- Filter Controls -->
    <div class="filter-section mb-8 bg-base-200 p-6 rounded-xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <!-- Topic Filter -->
            <div class="form-control">
                <label class="label" for="topic-select">
                    <span class="label-text font-bold mb-3">Topic</span>
                </label>
                <select
                    id="topic-select"
                    class="select select-bordered w-full rounded-md text-xl py-3 px-4 h-auto min-h-14"
                    bind:value={selectedTopic}
                    disabled={isEditMode}
                >
                    {#each allTopics as topic}
                        <option value={topic}>{topic}</option>
                    {/each}
                </select>
            </div>

            <!-- Subtopic Filter -->
            <div class="form-control">
                <label class="label" for="subtopic-select">
                    <span class="label-text font-bold mb-3">Subtopic</span>
                </label>
                <select
                    id="subtopic-select"
                    class="select select-bordered w-full rounded-md text-xl py-3 px-4 h-auto min-h-14"
                    bind:value={selectedSubtopic}
                    disabled={isEditMode || selectedTopic === 'All'}
                >
                    {#each availableSubtopics as subtopic}
                        <option value={subtopic}>{subtopic}</option>
                    {/each}
                </select>
                <!-- {#if selectedTopic === 'All'} -->
                <label class="label">
                    <span class="label-text-alt text-base-content/60 pt-2"
                        >Select a topic first</span
                    >
                </label>
                <!-- {/if} -->
            </div>

            <!-- Content Type Filter -->
            <div class="form-control">
                <label class="label" for="content-type-select">
                    <span class="label-text font-bold mb-3">Content type</span>
                </label>
                <select
                    id="content-type-select"
                    class="select select-bordered w-full rounded-md text-xl py-3 px-4 h-auto min-h-14"
                    bind:value={selectedContentType}
                    disabled={isEditMode}
                >
                    <option value="All">All</option>
                    <option value="Article">Article</option>
                </select>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 justify-end">
            <button
                class="btn btn-primary rounded-3xl"
                onclick={applyFilters}
                disabled={isEditMode}
            >
                Apply filter
            </button>
            <button
                class="btn btn-outline rounded-3xl"
                onclick={resetFilters}
                disabled={isEditMode}
            >
                Reset
            </button>
        </div>
    </div>

    <!-- Results Summary -->
    <div class="results-summary mb-4">
        <p class="text-sm text-base-content/70">
            {#if filteredArticles.length > 0}
                Showing {resultsStart} - {resultsEnd} of {filteredArticles.length}
                results
            {:else}
                Showing 0 results
            {/if}
        </p>
    </div>

    <!-- Results Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {#each paginatedArticles as article}
            <div
                class="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
                <figure>
                    <img
                        class="aspect-3/2 object-cover w-full"
                        src={((article.PromoImage as any)?.item?.Url ||
                            article.PromoImage?.url?.default) ??
                            '/placeholder.png'}
                        alt={article.PromoImage?.item?.AltText ||
                            `Promo image for ${article.Heading}` ||
                            'Article promo image'}
                    />
                </figure>
                <div class="card-body">
                    <div
                        class="flex items-center gap-2 text-xs text-base-content/60 mb-2"
                    >
                        <span>Article</span>
                        {#if article.ReadTime && article.ReadTime > 0}
                            <span>|</span>
                            <span>{article.ReadTime} min read</span>
                        {/if}
                    </div>
                    <h3 class="card-title text-lg">{article.Heading}</h3>
                    {#if article.Body?.html}
                        <div class="text-sm text-base-content/80">
                            {@html article.Body.html
                                .replace(/<[^>]*>/g, '')
                                .split(' ')
                                .slice(0, 30)
                                .join(' ') + '...'}
                        </div>
                    {/if}
                    <div class="card-actions justify-end mt-auto">
                        <a
                            href={article._metadata?.url?.hierarchical}
                            class="btn btn-primary btn-sm"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <!-- No Results Message -->
    {#if filteredArticles.length === 0}
        <div class="alert alert-warning">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>
            <span
                >No articles found matching your filters. Try adjusting your
                selections.</span
            >
        </div>
    {/if}

    <!-- Pagination -->
    {#if totalPages > 1}
        <div class="flex justify-center mt-8">
            <div class="join">
                <button
                    class="join-item btn"
                    onclick={prevPage}
                    disabled={currentPage === 1 || isEditMode}
                >
                    «
                </button>

                {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
                    {#if page === 1 || page === totalPages || (page >= currentPage - 2 && page <= currentPage + 2)}
                        <button
                            class="join-item btn"
                            class:btn-active={page === currentPage}
                            onclick={() => goToPage(page)}
                            disabled={isEditMode}
                        >
                            {page}
                        </button>
                    {:else if page === currentPage - 3 || page === currentPage + 3}
                        <button class="join-item btn btn-disabled">...</button>
                    {/if}
                {/each}

                <button
                    class="join-item btn"
                    onclick={nextPage}
                    disabled={currentPage === totalPages || isEditMode}
                >
                    »
                </button>
            </div>
        </div>
    {/if}

    <!-- Results Summary -->
    <div class="results-summary m-4 text-center">
        <p class="text-sm text-base-content/70">
            {#if filteredArticles.length > 0}
                {resultsStart} - {resultsEnd} of {filteredArticles.length}
                results
            {:else}
                Showing 0 results
            {/if}
        </p>
    </div>
</div>

<style>
    .regions-insights {
        width: 100%;
    }
</style>
