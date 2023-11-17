/*
  Warnings:

  - You are about to drop the column `name` on the `Shipping` table. All the data in the column will be lost.
  - Added the required column `destinatary` to the `Shipping` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shipping" DROP COLUMN "name",
ADD COLUMN     "destinatary" TEXT NOT NULL;
