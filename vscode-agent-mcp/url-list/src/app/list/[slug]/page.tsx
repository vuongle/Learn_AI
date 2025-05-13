"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import type { UrlList } from "@/types";

async function getList(slug: string) {
  const res = await fetch(`/api/lists/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch list");
  return res.json();
}

export default function ListPage({ params }: { params: { slug: string } }) {
  const [list, setList] = useState<UrlList | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getList(params.slug)
      .then(setList)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [params.slug]);

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard!");
  };

  if (isLoading) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-24 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!list) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">List Not Found</h1>
          <p className="text-gray-600 mb-8">
            This URL list does not exist or has been removed.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create New List
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">URL List</h1>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            Share List
          </button>
        </div>

        <div className="space-y-6">
          {list.urls.map((url) => (
            <div
              key={url.id}
              className="bg-white border rounded-lg p-6 hover:shadow-lg transition group"
            >
              <a
                href={url.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-2"
              >
                <h2 className="text-xl font-semibold text-blue-600 group-hover:text-blue-800">
                  {url.title || url.url}
                </h2>
                {url.description && (
                  <p className="text-gray-600">{url.description}</p>
                )}
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {url.url}
                </p>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Create New List
          </button>
        </div>
      </div>
    </main>
  );
}
