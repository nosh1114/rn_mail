/*
  Warnings:

  - Added the required column `lab_name` to the `professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lab_place` to the `professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lab_url` to the `professors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "professors" ADD COLUMN     "lab_name" TEXT NOT NULL,
ADD COLUMN     "lab_place" TEXT NOT NULL,
ADD COLUMN     "lab_url" TEXT NOT NULL;
