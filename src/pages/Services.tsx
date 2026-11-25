import { products, productsSection, services, ui } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { Icon } from "../components/Icon";
import { CheckList, Container, PageHeader, ProductCard } from "../components/ui";

const Services = () => {
  usePageTitle(ui.solutionsTitle);
  const { t, num } = useLang();

  return (
    <>
      <PageHeader title={t(ui.solutionsTitle)} intro={t(ui.solutionsIntro)} />

      <Container className="divide-y divide-slate-200">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className="grid scroll-mt-24 items-start gap-6 py-12 sm:py-14 lg:grid-cols-[1fr_1.5fr] lg:gap-16"
          >
            <div className="flex items-start gap-4 lg:block">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={service.icon} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-400 lg:mt-5">{num(i + 1)}</p>
                <h2 className="mt-1 text-2xl font-bold leading-snug text-navy-900 text-balance">{t(service.title)}</h2>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 sm:p-7">
              <CheckList items={service.points.map(t)} />
            </div>
          </section>
        ))}
      </Container>

      <section id="products" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-14 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">{t(productsSection.title)}</h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">{t(productsSection.intro)}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
