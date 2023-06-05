/*
  Warnings:

  - Added the required column `user_admin` to the `groups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "groups" ADD COLUMN     "user_admin" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_user_admin_fkey" FOREIGN KEY ("user_admin") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
