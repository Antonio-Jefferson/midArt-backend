/*
  Warnings:

  - You are about to drop the column `notification_text` on the `notifications` table. All the data in the column will be lost.
  - Added the required column `group_id` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notifications" DROP COLUMN "notification_text",
ADD COLUMN     "group_id" INTEGER NOT NULL,
ALTER COLUMN "notification_read" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
