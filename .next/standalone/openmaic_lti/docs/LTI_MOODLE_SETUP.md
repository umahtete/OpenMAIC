# LTI 1.3 Integration Guide for Moodle Administrators

This guide explains how to configure LuxUp AI Tutor as an LTI 1.3 tool in Moodle/IOMAD.

## Prerequisites

- Moodle 3.10 or higher with LTI 1.3 support
- Administrator access to Moodle
- LuxUp AI Tutor deployed and accessible at https://aitutor.luxuptraining.com

## Step 1: Access External Tool Settings

1. Log in to Moodle as an administrator
2. Go to **Site administration** → **Plugins** → **Activity modules** → **External tool**
3. Click **Manage tools** or **Add external tool**

## Step 2: Configure the Tool Manually

Click **Add external tool** and fill in the following information:

### Tool Settings

| Field | Value |
|-------|-------|
| **Tool name** | `LuxUp AI Tutor` |
| **Tool URL** | `https://aitutor.luxuptraining.com/api/lti/login` |
| **Tool description** | `AI-powered personalized tutoring with grade passback` |
| **LTI version** | `LTI 1.3` |

### Security Settings

| Field | Value |
|-------|-------|
| **Public keyset URL** | `https://aitutor.luxuptraining.com/api/lti/keys` |
| **Initiate login URL** | `https://aitutor.luxuptraining.com/api/lti/login` |
| **Redirection URI(s)** | `https://aitutor.luxuptraining.com/api/lti/launch` |

### Services

Check the following services to enable:
- ✅ **Deep linking** - Allows teachers to select content to embed
- ✅ **Assignment and Grade Services** - Enables grade passback to Moodle gradebook

## Step 3: Get Client ID

After saving the tool, Moodle will display:
- **Client ID** (e.g., `rwAV59ErJV40G36`)
- **Deployment ID** (usually `1`)

Copy these values - you'll need them for the next step.

## Step 4: Configure Environment Variables

In your LuxUp AI Tutor deployment (Coolify), set these environment variables:

### Required Variables

```env
LTI_CLIENT_ID=<Client ID from Moodle>
LTI_PLATFORM_URL=https://courses.luxuptraining.com
LTI_TOOL_URL=https://aitutor.luxuptraining.com
LTI_SESSION_SECRET=<32-character-random-string>
```

### Example Configuration

```env
LTI_CLIENT_ID=rwAV59ErJV40G36
LTI_PLATFORM_URL=https://courses.luxuptraining.com
LTI_TOOL_URL=https://aitutor.luxuptraining.com
LTI_DEPLOYMENT_ID=1
LTI_SESSION_SECRET=luxup-lti-session-secret-2024-change-me
```

### Optional Variables (defaults provided)

```env
LTI_PLATFORM_ISSUER=https://courses.luxuptraining.com
LTI_PLATFORM_AUTH_URL=https://courses.luxuptraining.com/mod/lti/auth.php
LTI_PLATFORM_TOKEN_URL=https://courses.luxuptraining.com/mod/lti/token.php
LTI_PLATFORM_JWKS_URL=https://courses.luxuptraining.com/mod/lti/certs.php
```

## Step 5: Test the Integration

### Test Launch

1. Create a course in Moodle or use an existing one
2. Add an **External tool** activity
3. Select **LuxUp AI Tutor**
4. Click **Save and return to course**
5. Click the activity to launch

### Expected Behavior

- User is redirected to LuxUp AI Tutor
- User is automatically logged in (no login prompt)
- User's name and email are passed from Moodle
- User's role (student/teacher) is correctly mapped

### Test Grade Passback

1. As a student, complete an activity in LuxUp AI Tutor
2. Check Moodle gradebook
3. Verify the grade appears

### Test Deep Linking

1. As a teacher, add an External tool activity
2. Select **LuxUp AI Tutor**
3. Choose content to embed
4. Verify content appears in course

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| "Invalid tool configuration" | Verify Client ID matches exactly |
| "Login failed" | Check LTI_SESSION_SECRET is set |
| "Session expired" | Increase session timeout or refresh page |
| "Grade not syncing" | Verify AGS is enabled in Moodle tool settings |
| "Deep linking not working" | Check deep linking is enabled in Moodle tool settings |

### Debug Endpoints

- **Health Check**: `https://aitutor.luxuptraining.com/api/lti/status`
- **JWKS Keys**: `https://aitutor.luxuptraining.com/api/lti/keys`

### Logs

Check application logs for:
- `[LTI]` prefix messages
- `[Grade Passback]` prefix messages
- `[Deep Linking]` prefix messages

## Security Considerations

1. **HTTPS Required**: Both Moodle and LuxUp AI Tutor must HTTPS
2. **Session Secret**: Use a strong, random 32+ character secret
3. **CORS**: Configured automatically for LTI endpoints
4. **Cookies**: Session cookies use `SameSite=None; Secure`

## Support

For issues or contact:
- LuxUp Training Support
- Check the deployment logs in Coolify
- Review Moodle LTI debug logs (enable debug mode in Moodle)
