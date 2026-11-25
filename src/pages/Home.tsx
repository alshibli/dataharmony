import { company, products, productsSection, services, ui } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { ButtonLink, Container, ProductCard, SectionHeading, ServiceCard } from "../components/ui";

const Home = () => {
  usePageTitle(null);
  const { t, num } = useLang();

  const stats = [
    { value: num(services.length), label: t(ui.statAreas) },
    { value: num(products.length), label: t(ui.statProducts) },
    { value: num(2), label: t(ui.statLanguages) },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-500/25">
              {t(company.legalName)}
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.2] text-navy-900 text-balance sm:text-5xl">
              {t(company.tagline)}
            </h1>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/services" arrow>
                {t(ui.exploreServices)}
              </ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                {t(ui.contactUs)}
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-xl font-bold text-navy-900 sm:text-2xl">{s.value}</dd>
                  <dd className="mt-1 text-sm text-slate-500">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-60 sm:max-w-sm lg:max-w-none">
            <div className="absolute inset-6 rounded-full bg-brand-100/70 blur-3xl" aria-hidden="true" />
            <div className="relative grid aspect-square place-items-center rounded-full bg-white shadow-xl shadow-brand-500/10 ring-1 ring-slate-200">
              <img src="/mark.svg" alt="" className="w-3/5" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title={t(ui.solutionsTitle)} intro={t(ui.solutionsIntro)} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <SectionHeading title={t(productsSection.title)} intro={t(ui.productsIntro)} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 sm:px-12">
            <img
              src="/mark.svg"
              alt=""
              className="pointer-events-none absolute -bottom-24 -end-16 w-72 opacity-15"
            />
            <div className="relative max-w-xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{t(ui.ctaTitle)}</h2>
              <p className="mt-3 text-lg leading-8 text-white/80">{t(ui.ctaText)}</p>
              <div className="mt-8">
                <ButtonLink to="/contact" variant="light" arrow>
                  {t(ui.contactUs)}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
