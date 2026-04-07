# Database Setup Guide

This guide explains how to set up and manage the PostgreSQL database for LuxUp AI Tutor (OpenMAIC with LTI integration).

## Prerequisites

- Docker and Docker Compose
- pnpm (for local development)

## Quick Start

1. **Copy environment file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local`** with your configuration:
   ```env
   # Database
   DATABASE_URL=postgresql://openmaic:your_password@postgres:5432/openmaic
   POSTGRES_USER=openmaic
   POSTGRES_PASSWORD=your_secure_password
   POSTGRES_DB=openmaic
   
   # LTI Configuration
   LTI_CLIENT_ID=your_moodle_client_id
   LTI_PLATFORM_URL=https://courses.luxuptraining.com
   LTI_TOOL_URL=https://aitutor.luxuptraining.com
   LTI_SESSION_SECRET=your_session_secret
   ```

3. **Start services:**
   ```bash
   docker-compose up -d
   ```
   
   This will:
   - Start PostgreSQL
   - Run database migrations automatically
   - Start the OpenMAIC application

## Local Development

For local development without Docker:

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start a local PostgreSQL database:**
   ```bash
   docker run -d --name openmaic-postgres \
     -e POSTGRES_USER=openmaic \
     -e POSTGRES_PASSWORD=openmaic_secret \
     -e POSTGRES_DB=openmaic \
     -p 5432:5432 \
     postgres:16-alpine
   ```

3. **Set DATABASE_URL:**
   ```bash
   export DATABASE_URL=postgresql://openmaic:openmaic_secret@localhost:5432/openmaic
   ```

4. **Run migrations:**
   ```bash
   pnpm db:push
   ```

5. **Start development server:**
   ```bash
   pnpm dev
   ```

## Database Commands

| Command | Description |
|---------|-------------|
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:migrate` | Create and run migrations (dev) |
| `pnpm db:push` | Push schema changes without migrations |
| `pnpm db:studio` | Open Prisma Studio GUI |

## Database Schema

### LTI Tables

| Table | Description |
|-------|-------------|
| `lti_users` | LTI user mappings and profiles |
| `lti_sessions` | Active LTI sessions |
| `lti_states` | OIDC state parameters (temporary) |
| `lti_jwks` | JSON Web Key Sets for JWT signing |
| `lti_grades` | Grade passback records |
| `lti_line_items` | Grade line items from LMS |

## Troubleshooting

### Database Connection Issues

1. Check if PostgreSQL is running:
   ```bash
   docker-compose ps postgres
   ```

2. Check logs:
   ```bash
   docker-compose logs postgres
   ```

3. Test connection:
   ```bash
   docker-compose exec postgres psql -U openmaic -d openmaic
   ```

### Migration Issues

1. Reset database (WARNING: destroys all data):
   ```bash
   npx prisma migrate reset
   ```

2. View current migration status:
   ```bash
   npx prisma migrate status
   ```

## Production Deployment

For production deployment on Coolify:

1. Set environment variables in Coolify dashboard
2. Ensure `DATABASE_URL` points to your production PostgreSQL
3. Deploy - migrations will run automatically via the migrate service
