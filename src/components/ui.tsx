import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { useLang } from "../i18n";
import { ui, type Product, type Service } from "../content";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <header className="relative overflow-hidden border-b border-slate-200 bg-brand-50/70">
      <img
        src="/mark.svg"
        alt=""
        className="pointer-events-none absolute -end-16 -top-12 w-56 opacity-[0.06] sm:-end-20 sm:-top-16 sm:w-[26rem] sm:opacity-[0.08]"
      />
      <Container className="relative py-14 sm:py-20">
        {eyebrow && <p className="text-sm font-semibold text-brand-700">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-navy-900 text-balance sm:text-4xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 text-pretty">{intro}</p>}
      </Container>
    </header>
  );
}

export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-navy-900 text-balance sm:text-3xl">{title}</h2>
      {intro && <p className="mt-3 text-lg leading-8 text-slate-600 text-pretty">{intro}</p>}
    </div>
  );
}

const buttonStyles = {
  primary: "bg-navy-900 text-white hover:bg-navy-800",
  secondary: "bg-white text-navy-900 ring-1 ring-inset ring-navy-900/20 hover:ring-navy-900/40 hover:bg-brand-50",
  light: "bg-white text-navy-900 hover:bg-brand-50",
};

export function ButtonLink({
  to,
  variant = "primary",
  arrow = false,
  children,
}: {
  to: string;
  variant?: keyof typeof buttonStyles;
  arrow?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${buttonStyles[variant]}`}
    >
      {children}
      {arrow && <Icon name="arrow" className="size-4 rtl:-scale-x-100" />}
    </Link>
  );
}

/** A note for the site owner. Only rendered by the dev server, never in the production build. */
export function DevNote({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return null;
  return (
    <div className="mt-6 rounded-lg border border-dashed border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900" dir="ltr">
      <strong className="font-semibold">Placeholder (visible in dev only): </strong>
      {children}
    </div>
  );
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { t, num } = useLang();
  return (
    <Link
      to={`/services#${service.id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10"
    >
      <div className="flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Icon name={service.icon} />
        </span>
        <span className="text-sm font-semibold text-slate-400">{num(index + 1)}</span>
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-navy-900">{t(service.title)}</h3>
      <p className="mt-2 flex-1 leading-7 text-slate-600">{t(service.summary)}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        {t(ui.details)}
        <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <Icon name="check" className="mt-1 size-5 shrink-0 text-brand-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { t } = useLang();
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-lg bg-navy-900 text-brand-500">
          <Icon name="spark" className="size-5" />
        </span>
        <h3 className="text-lg font-bold text-navy-900" dir="auto">
          {t(product.name)}
        </h3>
      </div>
      <p className="mt-4 leading-7 text-slate-700">{t(product.description)}</p>
      <div className="mt-4 flex-1 text-sm text-slate-600">
        <CheckList items={product.points.map(t)} />
      </div>
      {product.link && (
        <a
          href={product.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-700 hover:text-navy-900"
        >
          {t(product.link.label)}
          <Icon name="external" className="size-4" />
        </a>
      )}
    </article>
  );
}
