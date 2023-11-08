/*
  Warnings:

  - Added the required column `code` to the `National` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ja_name` to the `National` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "National" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "ja_name" TEXT NOT NULL;
