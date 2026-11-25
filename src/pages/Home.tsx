import { about, company, products, productsSection, services, ui } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { Icon } from "../components/Icon";
import { ButtonLink, Container, ProductCard, SectionHeading, ServiceGrid } from "../components/ui";

const Home = () => {
  usePageTitle(null);
  const { t, num } = useLang();

  const stats = [
    { value: num(services.length), label: t(ui.statAreas) },
    { value: num(products.length), label: t(ui.statProducts) },
    { value: t(ui.statVisionValue), label: t(ui.statVision) },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-500/25">
              {t(company.legalName)}
            </p>
            <h1 className="mt-6 text-[2rem] font-bold leading-[1.3] text-navy-900 text-balance sm:text-[2.6rem]">
              {t(company.tagline)}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 text-pretty">{t(company.summary)}</p>
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

      <section className="py-6 sm:py-10">
        <Container>
          <div className="flex flex-col gap-6 rounded-3xl border border-brand-500/15 bg-brand-50/60 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-10">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-sm ring-1 ring-brand-500/15">
              <Icon name="eye" className="size-7" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-brand-700">{t(about.visionTitle)}</p>
              <p className="mt-2 text-xl font-semibold leading-9 text-navy-900 text-pretty sm:text-2xl sm:leading-10">
                {t(about.vision)}
              </p>
            </div>
            <div className="shrink-0">
              <ButtonLink to="/about" variant="secondary" arrow>
                {t(ui.learnMore)}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title={t(ui.solutionsTitle)} intro={t(ui.solutionsIntro)} />
          <div className="mt-10">
            <ServiceGrid services={services} />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <SectionHeading title={t(productsSection.title)} intro={t(productsSection.intro)} />
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
