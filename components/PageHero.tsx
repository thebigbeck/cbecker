import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-blue/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
