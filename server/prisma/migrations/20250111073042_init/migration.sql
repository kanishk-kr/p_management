/*
  Warnings:

  - You are about to drop the column `filename` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `uplodedById` on the `Attachment` table. All the data in the column will be lost.
  - Added the required column `uploadedById` to the `Attachment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_uplodedById_fkey";

-- AlterTable
ALTER TABLE "Attachment" DROP COLUMN "filename",
DROP COLUMN "uplodedById",
ADD COLUMN     "fileName" TEXT,
ADD COLUMN     "uploadedById" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
