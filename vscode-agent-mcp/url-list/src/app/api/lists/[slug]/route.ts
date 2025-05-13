import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const list = await prisma.urlList.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      urls: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!list) {
    return NextResponse.json({ error: "List not found" }, { status: 404 });
  }

  return NextResponse.json(list);
}
