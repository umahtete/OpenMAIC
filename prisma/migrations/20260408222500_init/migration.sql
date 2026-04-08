-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "lti_users" (
    "id" TEXT NOT NULL,
    "sub" TEXT NOT NULL,
    "platformId" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "givenName" TEXT,
    "familyName" TEXT,
    "roles" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lti_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lti_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "platformId" TEXT NOT NULL,
    "contextId" TEXT NOT NULL,
    "contextLabel" TEXT,
    "contextTitle" TEXT,
    "resourceLinkId" TEXT,
    "resourceLinkTitle" TEXT,
    "customParams" JSONB,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lti_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lti_states" (
    "id" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "nonce" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lti_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lti_jwks" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lti_jwks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lti_grades" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contextId" TEXT NOT NULL,
    "resourceLinkId" TEXT,
    "score" DOUBLE PRECISION NOT NULL,
    "scoreMaximum" DOUBLE PRECISION NOT NULL,
    "activityProgress" TEXT NOT NULL,
    "gradingProgress" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "submitted" BOOLEAN NOT NULL DEFAULT false,
    "submittedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lti_grades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lti_line_items" (
    "id" TEXT NOT NULL,
    "contextId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "resourceId" TEXT,
    "resourceLinkId" TEXT,
    "tag" TEXT,
    "scoreMaximum" DOUBLE PRECISION NOT NULL,
    "startDateTime" TIMESTAMP(3),
    "endDateTime" TIMESTAMP(3),
    "platformUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lti_line_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lti_users_sub_key" ON "lti_users"("sub");

-- CreateIndex
CREATE INDEX "lti_users_platformId_idx" ON "lti_users"("platformId");

-- CreateIndex
CREATE INDEX "lti_users_email_idx" ON "lti_users"("email");

-- CreateIndex
CREATE INDEX "lti_sessions_userId_idx" ON "lti_sessions"("userId");

-- CreateIndex
CREATE INDEX "lti_sessions_platformId_idx" ON "lti_sessions"("platformId");

-- CreateIndex
CREATE INDEX "lti_sessions_contextId_idx" ON "lti_sessions"("contextId");

-- CreateIndex
CREATE INDEX "lti_sessions_expiresAt_idx" ON "lti_sessions"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "lti_states_state_key" ON "lti_states"("state");

-- CreateIndex
CREATE INDEX "lti_states_state_idx" ON "lti_states"("state");

-- CreateIndex
CREATE INDEX "lti_states_expiresAt_idx" ON "lti_states"("expiresAt");

-- CreateIndex
CREATE INDEX "lti_grades_userId_idx" ON "lti_grades"("userId");

-- CreateIndex
CREATE INDEX "lti_grades_contextId_idx" ON "lti_grades"("contextId");

-- CreateIndex
CREATE INDEX "lti_grades_resourceLinkId_idx" ON "lti_grades"("resourceLinkId");

-- CreateIndex
CREATE INDEX "lti_line_items_contextId_idx" ON "lti_line_items"("contextId");

-- CreateIndex
CREATE INDEX "lti_line_items_resourceLinkId_idx" ON "lti_line_items"("resourceLinkId");

-- AddForeignKey
ALTER TABLE "lti_sessions" ADD CONSTRAINT "lti_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "lti_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lti_grades" ADD CONSTRAINT "lti_grades_userId_fkey" FOREIGN KEY ("userId") REFERENCES "lti_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
