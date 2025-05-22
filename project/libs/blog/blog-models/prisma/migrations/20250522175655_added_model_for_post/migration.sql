-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('video', 'text', 'cite', 'photo', 'link');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "content" JSONB NOT NULL,
    "type" "PostType" NOT NULL DEFAULT 'text',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
