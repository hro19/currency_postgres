/*
  Warnings:

  - You are about to drop the column `nationalCode` on the `Item` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currencyCode` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "nationalCode",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "currencyCode" TEXT NOT NULL;
