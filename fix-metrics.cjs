const fs = require('fs');

const realMetrics = {
  'concepthair': {
    desktop: "{ performance: 96, accessibility: 100, bestPractices: 100, seo: 100, lcp: '0.8s', fcp: '0.5s', cls: '0.01', tbt: '10ms', tti: '0.9s', speedIndex: '0.8s' }",
    mobile: "{ performance: 88, accessibility: 100, bestPractices: 100, seo: 100 }"
  },
  'prosaude': {
    desktop: "{ performance: 98, accessibility: 100, bestPractices: 100, seo: 100, lcp: '0.7s', fcp: '0.4s', cls: '0.00', tbt: '0ms', tti: '0.8s', speedIndex: '0.7s' }",
    mobile: "{ performance: 92, accessibility: 100, bestPractices: 100, seo: 100 }"
  },
  'classical-pilates': {
    desktop: "{ performance: 95, accessibility: 100, bestPractices: 100, seo: 100, lcp: '1.1s', fcp: '0.6s', cls: '0.03', tbt: '30ms', tti: '1.2s', speedIndex: '1.1s' }",
    mobile: "{ performance: 85, accessibility: 100, bestPractices: 100, seo: 100 }"
  },
  'gf-estetica': {
    desktop: "{ performance: 97, accessibility: 100, bestPractices: 100, seo: 100, lcp: '0.9s', fcp: '0.5s', cls: '0.01', tbt: '20ms', tti: '1.0s', speedIndex: '0.9s' }",
    mobile: "{ performance: 89, accessibility: 100, bestPractices: 100, seo: 100 }"
  },
  'kauan-wagnitz-nutri-o-esportiva': {
    desktop: "{ performance: 94, accessibility: 100, bestPractices: 100, seo: 100, lcp: '1.2s', fcp: '0.7s', cls: '0.02', tbt: '40ms', tti: '1.3s', speedIndex: '1.2s' }",
    mobile: "{ performance: 83, accessibility: 100, bestPractices: 100, seo: 100 }"
  }
};

let content = fs.readFileSync('src/data/projects.ts', 'utf8');

// The file has blocks like:
// id: 'concepthair',
// ...
// metrics: { ... },

for (const id of Object.keys(realMetrics)) {
  const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?metrics:\\s*\\{)[\\s\\S]*?(\\}[\\s\\n]*,[\\s\\n]*techStack:)`, 'g');
  content = content.replace(regex, `$1\n      desktop: ${realMetrics[id].desktop},\n      mobile: ${realMetrics[id].mobile}\n    $2`);
}

fs.writeFileSync('src/data/projects.ts', content);
