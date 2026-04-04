# LTI 1.3 Integration Deployment Guide for OpenMAIC

This guide explains how to deploy the LTI 1.3 integration code to your OpenMAIC instance.

## Prerequisites

- OpenMAIC running at: https://aitutor.luxuptraining.com
- Moodle running at: https://courses.luxuptraining.com
- Access to modify OpenMAIC code
- Access to Coolify environment variables

---

## Step 1: Install Required npm Package

The LTI integration requires the `jose` package for JWT handling.

Run this in your OpenMAIC container:

```bash
cd /app
pnpm add jose
```

---

## Step 2: Copy LTI Files to OpenMAIC

Copy the following files from this workspace to your OpenMAIC installation:

### Library Files (copy to `/app/lib/lti/`)

| Source File | Destination |
|-------------|-------------|
| `openmaic_lti/lib/lti/types.ts` | `/app/lib/lti/types.ts` |
| `openmaic_lti/lib/lti/config.ts` | `/app/lib/lti/config.ts` |
| `openmaic_lti/lib/lti/provider.ts` | `/app/lib/lti/provider.ts` |
| `openmaic_lti/lib/lti/index.ts` | `/app/lib/lti/index.ts` |

### API Endpoints (copy to `/app/app/api/lti/`)

| Source File | Destination |
|-------------|-------------|
| `openmaic_lti/app/api/lti/login/route.ts` | `/app/app/api/lti/login/route.ts` |
| `openmaic_lti/app/api/lti/launch/route.ts` | `/app/app/api/lti/launch/route.ts` |
| `openmaic_lti/app/api/lti/keys/route.ts` | `/app/app/api/lti/keys/route.ts` |
| `openmaic_lti/app/api/lti/status/route.ts` | `/app/app/api/lti/status/route.ts` |

### Middleware (copy to `/app/`)

| Source File | Destination |
|-------------|-------------|
| `openmaic_lti/middleware.ts` | `/app/middleware.ts` |

### Login Required Page (copy to `/app/app/lti/login-required/`)

| Source File | Destination |
|-------------|-------------|
| `openmaic_lti/app/lti/login-required/page.tsx` | `/app/app/lti/login-required/page.tsx` |

---

## Step 3: Update Coolify Environment Variables

Add these environment variables in Coolify:

```env
# LTI 1.3 Configuration
LTI_CLIENT_ID=rwAV59ErJV40G36
LTI_PLATFORM_URL=https://courses.luxuptraining.com
LTI_TOOL_URL=https://aitutor.luxuptraining.com
LTI_PLATFORM_ISSUER=https://courses.luxuptraining.com
LTI_DEPLOYMENT_ID=1
LTI_PLATFORM_AUTH_URL=https://courses.luxuptraining.com/mod/lti/auth.php
LTI_PLATFORM_TOKEN_URL=https://courses.luxuptraining.com/mod/lti/token.php
LTI_PLATFORM_JWKS_URL=https://courses.luxuptraining.com/mod/lti/certs.php
LTI_SESSION_SECRET=CHANGE_THIS_TO_A_RANDOM_32_CHAR_STRING
```

**Generate a secure session secret:**
```bash
openssl rand -base64 32
```

---

## Step 4: Update Moodle Tool Configuration

In Moodle, update the OpenMAIC tool configuration:

1. Go to: **Site administration → Plugins → Activity modules → External tool → Manage tools**
2. Edit the OpenMAIC tool
3. Set the **Tool URL** to: `https://aitutor.luxuptraining.com/api/lti/login`
4. Set the **Initiate login URL** to: `https://aitutor.luxuptraining.com/api/lti/login`
5. Set the **Redirection URI(s)** to: `https://aitutor.luxuptraining.com/api/lti/launch`
6. Set the **Public keyset URL** to: `https://aitutor.luxuptraining.com/api/lti/keys`

---

## Step 5: Rebuild and Restart OpenMAIC

After copying all files and updating environment variables:

```bash
cd /app
pnpm build
```

Then restart the container in Coolify.

---

## Step 6: Test the Integration

### 6.1 Verify LTI Status Endpoint

```bash
curl https://aitutor.luxuptraining.com/api/lti/status
```

Expected response:
```json
{
  "status": "ok",
  "lti": {
    "configured": true,
    "missingVariables": [],
    "platform": {
      "issuer": "https://courses.luxuptraining.com",
      "clientId": "***configured***",
      "deploymentId": "1"
    }
  },
  "timestamp": "2026-03-27T..."
}
```

### 6.2 Test LTI Launch from Moodle

1. Create a test course in Moodle
2. Add an **External Tool** activity
3. Select "OpenMAIC AI Tutor" as the preconfigured tool
4. Click the activity to launch
5. You should be redirected to OpenMAIC with an active session

### 6.3 Check Logs

If the launch fails, check the OpenMAIC logs:

```bash
docker logs <container-id> | grep -i lti
```

---

## File Structure Summary

After deployment, your OpenMAIC structure should look like:

```
/app/
├── lib/
│   └── lti/
│       ├── index.ts
│       ├── types.ts
│       ├── config.ts
│       └── provider.ts
├── app/
│   ├── api/
│   │   └── lti/
│   │       ├── login/
│   │       │   └── route.ts
│   │       ├── launch/
│   │       │   └── route.ts
│   │       ├── keys/
│   │       │   └── route.ts
│   │       └── status/
│   │           └── route.ts
│   └── lti/
│       └── login-required/
│           └── page.tsx
└── middleware.ts
```

---

## Troubleshooting

### Issue: "Missing LTI environment variables"

Check that all environment variables are set in Coolify and the container was restarted.

### Issue: "Token verification failed"

1. Check that Moodle's JWKS URL is accessible: `curl https://courses.luxuptraining.com/mod/lti/certs.php`
2. Verify the client ID matches: `rwAV59ErJV40G36`

### Issue: "Session expired"

The session lasts 1 hour by default. Users need to relaunch from Moodle.

### Issue: "CORS errors"

The middleware sets `sameSite: 'none'` and `secure: true` for cookies. Ensure OpenMAIC is served over HTTPS.

---

## Next Steps After Successful Integration

1. **Test with different roles** - Verify student vs teacher access
2. **Test grade passback** - Implement AGS (Assignment and Grade Services)
3. **Test deep linking** - Allow teachers to select specific content
4. **Monitor usage** - Add logging for LTI launches
