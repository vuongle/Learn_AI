"use client";

export default function Error() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">List Not Found</h1>
        <p className="text-gray-600 mb-8">
          The URL list you're looking for doesn't exist or has been removed.
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
