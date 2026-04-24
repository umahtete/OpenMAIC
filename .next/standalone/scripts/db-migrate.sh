#!/bin/sh
# Database migration script for production deployment
# This script runs Prisma migrations against the database

set -e

echo "Running database migrations..."

# Wait for database to be ready
if [ -n "$DATABASE_URL" ]; then
  echo "Waiting for database to be ready..."
  sleep 5
  
  # Run migrations
  npx prisma migrate deploy
  
  echo "Migrations completed successfully!"
else
  echo "DATABASE_URL not set, skipping migrations"
fi
