import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; path?: string }[];
}) {
  return (
    <nav aria-label="Fil d'Ariane" className="font-body text-sm text-charcoal/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {item.path ? (
              <Link href={item.path} className="hover:text-charcoal">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-charcoal">
                {item.name}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
