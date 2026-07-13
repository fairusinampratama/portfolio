import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const roots = ['src', 'public', 'dist'];
const textExtensions = new Set([
  '.astro',
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.mdx',
  '.mjs',
  '.svg',
  '.ts',
  '.txt',
  '.xml',
]);

const checks = [
  ['reference directory path', /(?:^|[\\/])references[\\/]/i],
  ['source CV filename', /Fairus-Inam-Pratama-Laravel-Developer-CV/i],
  ['unfinished public copy', /\b(?:TODO|TBD|lorem ipsum)\b/i],
  ['private key material', /BEGIN [A-Z ]*PRIVATE KEY|APP_KEY\s*=|DB_PASSWORD\s*=/i],
  [
    'private IPv4 address',
    /\b(?:10(?:\.\d{1,3}){3}|192\.168(?:\.\d{1,3}){2}|172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2})\b/,
  ],
  ['Indonesian phone number', /(?:\+?62|0)8\d{8,11}\b/],
  ['long identity-like number', /\b\d{10,16}\b/],
  ['local absolute path', /(?:[A-Z]:\\|\\\\wsl|\/home\/[^/]+\/)/i],
];

async function filesUnder(root) {
  try {
    if (!(await stat(root)).isDirectory()) return [];
  } catch {
    return [];
  }

  const found = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) found.push(...(await filesUnder(path)));
    else if (textExtensions.has(extname(entry.name))) found.push(path);
  }
  return found;
}

const failures = [];

for (const root of roots) {
  for (const file of await filesUnder(root)) {
    const content = await readFile(file, 'utf8');
    for (const [label, pattern] of checks) {
      if (pattern.test(content)) failures.push(`${relative('.', file)}: ${label}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Public-output privacy scan failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Public-output privacy scan passed.');
