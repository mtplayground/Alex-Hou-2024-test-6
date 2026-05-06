#!/bin/sh
set -eu

echo "Applying Prisma migrations..."
npx prisma migrate deploy --schema=prisma/schema.prisma

exec "$@"
