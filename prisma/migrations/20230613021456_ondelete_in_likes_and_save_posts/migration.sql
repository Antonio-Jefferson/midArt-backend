-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_drawing_id_fkey";

-- DropForeignKey
ALTER TABLE "saved_posts" DROP CONSTRAINT "saved_posts_drawing_id_fkey";

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "drawings"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "saved_posts" ADD CONSTRAINT "saved_posts_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "drawings"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
