export interface PageSpeedMetrics {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp: string;
  fcp: string;
  cls: string;
  tbt: string;
  tti: string;
  speedIndex: string;
}

export function extractMetrics(json: any): PageSpeedMetrics {
  const cat = json?.lighthouseResult?.categories ?? {};
  const audits = json?.lighthouseResult?.audits ?? {};

  const score = (name: string): number =>
    Math.round((cat[name]?.score ?? 0) * 100);

  const val = (id: string): string => {
    const a = audits[id];
    return a?.displayValue ?? a?.numericValue?.toString() ?? '—';
  };

  return {
    performance: score('performance'),
    accessibility: score('accessibility'),
    bestPractices: score('best-practices'),
    seo: score('seo'),
    lcp: val('largest-contentful-paint'),
    fcp: val('first-contentful-paint'),
    cls: val('cumulative-layout-shift'),
    tbt: val('total-blocking-time'),
    tti: val('interactive'),
    speedIndex: val('speed-index'),
  };
}
