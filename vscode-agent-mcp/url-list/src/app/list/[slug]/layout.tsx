import type { Metadata } from "next";
import { prisma } from "@/lib/db";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const list = await prisma.urlList.findUnique({
    where: { slug: params.slug },
    include: { urls: true },
  });

  if (!list) {
    return {
      title: "List Not Found - The Urlist",
      description: "This URL list does not exist or has been removed.",
    };
  }

  const description = list.urls
    .slice(0, 3)
    .map((url) => url.title || url.url)
    .join(", ");

  return {
    title: `${list.urls.length} URLs - The Urlist`,
    description: `Check out this collection of URLs: ${description}${
      list.urls.length > 3 ? "..." : ""
    }`,
    openGraph: {
      title: `${list.urls.length} URLs - The Urlist`,
      description: `Check out this collection of URLs: ${description}${
        list.urls.length > 3 ? "..." : ""
      }`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${list.urls.length} URLs - The Urlist`,
      description: `Check out this collection of URLs: ${description}${
        list.urls.length > 3 ? "..." : ""
      }`,
    },
  };
}

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
