-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_drawing_id_fkey";

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "drawings"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
