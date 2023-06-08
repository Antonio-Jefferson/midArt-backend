-- CreateTable
CREATE TABLE "_challenge_postsTolikes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_challenge_postsTocomments" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_challenge_postsTosaved_posts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_challenge_postsTolikes_AB_unique" ON "_challenge_postsTolikes"("A", "B");

-- CreateIndex
CREATE INDEX "_challenge_postsTolikes_B_index" ON "_challenge_postsTolikes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_challenge_postsTocomments_AB_unique" ON "_challenge_postsTocomments"("A", "B");

-- CreateIndex
CREATE INDEX "_challenge_postsTocomments_B_index" ON "_challenge_postsTocomments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_challenge_postsTosaved_posts_AB_unique" ON "_challenge_postsTosaved_posts"("A", "B");

-- CreateIndex
CREATE INDEX "_challenge_postsTosaved_posts_B_index" ON "_challenge_postsTosaved_posts"("B");

-- AddForeignKey
ALTER TABLE "_challenge_postsTolikes" ADD CONSTRAINT "_challenge_postsTolikes_A_fkey" FOREIGN KEY ("A") REFERENCES "challenge_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_challenge_postsTolikes" ADD CONSTRAINT "_challenge_postsTolikes_B_fkey" FOREIGN KEY ("B") REFERENCES "likes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_challenge_postsTocomments" ADD CONSTRAINT "_challenge_postsTocomments_A_fkey" FOREIGN KEY ("A") REFERENCES "challenge_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_challenge_postsTocomments" ADD CONSTRAINT "_challenge_postsTocomments_B_fkey" FOREIGN KEY ("B") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_challenge_postsTosaved_posts" ADD CONSTRAINT "_challenge_postsTosaved_posts_A_fkey" FOREIGN KEY ("A") REFERENCES "challenge_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_challenge_postsTosaved_posts" ADD CONSTRAINT "_challenge_postsTosaved_posts_B_fkey" FOREIGN KEY ("B") REFERENCES "saved_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
