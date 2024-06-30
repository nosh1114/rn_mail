/*
  Warnings:

  - You are about to drop the `professors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "professors" DROP CONSTRAINT "professors_department_id_fkey";

-- DropTable
DROP TABLE "professors";

-- CreateTable
CREATE TABLE "professor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profile_picture_url" TEXT NOT NULL,
    "lab_url" TEXT NOT NULL,
    "lab_name" TEXT NOT NULL,
    "lab_place" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professor_email_key" ON "professor"("email");

-- AddForeignKey
ALTER TABLE "professor" ADD CONSTRAINT "professor_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
