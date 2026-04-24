# Production Deployment Guide

This guide shows how to deploy LuxUp AI Tutor using pre-built artifacts.

## Why This Approach?

The build works perfectly locally but fails on the server. This approach bypasses the server build entirely by building locally and deploying the pre-built files.

## Prerequisites

- Node.js 22+ installed locally
- pnpm installed (`npm install -g pnpm`)
- Docker installed locally (for testing)
- Access to Coolify deployment

## Step 1: Build Locally

```bash
# Navigate to project directory
cd /path/to/openmaic_lti

# Install dependencies
pnpm install

# Build the application
pnpm build

# Verify build succeeded
ls -la .next/standalone/
```

You should see:
- `.next/standalone/` directory exists
- `.next/standalone/server.js` file exists
- `.next/static/` directory exists

## Step 2: Commit and Push

```bash
# Add the production Dockerfile
git add Dockerfile.production

# Commit
git commit -m "feat: Add production Dockerfile for pre-built artifacts"

# Push to repository
git push origin lti-integration
```

## Step 3: Configure Coolify

1. **In Coolify dashboard:**
   - Go to your service configuration
   - Change the Dockerfile path from `Dockerfile` to `Dockerfile.production`
   - Save the configuration

2. **Deploy:**
   - Trigger a new deployment
   - The build should now succeed because it's not building, just copying files

## Step 4: Verify Deployment

1. Check that the application starts successfully
2. Visit your deployed URL
3. Verify the LuxUp branding appears (gold/navy colors, "L" favicon)

## Troubleshooting

### If deployment still fails:

1. **Check if .next folder was committed:**
   ```bash
   git status
   ```
   The `.next` folder should be in `.gitignore`. You may need to force add it:
   ```bash
   git add -f .next
   git commit -m "chore: Add pre-built .next folder"
   git push
   ```

2. **Alternative: Use Git LFS or artifact upload:**
   - Some platforms have size limits on git repositories
   - Consider using Git LFS for the `.next` folder
   - Or manually upload the `.next` folder to the server

### If the app starts but has errors:

1. Check environment variables are set correctly in Coolify
2. Check database connection string
3. Check logs for specific error messages

## Why This Works

- **No server-side compilation:** All TypeScript/Next.js compilation happens on your local machine
- **No memory issues:** The server just copies files, doesn't need 4GB RAM for building
- **No dependency issues:** Production dependencies are minimal compared to dev dependencies
- **Faster deployments:** No 2-3 minute build time

## Future Improvements

Once this works, consider:
1. Setting up CI/CD to build locally and push artifacts
2. Using a proper artifact repository (Docker registry, S3, etc.)
3. Optimizing the production Dockerfile further
