interface SkeletonGridProps {
  columns?: string;
  count?: number;
}

export default function SkeletonGrid({ columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4", count = 8 }: SkeletonGridProps) {
  return (
    <div className={`grid ${columns} gap-4`}>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse rounded-xl border bg-white p-4 space-y-3"
        >
          <div className="h-32 bg-gray-200 rounded-lg" />
          <div className="h-3 bg-gray-200 rounded" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
}
