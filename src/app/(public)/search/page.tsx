import SearchClient from "./SearchClient";

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string | string[];
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolved = (await searchParams) ?? {};
  const raw = resolved.q;
  const initialQuery = Array.isArray(raw) ? raw[0] ?? "" : raw ?? "";

  return <SearchClient initialQuery={initialQuery} />;
}
