import { NextResponse } from "next/server";
import getMetaData from "metadata-scraper";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    const metadata = await getMetaData(url);

    return NextResponse.json({
      title: metadata.title || "",
      description: metadata.description || "",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch metadata" },
      { status: 500 }
    );
  }
}
