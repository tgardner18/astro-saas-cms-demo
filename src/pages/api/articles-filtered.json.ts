import type { APIRoute } from 'astro';
import type { Locales } from '../../../__generated/sdk';
import { getOptimizelySdk } from '../../graphql/getSdk';
import type { ContentPayload } from '../../graphql/shared/ContentPayload';
import { localeToSdkLocale } from '../../lib/locale-helpers';

export const GET: APIRoute = async ({ url }) => {
	try {
		const locale = url.searchParams.get('loc') || 'en';
		const site = url.searchParams.get('site') || null;
		const limit = parseInt(url.searchParams.get('limit') || '15');
		const rootUrl = url.searchParams.get('rootUrl') || '/';
		const topic = url.searchParams.get('topic') || undefined;
		const tasks = url.searchParams.getAll('tasks[]');

		const contentPayload: ContentPayload = {
			ctx: 'view',
			key: '',
			ver: '',
			loc: localeToSdkLocale(locale) as Locales,
			preview_token: '',
			types: [],
		};

		const sdk = getOptimizelySdk(contentPayload);
		// @ts-ignore — getArticles gains topic/tasks params after `yarn codegen`
		const result = await sdk.getArticles({
			loc: contentPayload.loc,
			site,
			limit,
			rootUrl,
			topic: topic || null,
			tasks: tasks.length > 0 ? tasks : null,
		});

		const items = result?.ArticlePage?.items || [];

		return new Response(JSON.stringify({ items }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=30, s-maxage=30',
			},
		});
	} catch (error) {
		console.error('Articles filter API error:', error);
		return new Response(
			JSON.stringify({
				error: 'Failed to fetch articles',
				details: error instanceof Error ? error.message : 'Unknown error',
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
};
