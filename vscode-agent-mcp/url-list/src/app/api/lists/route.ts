import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const createListSchema = z.object({
  urls: z.array(
    z.object({
      url: z.string().url(),
      title: z.string().optional(),
      description: z.string().optional(),
    })
  ),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { urls } = createListSchema.parse(body);

    const list = await prisma.urlList.create({
      data: {
        slug: Math.random().toString(36).substring(2, 8),
        urls: {
          create: urls.map((url, index) => ({
            ...url,
            order: index,
          })),
        },
      },
      include: {
        urls: true,
      },
    });

    return NextResponse.json(list);
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
