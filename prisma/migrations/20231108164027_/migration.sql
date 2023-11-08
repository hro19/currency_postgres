/*
  Warnings:

  - You are about to drop the column `nationalId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `National` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nationalCode` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_nationalId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "nationalId",
ADD COLUMN     "nationalCode" TEXT NOT NULL;

-- DropTable
DROP TABLE "National";
