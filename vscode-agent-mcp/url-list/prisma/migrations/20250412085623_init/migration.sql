-- CreateTable
CREATE TABLE "UrlList" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UrlList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Url" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" INTEGER NOT NULL,
    "listId" TEXT NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UrlList_slug_key" ON "UrlList"("slug");

-- CreateIndex
CREATE INDEX "Url_listId_idx" ON "Url"("listId");

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_listId_fkey" FOREIGN KEY ("listId") REFERENCES "UrlList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
