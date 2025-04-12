import type { APIRoute } from 'astro';

interface SearchResult {
    id: string;
    type: 'person' | 'page' | 'document';
    title: string;
    subtitle?: string;
    image?: string;
    url?: string;
    metadata?: Record<string, string>;
}

const searchData: SearchResult[] = [
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

export const GET: APIRoute = async ({ url }) => {
    try {
        const query = url.searchParams.get('q')?.toLowerCase() || '';

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

        const results = searchData.filter(item => {
            const matchesTitle = item.title.toLowerCase().includes(query);
            const matchesSubtitle = item.subtitle?.toLowerCase().includes(query);
            const matchesMetadata = Object.values(item.metadata || {}).some(
                value => value.toLowerCase().includes(query)
            );

            return matchesTitle || matchesSubtitle || matchesMetadata;
        });

        return new Response(
            JSON.stringify({ results }),
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