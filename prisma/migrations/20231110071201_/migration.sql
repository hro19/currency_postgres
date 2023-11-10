/*
  Warnings:

  - The values [PHP,THB] on the enum `CurrencyCode` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CurrencyCode_new" AS ENUM ('php', 'thb');
ALTER TABLE "Item" ALTER COLUMN "currencyCode" TYPE "CurrencyCode_new" USING ("currencyCode"::text::"CurrencyCode_new");
ALTER TYPE "CurrencyCode" RENAME TO "CurrencyCode_old";
ALTER TYPE "CurrencyCode_new" RENAME TO "CurrencyCode";
DROP TYPE "CurrencyCode_old";
COMMIT;
