/*
  Warnings:

  - Added the required column `inverseRate` to the `ItemHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `ItemHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemHistory" ADD COLUMN     "inverseRate" INTEGER NOT NULL,
ADD COLUMN     "rate" INTEGER NOT NULL;
