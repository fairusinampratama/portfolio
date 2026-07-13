import sharp from 'sharp';

await sharp('src/assets/brand/og-default.svg').png().toFile('public/og-default.png');
console.log('Generated public/og-default.png.');
