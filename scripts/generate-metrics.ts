import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { extractMetrics, PageSpeedMetrics } from '../src/services/pageSpeed';

const API_KEY = 'AIzaSyAevInkf7gjO1EC5qPUHGouteOKKpuFG4o';
const API_BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

const PROJECTS = [
  { id: 'fintrack', url: 'https://fintrack-henna-zeta.vercel.app/' },
  { id: 'concepthair', url: 'https://concept-hair.vercel.app' },
  { id: 'prosaude', url: 'https://prosaude.vercel.app' },
  { id: 'classical-pilates', url: 'https://classical-pilates.vercel.app' },
  { id: 'gf-estetica', url: 'https://gf-estetica.vercel.app' },
  { id: 'kauan-wagnitz', url: 'https://kauan-wagnitz-nutri-o-esportiva.vercel.app' },
];

async function fetchStrategy(
  url: string,
  strategy: 'mobile' | 'desktop',
): Promise<PageSpeedMetrics | null> {
  try {
    const params = new URLSearchParams({ url, key: API_KEY, strategy });
    for (const c of ['PERFORMANCE', 'ACCESSIBILITY', 'BEST_PRACTICES', 'SEO']) {
      params.append('category', c);
    }
    const res = await fetch(`${API_BASE}?${params}`);
    if (!res.ok) {
      console.warn(`  [${strategy}] HTTP ${res.status} — pulando`);
      return null;
    }
    return extractMetrics(await res.json());
  } catch (err) {
    console.warn(`  [${strategy}] erro: ${err}`);
    return null;
  }
}

async function generate(): Promise<void> {
  console.log('Fetching PageSpeed Insights metrics...\n');

  const entries: string[] = [];

  for (const project of PROJECTS) {
    process.stdout.write(`  ${project.id}...`);
    const [desktop, mobile] = await Promise.all([
      fetchStrategy(project.url, 'desktop'),
      fetchStrategy(project.url, 'mobile'),
    ]);

    if (!desktop && !mobile) {
      console.log(' SKIP (ambos falharam)');
      continue;
    }

    entries.push(
      `  '${project.id}': {\n` +
        `    desktop: ${JSON.stringify(desktop, null, 6).replace(/\n/g, '\n    ').replace(/^    /, '')},\n` +
        `    mobile: ${JSON.stringify(mobile, null, 6).replace(/\n/g, '\n    ').replace(/^    /, '')},\n` +
        `  }`,
    );
    console.log(' OK');
  }

  const output = `\
// Auto-generated por scripts/generate-metrics.ts
// Editado manualmente será sobrescrito no pr\u00f3ximo build.
import { PageSpeedMetrics } from '../services/pageSpeed';

export interface ProjectMetricsEntry {
  desktop: PageSpeedMetrics;
  mobile: PageSpeedMetrics;
}

export const metricsData: Record<string, ProjectMetricsEntry> = {
${entries.join(',\n')}
};
`;

  const outPath = resolve('src/data/metrics-generated.ts');
  writeFileSync(outPath, output, 'utf-8');
  console.log(`\nEscrito em ${outPath}`);
}

generate().catch((err) => {
  console.error('Falha ao gerar métricas:', err);
  console.log('Usando dados existentes (se houver).');
});
