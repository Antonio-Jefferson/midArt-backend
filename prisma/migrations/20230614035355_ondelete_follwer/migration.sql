-- DropForeignKey
ALTER TABLE "followers" DROP CONSTRAINT "followers_followed_user_id_fkey";

-- DropForeignKey
ALTER TABLE "followers" DROP CONSTRAINT "followers_follower_user_id_fkey";

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_followed_user_id_fkey" FOREIGN KEY ("followed_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_follower_user_id_fkey" FOREIGN KEY ("follower_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
