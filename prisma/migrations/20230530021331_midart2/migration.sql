/*
  Warnings:

  - You are about to drop the column `token` on the `saved_posts` table. All the data in the column will be lost.
  - Added the required column `drawing_id` to the `saved_posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `saved_posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "saved_posts" DROP COLUMN "token",
ADD COLUMN     "drawing_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "saved_posts" ADD CONSTRAINT "saved_posts_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "drawings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_posts" ADD CONSTRAINT "saved_posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
