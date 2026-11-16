// VOUVRY GENÈVE & ÉLVOR - High Performance Static Web Server
// Compatible with both Local Node/agy-node execution and Vercel Serverless Environment

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 5173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.mov': 'video/quicktime',
  '.webm': 'video/webm'
};

const STATIC_EXTENSIONS = new Set(Object.keys(MIME_TYPES));

function handleRequest(req, res) {
  // Global CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let pathname = '/';
  try {
    const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    pathname = decodeURIComponent(reqUrl.pathname || '/');
  } catch (e) {
    pathname = req.url.split('?')[0] || '/';
  }

  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Candidate root directories to look for files (handles both local and Vercel runtime structures)
  const candidateDirs = [
    __dirname,
    path.join(__dirname, 'dist'),
    process.cwd(),
    path.join(process.cwd(), 'dist')
  ];

  let resolvedPath = null;
  for (const dir of candidateDirs) {
    try {
      const candidate = path.normalize(path.join(dir, pathname));
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        resolvedPath = candidate;
        break;
      }
    } catch (e) {
      // Continue search
    }
  }

  const ext = path.extname(pathname).toLowerCase();

  // If file was found, serve it with proper MIME type and streaming
  if (resolvedPath) {
    const stats = fs.statSync(resolvedPath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // HTTP Range Requests for video & media streaming
    const range = req.headers.range;
    if (range && (ext === '.mp4' || ext === '.mov' || ext === '.webm')) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(resolvedPath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
      });
      fileStream.pipe(res);
      return;
    }

    const headers = {
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Content-Length': stats.size,
    };

    // Cache static assets aggressively, no-cache for HTML
    if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache, must-revalidate';
    } else {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    }

    res.writeHead(200, headers);
    fs.createReadStream(resolvedPath).pipe(res);
    return;
  }

  // If requesting a static asset file by extension that doesn't exist, return real 404
  // NEVER return index.html for image/media/stylesheet/script extensions!
  if (ext && STATIC_EXTENSIONS.has(ext) && ext !== '.html') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`404 Not Found: Static resource "${pathname}" was not found.`);
    return;
  }

  // Fallback to index.html for SPA page navigation
  let indexFound = null;
  const indexCandidates = [
    path.join(__dirname, 'dist', 'index.html'),
    path.join(__dirname, 'index.html'),
    path.join(process.cwd(), 'dist', 'index.html'),
    path.join(process.cwd(), 'index.html')
  ];

  for (const cand of indexCandidates) {
    try {
      if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
        indexFound = cand;
        break;
      }
    } catch (e) {}
  }

  if (indexFound) {
    const content = fs.readFileSync(indexFound);
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Length': content.length,
      'Cache-Control': 'no-cache, must-revalidate'
    });
    res.end(content);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: index.html not found.');
  }
}

const server = http.createServer(handleRequest);

// Export for Vercel / serverless runtime
module.exports = server;

// Start server if run directly (CLI or npm start)
if (require.main === module) {
  server.listen(PORT, () => {
    console.log('====================================================');
    console.log('   ÉLVOR - THE POWER OF ELEGANCE');
    console.log('====================================================');
    console.log(`✓ Server running at: http://localhost:${PORT}`);
    console.log(`✓ Direct IP access: http://127.0.0.1:${PORT}`);
    console.log('====================================================');
  });
}
