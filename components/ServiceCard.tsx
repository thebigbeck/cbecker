import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: "amber" | "blue";
};

export default function ServiceCard({
  href,
  icon: Icon,
  title,
  description,
  accent = "amber",
}: ServiceCardProps) {
  const accentClasses =
    accent === "amber"
      ? "bg-amber/15 text-amber group-hover:bg-amber group-hover:text-ink"
      : "bg-blue/15 text-blue group-hover:bg-blue group-hover:text-ink";

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <span
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${accentClasses}`}
      >
        <Icon size={24} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
        Mehr erfahren
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
