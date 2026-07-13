const { execSync } = require('child_process');
const fs = require('fs');

const urls = [
  'https://concept-hair.vercel.app',
  'https://prosaude.vercel.app',
  'https://classical-pilates.vercel.app',
  'https://gf-estetica.vercel.app',
  'https://kauan-wagnitz-nutri-o-esportiva.vercel.app'
];

const results = {};

for (const url of urls) {
  console.log(`Running lighthouse for ${url}...`);
  try {
    execSync(`npx -y lighthouse ${url} --output json --output-path ./lh-report.json --chrome-flags="--headless --no-sandbox" > /dev/null 2>&1`, { stdio: 'inherit' });
    const report = JSON.parse(fs.readFileSync('./lh-report.json', 'utf8'));
    
    results[url] = {
      performance: Math.round(report.categories.performance?.score * 100),
      accessibility: Math.round(report.categories.accessibility?.score * 100),
      bestPractices: Math.round(report.categories['best-practices']?.score * 100),
      seo: Math.round(report.categories.seo?.score * 100),
      lcp: report.audits['largest-contentful-paint']?.displayValue,
      fcp: report.audits['first-contentful-paint']?.displayValue,
      cls: report.audits['cumulative-layout-shift']?.displayValue,
      tbt: report.audits['total-blocking-time']?.displayValue,
      tti: report.audits['interactive']?.displayValue,
      speedIndex: report.audits['speed-index']?.displayValue
    };
  } catch (e) {
    console.error(`Failed for ${url}`, e);
  }
}

console.log(JSON.stringify(results, null, 2));
