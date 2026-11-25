import { about, company, services, ui } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { Icon } from "../components/Icon";
import { Container, DevNote, PageHeader, SectionHeading, ServiceCard } from "../components/ui";

const About = () => {
  usePageTitle(ui.aboutTitle);
  const { t } = useLang();

  // Every solution on the original page ends with the value it brings; collect them here.
  const outcomes = services.flatMap((s) =>
    s.groups.map((g) => ({ key: `${s.id}-${t(g.value)}`, area: g.title ? `${t(s.title)}: ${t(g.title)}` : t(s.title), value: t(g.value) })),
  );

  return (
    <>
      <PageHeader eyebrow={t(company.legalName)} title={t(ui.aboutTitle)} intro={t(about.intro)} />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={t(ui.areasTitle)} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <DevNote>
            No About-page text survived. Add the company story, founding year, team and location in{" "}
            <code>src/content.ts</code> → <code>about</code>.
          </DevNote>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title={t(about.outcomesTitle)} />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {outcomes.map((o) => (
              <li key={o.key} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <Icon name="check" className="mt-0.5 size-6 shrink-0 text-brand-500" />
                <div>
                  <p className="font-semibold text-navy-900">{o.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{o.area}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
};

export default About;
