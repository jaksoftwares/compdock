export default function Breadcrumb({ path }: { path: string[] }) {
  return <nav>{path.join(" / ")}</nav>;
}
