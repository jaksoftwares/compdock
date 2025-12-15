import Link from "next/link";
import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  actionHref?: string;
}

export default function EmptyState({ title, description, icon, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="text-center py-16 px-4 border rounded-2xl bg-white shadow-sm flex flex-col items-center gap-3">
      {icon && <div className="text-orange-500 mb-1">{icon}</div>}
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {description && <p className="text-sm text-gray-500 max-w-md">{description}</p>}
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
