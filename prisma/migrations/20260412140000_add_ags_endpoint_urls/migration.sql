-- AlterTable: Add AGS endpoint URL fields to LtiLineItem
ALTER TABLE "lti_line_items" ADD COLUMN "scoresUrl" TEXT;
ALTER TABLE "lti_line_items" ADD COLUMN "resultsUrl" TEXT;
ALTER TABLE "lti_line_items" ADD COLUMN "lineItemsUrl" TEXT;
ALTER TABLE "lti_line_items" ADD COLUMN "lineItemUrl" TEXT;
ALTER TABLE "lti_line_items" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
