/*
  Warnings:

  - You are about to drop the column `departmentId` on the `professors` table. All the data in the column will be lost.
  - Added the required column `department_id` to the `professors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "professors" DROP CONSTRAINT "professors_departmentId_fkey";

-- AlterTable
ALTER TABLE "professors" DROP COLUMN "departmentId",
ADD COLUMN     "department_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "professors" ADD CONSTRAINT "professors_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
