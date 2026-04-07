import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { dirname as pathDirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

// Bundle lib/lti
await esbuild.build({
  entryPoints: ['lib/lti/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node22',
  outfile: 'dist/lib/lti/index.js',
  external: ['jose', 'next', 'next/*'],
  format: 'esm',
});

// Bundle individual files for direct import
const files = [
  'lib/lti/config.ts',
  'lib/lti/provider.ts',
  'lib/lti/types.ts',
];

for (const file of files) {
  await esbuild.build({
    entryPoints: [file],
    bundle: true,
    platform: 'node',
    target: 'node22',
    outfile: `dist/${file.replace('.ts', '.js')}`,
    external: ['jose', 'next', 'next/*'],
    format: 'esm',
  });
}

// Bundle API routes
const apiRoutes = [
  'app/api/lti/keys/route.ts',
  'app/api/lti/launch/route.ts',
  'app/api/lti/login/route.ts',
  'app/api/lti/status/route.ts',
];

for (const file of apiRoutes) {
  await esbuild.build({
    entryPoints: [file],
    bundle: true,
    platform: 'node',
    target: 'node22',
    outfile: `dist/${file.replace('.ts', '.js')}`,
    external: ['jose', 'next', 'next/*', 'next/server'],
    format: 'esm',
  });
}

// Bundle login-required page
await esbuild.build({
  entryPoints: ['app/lti/login-required/page.tsx'],
  bundle: true,
  platform: 'node',
  target: 'node22',
  outfile: 'dist/app/lti/login-required/page.js',
  external: ['jose', 'next', 'next/*', 'next/server', 'react', 'react/*'],
  format: 'esm',
});

console.log('Build complete!');
