interface UrlPreviewProps {
  url: string;
  title?: string;
  description?: string;
}

export function UrlPreview({ url, title, description }: UrlPreviewProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mt-2">
      <h3 className="text-sm font-medium text-gray-500">Preview:</h3>
      <div className="mt-2">
        <h4 className="text-blue-600 font-medium">{title || url}</h4>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"
            />
          </svg>
          {url}
        </p>
      </div>
    </div>
  );
}
