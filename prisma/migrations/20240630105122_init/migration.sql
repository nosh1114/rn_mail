/*
  Warnings:

  - You are about to drop the `professor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "professor" DROP CONSTRAINT "professor_departmentId_fkey";

-- DropTable
DROP TABLE "professor";

-- CreateTable
CREATE TABLE "professors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profile_picture_url" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL,

    CONSTRAINT "professors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professors_email_key" ON "professors"("email");

-- AddForeignKey
ALTER TABLE "professors" ADD CONSTRAINT "professors_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
