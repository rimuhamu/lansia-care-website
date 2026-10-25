export default function Loading() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 lg:py-20">
      <div className="animate-pulse">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6 h-8 w-24"></div>
          <div className="h-10 bg-gray-200 rounded-md dark:bg-gray-700 w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2 mx-auto"></div>
        </div>
        <div className="my-8">
          <div className="w-full h-[500px] bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
        </div>
        <div className="prose prose-lg max-w-none mx-auto">
          <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-3/4 mb-4"></div>
        </div>
      </div>
    </div>
  );
}
