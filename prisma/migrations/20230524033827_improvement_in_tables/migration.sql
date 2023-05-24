/*
  Warnings:

  - You are about to drop the column `expired_at` on the `saved_posts` table. All the data in the column will be lost.
  - You are about to drop the column `expired_at` on the `user_tokens` table. All the data in the column will be lost.
  - Made the column `challenge_id` on table `challenge_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `challenge_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `challenge_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `challenge_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `challenge_name` on table `challenges` required. This step will fail if there are existing NULL values in that column.
  - Made the column `challenge_description` on table `challenges` required. This step will fail if there are existing NULL values in that column.
  - Made the column `challenge_image` on table `challenges` required. This step will fail if there are existing NULL values in that column.
  - Made the column `challenge_start_date` on table `challenges` required. This step will fail if there are existing NULL values in that column.
  - Made the column `challenge_end_date` on table `challenges` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `challenges` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `challenges` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `drawing_id` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comment_text` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `drawings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `drawings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `drawing_image` on table `drawings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `drawings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `drawings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event_id` on table `event_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `event_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `event_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `event_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event_name` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event_description` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event_image` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event_start_date` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event_end_date` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `follower_user_id` on table `followers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `followed_user_id` on table `followers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `followers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `followers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `group_id` on table `group_members` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `group_members` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `group_members` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `group_members` required. This step will fail if there are existing NULL values in that column.
  - Made the column `group_name` on table `groups` required. This step will fail if there are existing NULL values in that column.
  - Made the column `group_description` on table `groups` required. This step will fail if there are existing NULL values in that column.
  - Made the column `group_image` on table `groups` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `groups` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `groups` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `drawing_id` on table `likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `group_id` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message_text` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `notification_text` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `notification_read` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `saved_posts` table without a default value. This is not possible if the table is not empty.
  - Made the column `token` on table `saved_posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `saved_posts` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userId` to the `user_tokens` table without a default value. This is not possible if the table is not empty.
  - Made the column `token` on table `user_tokens` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `user_tokens` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "challenge_participants" ALTER COLUMN "challenge_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "challenges" ALTER COLUMN "challenge_name" SET NOT NULL,
ALTER COLUMN "challenge_description" SET NOT NULL,
ALTER COLUMN "challenge_image" SET NOT NULL,
ALTER COLUMN "challenge_start_date" SET NOT NULL,
ALTER COLUMN "challenge_end_date" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "drawing_id" SET NOT NULL,
ALTER COLUMN "comment_text" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "drawings" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "drawing_image" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "event_participants" ALTER COLUMN "event_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "event_name" SET NOT NULL,
ALTER COLUMN "event_description" SET NOT NULL,
ALTER COLUMN "event_image" SET NOT NULL,
ALTER COLUMN "event_start_date" SET NOT NULL,
ALTER COLUMN "event_end_date" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "followers" ALTER COLUMN "follower_user_id" SET NOT NULL,
ALTER COLUMN "followed_user_id" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "group_members" ALTER COLUMN "group_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "group_name" SET NOT NULL,
ALTER COLUMN "group_description" SET NOT NULL,
ALTER COLUMN "group_image" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "likes" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "drawing_id" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "messages" ALTER COLUMN "group_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "message_text" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "notifications" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "notification_text" SET NOT NULL,
ALTER COLUMN "notification_read" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "saved_posts" DROP COLUMN "expired_at",
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL,
ALTER COLUMN "token" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_tokens" DROP COLUMN "expired_at",
ADD COLUMN     "userId" VARCHAR NOT NULL,
ALTER COLUMN "token" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "username" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
