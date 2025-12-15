import SearchClient from "./SearchClient";

interface SearchPageProps {
  searchParams?: {
    q?: string | string[];
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const raw = searchParams?.q;
  const initialQuery = Array.isArray(raw) ? raw[0] ?? "" : raw ?? "";

  return <SearchClient initialQuery={initialQuery} />;
}
