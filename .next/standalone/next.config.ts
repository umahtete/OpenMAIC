import type { NextConfig } from 'next';

const nodeBuiltins = [
  'assert', 'async_hooks', 'buffer', 'child_process', 'cluster',
  'console', 'constants', 'crypto', 'dgram', 'diagnostics_channel',
  'dns', 'domain', 'events', 'fs', 'http', 'http2', 'https',
  'inspector', 'module', 'net', 'os', 'path', 'perf_hooks',
  'process', 'punycode', 'querystring', 'readline', 'repl',
  'stream', 'string_decoder', 'sys', 'timers', 'tls', 'trace_events',
  'tty', 'url', 'util', 'v8', 'vm', 'wasi', 'worker_threads', 'zlib',
];

const clientAlias: Record<string, false> = { undici: false };
for (const mod of nodeBuiltins) {
  clientAlias[mod] = false;
  clientAlias[`node:${mod}`] = false;
}

const nextConfig: NextConfig = {
  output: process.env.VERCEL ? undefined : 'standalone',
  transpilePackages: ['mathml2omml'],
  serverExternalPackages: ['@prisma/client', 'prisma', 'undici'],
  outputFileTracingRoot: '/config/workspace/Christian Education/openmaic_lti',
  experimental: {
    proxyClientMaxBodySize: '200mb',
  },
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        ...clientAlias,
      };
    }
    return config;
  },
};

export default nextConfig;
