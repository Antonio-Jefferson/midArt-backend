/*
  Warnings:

  - You are about to drop the column `userId` on the `user_tokens` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `user_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_tokens" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;
