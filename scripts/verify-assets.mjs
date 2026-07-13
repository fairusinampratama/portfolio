import { access, readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

await access('public/favicon.svg');
await access('public/og-default.png');
await access('src/assets/fonts/ibm-plex-sans-variable.woff2');
await access('public/licenses/ibm-plex-OFL.txt');

const font = await readFile('src/assets/fonts/ibm-plex-sans-variable.woff2');
if (font.toString('ascii', 0, 4) !== 'wOF2') {
  throw new Error('IBM Plex Sans asset must be a valid WOFF2 font.');
}

const fontLicense = await readFile('public/licenses/ibm-plex-OFL.txt', 'utf8');
if (!fontLicense.includes('SIL OPEN FONT LICENSE Version 1.1')) {
  throw new Error('IBM Plex Sans must include its SIL OFL 1.1 license.');
}

const metadata = await sharp('public/og-default.png').metadata();
if (metadata.width !== 1200 || metadata.height !== 630) {
  throw new Error('public/og-default.png must be exactly 1200?630.');
}

const evidenceRoot = 'src/assets/work';
try {
  for (const project of await readdir(evidenceRoot, { withFileTypes: true })) {
    if (!project.isDirectory()) continue;
    for (const asset of await readdir(join(evidenceRoot, project.name))) {
      const path = join(evidenceRoot, project.name, asset);
      if ((await stat(path)).isFile() && !/\.(avif|jpe?g|png|webp)$/i.test(asset)) {
        throw new Error(`Unsupported evidence asset: ${path}`);
      }
    }
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

console.log('Public asset verification passed.');
