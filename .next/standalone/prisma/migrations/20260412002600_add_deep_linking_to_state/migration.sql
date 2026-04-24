-- AlterTable
ALTER TABLE "lti_states" ADD COLUMN "isDeepLinking" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "lti_states" ADD COLUMN "deepLinkingData" TEXT;
