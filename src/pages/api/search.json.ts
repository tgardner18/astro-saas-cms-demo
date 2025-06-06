import type { APIRoute } from 'astro';
import { getOptimizelySdk } from '../../graphql/getSdk';
import type { ContentPayload } from '../../graphql/shared/ContentPayload';
import type { Locales } from '../../../__generated/sdk';

interface SearchResult {
    id: string;
    type: 'person' | 'page' | 'document';
    title: string;
    subtitle?: string;
    image?: string;
    url?: string;
    metadata?: Record<string, string>;
}

// Custom search data function for maintainability
function getCustomSearchData(): SearchResult[] {
    return [
        {
            id: '1',
            type: 'person',
            title: 'Emily Selman',
            image: 'https://randomuser.me/api/portraits/women/21.jpg',
            metadata: {
                role: 'Product Manager'
            }
        },
        {
            id: '2',
            type: 'person',
            title: 'Emma Dorsey',
            image: 'https://randomuser.me/api/portraits/women/24.jpg',
            metadata: {
                role: 'Software Engineer'
            }
        },
        {
            id: '3',
            type: 'person',
            title: 'Benjamin Russel',
            image: 'https://randomuser.me/api/portraits/men/41.jpg',
            metadata: {
                role: 'Design Lead'
            }
        },
        {
            id: '4',
            type: 'person',
            title: 'Chelsea Hagon',
            subtitle: 'Human Resources Manager',
            image: 'https://randomuser.me/api/portraits/women/67.jpg',
            metadata: {
                phone: '343-829-4718',
                url: 'https://example.com',
                email: 'chelseahagon@example.com'
            }
        },
        {
            id: '5',
            type: 'page',
            title: 'Getting Started Guide',
            subtitle: 'Learn how to use our platform',
            url: '/docs/getting-started',
        },
        {
            id: '6',
            type: 'document',
            title: 'Q4 2023 Report',
            subtitle: 'Financial report for Q4 2023',
            url: '/documents/q4-2023-report.pdf',
        }
    ];
}

export const GET: APIRoute = async ({ url, currentLocale, request }) => {
    try {
        const query = `%${url.searchParams.get('q')?.toLowerCase() || ''}%`;

        if (!query) {
            return new Response(
                JSON.stringify({ results: [] }),
                {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        // Get current domain from request headers (same as Layout.astro does)
        const host = url.origin || '';
        console.log('Current host:', host);

        // Get custom results
        const customSearchData = getCustomSearchData();
        const customResults = customSearchData.filter(item => {
            const matchesTitle = item.title.toLowerCase().includes(query);
            const matchesSubtitle = item.subtitle?.toLowerCase().includes(query);
            const matchesMetadata = Object.values(item.metadata || {}).some(
                value => value.toLowerCase().includes(query)
            );

            return matchesTitle || matchesSubtitle || matchesMetadata;
        });

        // Get graph results
        const contentPayload: ContentPayload = {
            ctx: 'view',
            key: '',
            ver: '',
            loc: currentLocale as Locales || 'en',
            preview_token: '',
            types: [],
        };

        const sdk = getOptimizelySdk(contentPayload);
        let graphResults: SearchResult[] = [];

        try {
            const searchResponse = await sdk.searchContent({
                searchTerm: query,
                locale: [contentPayload.loc as Locales],
                domain: host
            });

            // Transform _Page results (includes experiences since they're also pages)
            if (searchResponse._Page?.items) {
                const pageResults = searchResponse._Page.items
                    .filter(item => item?._metadata)
                    .map(item => {
                        const result = {
                            id: item?._metadata?.key || '',
                            type: 'page' as const,
                            title: item?._metadata?.displayName || (item as any).Heading || 'Untitled Page',
                            subtitle: (item as any)?.SubHeading || item?._metadata?.types?.join(', ') || undefined,
                            url: item?._metadata?.url?.default || item?._metadata?.url?.hierarchical || '#',
                            image: (item as any)?.PromoImage?.url?.default || undefined
                        };
                        // Remove only optional undefined fields, never remove required fields (id, type, title)
                        if (result.subtitle === undefined) delete result.subtitle;
                        if (result.image === undefined) delete result.image;
                        return result;
                    });
                graphResults.push(...pageResults);
            }
        } catch (error) {
            console.error('Error fetching graph results:', error);
            // Continue with just custom results if graph fails
        }

        // Merge results, removing duplicates by ID
        const mergedResults = [...customResults];
        const existingIds = new Set(customResults.map(r => r.id));

        for (const graphResult of graphResults) {
            if (!existingIds.has(graphResult.id)) {
                mergedResults.push(graphResult);
            }
        }

        // Debug logging
        console.log('Search query:', query);
        console.log('Custom results:', customResults.length);
        console.log('Graph results:', graphResults.length);
        console.log('Total merged results:', mergedResults.length);

        return new Response(
            JSON.stringify({ results: mergedResults }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to perform search' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
} 