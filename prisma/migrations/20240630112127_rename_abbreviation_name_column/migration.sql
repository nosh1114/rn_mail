/*
  Warnings:

  - You are about to drop the column `abbreviationName` on the `department` table. All the data in the column will be lost.
  - Added the required column `abbreviation_name` to the `department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "department" DROP COLUMN "abbreviationName",
ADD COLUMN     "abbreviation_name" TEXT NOT NULL;
