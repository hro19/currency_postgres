/*
  Warnings:

  - Made the column `userEmail` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "userEmail" SET NOT NULL;
