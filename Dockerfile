# ---- Stage 1: Base ----
FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@10.28.0 --activate

WORKDIR /app

# ---- Stage 2: Builder (combined deps and build) ----
FROM base AS builder

# Native build tools for sharp, @napi-rs/canvas
RUN apk add --no-cache python3 build-base g++ cairo-dev pango-dev jpeg-dev giflib-dev librsvg-dev

# Copy everything
COPY . .

# Install dependencies (skip postinstall to avoid issues)
RUN pnpm install --ignore-scripts

# Build local packages
RUN cd packages/mathml2omml && npm run build && cd ../.. && \
    cd packages/pptxgenjs && npm run build && cd ../..

# Generate Prisma client
RUN npx prisma generate

# Build Next.js with more memory
RUN NODE_OPTIONS="--max_old_space_size=4096" pnpm build

# Verify build output
RUN ls -la .next/ && \
    test -d .next/standalone || (echo "ERROR: .next/standalone not found"; exit 1)

# ---- Stage 3: Runner ----
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN apk add --no-cache libc6-compat cairo pango jpeg giflib librsvg openssl

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# Copy the entire node_modules from builder (includes Prisma in pnpm structure)
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
