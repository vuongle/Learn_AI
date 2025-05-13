-- DropForeignKey
ALTER TABLE "Url" DROP CONSTRAINT "Url_listId_fkey";

-- DropIndex
DROP INDEX "Url_listId_idx";

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_listId_fkey" FOREIGN KEY ("listId") REFERENCES "UrlList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
