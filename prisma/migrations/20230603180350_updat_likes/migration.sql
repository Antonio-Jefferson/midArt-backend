/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `likes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[drawing_id]` on the table `likes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "likes_user_id_key" ON "likes"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "likes_drawing_id_key" ON "likes"("drawing_id");
