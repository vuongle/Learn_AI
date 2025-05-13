"use client";

import { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MetadataQueue } from "@/lib/metadata";
import { UrlPreview } from "@/components/url-preview";

const urlSchema = z.object({
  urls: z
    .array(
      z.object({
        url: z.string().url({ message: "Please enter a valid URL" }),
        title: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .min(1, "Add at least one URL"),
});

type FormValues = z.infer<typeof urlSchema>;

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const metadataQueueRef = useRef<MetadataQueue | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      urls: [{ url: "", title: "", description: "" }],
    },
    resolver: zodResolver(urlSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "urls",
  });

  const urls = watch("urls");

  useEffect(() => {
    if (!metadataQueueRef.current) {
      metadataQueueRef.current = new MetadataQueue((index, metadata) => {
        if (!urls[index].title) setValue(`urls.${index}.title`, metadata.title);
        if (!urls[index].description)
          setValue(`urls.${index}.description`, metadata.description);
      });
    }

    return () => {
      if (metadataQueueRef.current) {
        metadataQueueRef.current.clear();
      }
    };
  }, [setValue, urls]);

  useEffect(() => {
    fields.forEach((field, index) => {
      const url = urls[index]?.url;
      if (url && metadataQueueRef.current) {
        metadataQueueRef.current.enqueue(url, index);
      }
    });
  }, [fields, urls]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create list");
      }

      const list = await response.json();
      toast.success("List created successfully!");
      router.push(`/list/${list.slug}`);
    } catch {
      toast.error("Failed to create list");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create Your URL List</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm border"
              >
                <div className="flex-1 space-y-4">
                  <div>
                    <input
                      {...register(`urls.${index}.url`)}
                      placeholder="Enter URL"
                      className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.urls?.[index]?.url ? "border-red-500" : ""
                      }`}
                    />
                    {errors.urls?.[index]?.url && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.urls[index]?.url?.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register(`urls.${index}.title`)}
                        placeholder="Title (optional)"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <textarea
                        {...register(`urls.${index}.description`)}
                        placeholder="Description (optional)"
                        rows={2}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                  {urls[index]?.url && (
                    <UrlPreview
                      url={urls[index].url}
                      title={urls[index].title}
                      description={urls[index].description}
                    />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="p-2 text-red-500 hover:text-red-700 self-start"
                  disabled={fields.length === 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {errors.urls && !Array.isArray(errors.urls) && (
            <p className="text-sm text-red-500">{errors.urls.message}</p>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => append({ url: "", title: "", description: "" })}
              className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add URL
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Create List
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
