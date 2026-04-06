# LuxUp AI Tutor - LTI 1.3 Integration Deployment Guide

2: 
3: This guide explains how to deploy the LuxUp AI Tutor with LTI 1.3 integration to Moodle.
4: 
5: ---
6: 
7: ## Prerequisites
8: 
9: - LuxUp AI Tutor running at: https://aitutor.luxuptraining.com
10: - Moodle running at: https://courses.luxuptraining.com
11: - Access to modify LuxUp AI Tutor code
12: - Access to Coolify environment variables
13: 
14: ---
15: 
16: ## Step 1: Install Required npm Package
17: 
18: That LTI integration requires the `jose` package for JWT handling:
19: 
20: Run this in your LuxUp AI Tutor container:
21: 
22: ```bash
23: cd /app
24: pnpm add jose
25: ```
26: 
27: ---
28: 
29: ## Step 2: Copy LTI Files to LuxUp AI Tutor
30: 
31: Copy the following files from this workspace to your LuxUp AI Tutor installation:
32: 
33: ### Library Files (copy to `/app/lib/lti/`)
34: 
35: | Source File | Destination |
36: |-------------|-------------|
37: | `openmaic_lti/lib/lti/types.ts` | `/app/lib/lti/types.ts` |
38: | `openmaic_lti/lib/lti/config.ts` | `/app/lib/lti/config.ts` |
39: | `openmaic_lti/lib/lti/provider.ts` | `/app/lib/lti/provider.ts` |
40: | `openmaic_lti/lib/lti/index.ts` | `/app/lib/lti/index.ts` |
41: 
42: ### API Endpoints (copy to `/app/app/api/lti/`)
43: 
44: | Source File | Destination |
45: |-------------|-------------|
46: | `openmaic_lti/app/api/lti/login/route.ts` | `/app/app/api/lti/login/route.ts` |
47: | `openmaic_lti/app/api/lti/launch/route.ts` | `/app/app/api/lti/launch/route.ts` |
48: | `openmaic_lti/app/api/lti/keys/route.ts` | `/app/app/api/lti/keys/route.ts` |
49: | `openmaic_lti/app/api/lti/status/route.ts` | `/app/app/api/lti/status/route.ts` |
50: 
51: ### Middleware (copy to `/app/`)
52: 
53: | Source File | Destination |
54: |-------------|-------------|
55: | `openmaic_lti/middleware.ts` | `/app/middleware.ts` |
56: 
57: ### Login Required Page (copy to `/app/app/lti/login-required/`)
58: 
59: | Source File | Destination |
60: |-------------|-------------|
61: | `openmaic_lti/app/lti/login-required/page.tsx` | `/app/app/lti/login-required/page.tsx` |
62: 
63: ---
64: 
65: ## Step 3: Update Coolify Environment Variables
66: 
67: Add these environment variables in Coolify:
68: 
69: ```env
70: # LTI 1.3 Configuration
71: LTI_CLIENT_ID=rwAV59ErJV40G36
72: LTI_PLATFORM_URL=https://courses.luxuptraining.com
73: LTI_TOOL_URL=https://aitutor.luxuptraining.com
74: LTI_PLATFORM_ISSUER=https://courses.luxuptraining.com
75: LTI_DEPLOYMENT_ID=1
76: LTI_PLATFORM_AUTH_URL=https://courses.luxuptraining.com/mod/lti/auth.php
77: LTI_PLATFORM_TOKEN_URL=https://courses.luxuptraining.com/mod/lti/token.php
78: LTI_PLATFORM_JWKS_URL=https://courses.luxuptraining.com/mod/lti/certs.php
79: LTI_SESSION_SECRET=CHANGE_THIS_TO_A_RANDOM_32_CHAR_STRING
80: ```
81: 
82: **Generate a secure session secret:**
83: ```bash
84: openssl rand -base64 32
85: ```
86: 
87: ---
88: 
89: ## Step 4: Update Moodle Tool Configuration
90: 
91: In Moodle, update the LuxUp AI Tutor tool configuration:
92: 
93: 1. Go to: **Site administration → Plugins → Activity modules → External tool → Manage tools**
94: 2. Edit the LuxUp AI Tutor tool
95: 3. Set the **Tool URL** to: `https://aitutor.luxuptraining.com/api/lti/login`
96: 4. Set the **Initiate login URL** to: `https://aitutor.luxuptraining.com/api/lti/login`
97: 5. Set the **Redirection URI(s)** to: `https://aitutor.luxuptraining.com/api/lti/launch`
98: 6. Set the **Public keyset URL** to: `https://aitutor.luxuptraining.com/api/lti/keys`
99: 
100: ---
101: 
102: ## Step 5: Rebuild and Restart LuxUp AI Tutor
103: 
104: After copying all files and updating environment variables:
105: 
106: ```bash
107: cd /app
108: pnpm build
109: ```
110: 
111: Then restart the container in Coolify.
112: 
113: ---
114: 
115: ## Step 6: Test the Integration
116: 
117: ### 6.1 Verify LTI Status Endpoint
118: 
119: ```bash
120: curl https://aitutor.luxuptraining.com/api/lti/status
121: ```
122: 
123: Expected response:
124: ```json
125: {
126:   "status": "ok",
127:   "lti": {
128:     "configured": true,
129:     "missingVariables": [],
130:     "platform": {
131:       "issuer": "https://courses.luxuptraining.com",
132:       "clientId": "***configured***",
133:       "deploymentId": "1"
134:     }
135:   },
136:   "timestamp": "2026-03-27T..."
137: }
138: ```
139: 
140: ### 6.2 Test LTI Launch from Moodle
141: 
142: 1. Create a test course in Moodle
143: 2. Add an **External Tool** activity
144: 3. Select "LuxUp AI Tutor" as the preconfigured tool
145: 4. Click the activity to launch
146: 5. You should be redirected to LuxUp AI Tutor with an active session
147: 
148: ### 6.3 Check Logs
149: 
150: If the launch fails, check the LuxUp AI Tutor logs:
151: 
152: ```bash
153: docker logs <container-id> | grep -i lti
154: ```
155: 
156: ---
157: 
158: ## File Structure Summary
159: 
160: After deployment, your LuxUp AI Tutor structure should look like:
161: 
162: ```
163: /app/
164: ├── lib/
165: │   └── lti/
166: │       ├── index.ts
167: │       ├── types.ts
168: │       ├── config.ts
169: │       └── provider.ts
170: ├── app/
171: │   ├── api/
172: │   │   └── lti/
173: │   │       ├── login/
174: │   │       │   └── route.ts
175: │   │       ├── launch/
176: │   │       │   └── route.ts
177: │   │       ├── keys/
178: │   │       │   └── route.ts
179: │   │       └── status/
180: │   │           └── route.ts
181: │   └── lti/
182: │       └── login-required/
183: │           └── page.tsx
184: └── middleware.ts
185: ```
186: 
187: ---
188: 
189: ## Troubleshooting
190: 
191: ### Issue: "Missing LTI environment variables"
192: 
193: Check that all environment variables are set in Coolify and the container was restarted.
194: 
195: ### Issue: "Token verification failed"
196: 
197: 1. Check that Moodle's JWKS URL is accessible: `curl https://courses.luxuptraining.com/mod/lti/certs.php`
198: 2. Verify the client ID matches: `rwAV59ErJV40G36`
199: 
200: ### Issue: "Session expired"
201: 
202: The session lasts 1 hour by default. Users need to relaunch from Moodle.
203: 
204: ### Issue: "CORS errors"
205: 
206: The middleware sets `sameSite: 'none'` and `secure: true` for cookies. Ensure LuxUp AI Tutor is served over HTTPS.
207: 
208: ---
209: 
210: ## Next Steps After Successful Integration
211: 
212: 1. **Test with different roles** - Verify student vs teacher access
213: 2. **Test grade passback** - Implement AGS (Assignment and Grade Services)
214: 3. **Test deep linking** - Allow teachers to select specific content
215: 4. **Monitor usage** - Add logging for LTI launches
