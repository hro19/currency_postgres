-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "CurrencyCode" ADD VALUE 'aud';
ALTER TYPE "CurrencyCode" ADD VALUE 'cny';
ALTER TYPE "CurrencyCode" ADD VALUE 'krw';
ALTER TYPE "CurrencyCode" ADD VALUE 'twd';
ALTER TYPE "CurrencyCode" ADD VALUE 'vnd';
ALTER TYPE "CurrencyCode" ADD VALUE 'jpy';
ALTER TYPE "CurrencyCode" ADD VALUE 'usd';

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ItemHistory" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;
