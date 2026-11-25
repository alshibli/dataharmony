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
            className="grid scroll-mt-24 gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_1.7fr] lg:gap-16"
          >
            <div>
              <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={service.icon} />
              </span>
              <p className="mt-5 text-sm font-semibold text-slate-400">{num(i + 1)}</p>
              <h2 className="mt-1 text-2xl font-bold leading-snug text-navy-900 text-balance">{t(service.title)}</h2>
              <p className="mt-3 leading-7 text-slate-600">{t(service.summary)}</p>
            </div>

            <div className={`grid gap-6 ${service.groups.length > 1 ? "md:grid-cols-2" : ""}`}>
              {service.groups.map((group, gi) => (
                <div key={gi} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
                  {group.title && <h3 className="mb-4 text-lg font-bold text-navy-900">{t(group.title)}</h3>}
                  <div className="flex-1 text-slate-700">
                    <CheckList items={group.points.map(t)} />
                  </div>
                  <p className="mt-6 rounded-xl bg-brand-50 px-4 py-3 leading-7 text-navy-900">
                    <strong className="font-semibold">{t(group.valueLabel)}: </strong>
                    {t(group.value)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </Container>

      <section id="products" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-14 sm:py-20">
        <Container>
          <p className="text-sm font-semibold text-slate-400">{num(services.length + 1)}</p>
          <h2 className="mt-1 text-2xl font-bold text-navy-900 sm:text-3xl">{t(productsSection.title)}</h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">{t(ui.productsIntro)}</p>
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
