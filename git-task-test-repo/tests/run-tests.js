// tests/run-tests.js
// A tiny test runner that checks the /health endpoint and /api/tasks

const http = require('http');

function request(path) {
  return new Promise((resolve, reject) => {
    http.get({ host: 'localhost', port: 4000, path, timeout: 2000 }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

(async () => {
  try {
    const h = await request('/health');
    if (h.statusCode !== 200) throw new Error('health check failed');
    console.log('health OK');

    const t = await request('/api/tasks');
    if (t.statusCode !== 200) throw new Error('/api/tasks failed');
    console.log('/api/tasks OK');
    process.exit(0);
  } catch (err) {
    console.error('tests failed:', err.message);
    process.exit(2);
  }
})();
