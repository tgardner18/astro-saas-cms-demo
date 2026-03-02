<script lang="ts">
    import { onDestroy, onMount } from 'svelte';

    interface Props {
        title: string;
        subtitle: string;
        chartType: 'bar' | 'line' | 'area' | 'pie' | 'donut';
        csvData: string;
        xAxisLabel: string;
        yAxisLabel: string;
        height: number;
    }

    let { title, subtitle, chartType, csvData, xAxisLabel, yAxisLabel, height }: Props = $props();

    let container: HTMLDivElement;
    let chart: any = null;

    function parseCsv(raw: string): { headers: string[]; rows: Record<string, any>[] } {
        // Normalize line endings, then split into lines
        let lines = raw.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter(l => l.trim() !== '');

        // Fallback: CMS may flatten newlines to spaces. Reassemble rows by
        // grouping space-separated chunks until each group has the same comma
        // count as the header.
        if (lines.length < 2) {
            const segments = raw.trim().split(' ').filter(s => s.trim() !== '');
            if (segments.length < 2) return { headers: [], rows: [] };

            // First segment is the header row; use its comma count as target
            const headerCommas = (segments[0].match(/,/g) || []).length;
            const rebuilt: string[] = [];
            let current = '';

            for (const seg of segments) {
                current = current ? `${current} ${seg}` : seg;
                const commas = (current.match(/,/g) || []).length;
                if (commas >= headerCommas) {
                    rebuilt.push(current);
                    current = '';
                }
            }
            if (current) rebuilt.push(current);
            lines = rebuilt;
        }

        if (lines.length < 2) return { headers: [], rows: [] };

        const headers = lines[0].split(',').map(h => h.trim());
        const rows = lines.slice(1).map(line => {
            const values = line.split(',').map(v => v.trim());
            const row: Record<string, any> = {};
            headers.forEach((h, i) => {
                const raw = values[i] ?? '';
                const num = Number(raw);
                row[h] = isNaN(num) || raw === '' ? raw : num;
            });
            return row;
        });

        return { headers, rows };
    }

    function buildOptions(headers: string[], rows: Record<string, any>[]): any {
        if (headers.length === 0 || rows.length === 0) return null;

        const titleObj = title ? { title: { text: title } } : {};
        const subtitleObj = subtitle ? { subtitle: { text: subtitle } } : {};

        if (chartType === 'pie' || chartType === 'donut') {
            const labelKey = headers[0];
            const angleKey = headers[1];
            return {
                ...titleObj,
                ...subtitleObj,
                data: rows,
                series: [
                    {
                        type: 'pie',
                        calloutLabelKey: labelKey,
                        angleKey: angleKey,
                        ...(chartType === 'donut' ? { innerRadiusRatio: 0.6 } : {}),
                    },
                ],
            };
        }

        // Bar / Line / Area
        const xKey = headers[0];
        const seriesKeys = headers.slice(1);

        const seriesType = chartType === 'area' ? 'area' : chartType === 'line' ? 'line' : 'bar';

        const series = seriesKeys.map(key => ({
            type: seriesType,
            xKey,
            yKey: key,
            yName: key,
        }));

        const axes: any[] = [
            {
                type: 'category',
                position: 'bottom',
                ...(xAxisLabel ? { title: { text: xAxisLabel } } : {}),
            },
            {
                type: 'number',
                position: 'left',
                ...(yAxisLabel ? { title: { text: yAxisLabel } } : {}),
            },
        ];

        return {
            ...titleObj,
            ...subtitleObj,
            data: rows,
            series,
            axes,
        };
    }

    onMount(async () => {
        const { AgCharts, AllCommunityModule, ModuleRegistry } = await import('ag-charts-community');
        ModuleRegistry.registerModules(AllCommunityModule);
        const { headers, rows } = parseCsv(csvData);
        const options = buildOptions(headers, rows);
        if (options && container) {
            chart = AgCharts.create({ ...options, container });
        }
    });

    onDestroy(() => {
        if (chart) {
            chart.destroy();
            chart = null;
        }
    });
</script>

<div class="chart-wrapper">
    <div bind:this={container} style={`width: 100%; height: ${height}px;`}></div>
</div>

<style>
    .chart-wrapper {
        width: 100%;
    }
</style>
