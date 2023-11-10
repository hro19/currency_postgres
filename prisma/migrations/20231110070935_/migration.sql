/*
  Warnings:

  - Changed the type of `currencyCode` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `updated_at` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `ItemHistory` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "CurrencyCode" AS ENUM ('php', 'thb');

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "currencyCode",
ADD COLUMN     "currencyCode" "CurrencyCode" NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "ItemHistory" ALTER COLUMN "updated_at" SET NOT NULL;
