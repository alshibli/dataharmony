import { about, company, services, ui, values } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { Icon, type IconName } from "../components/Icon";
import { Container, DevNote, PageHeader, SectionHeading, ServiceGrid } from "../components/ui";

const About = () => {
  usePageTitle(ui.aboutTitle);
  const { t, num } = useLang();

  const statements: { icon: IconName; title: string; text: string }[] = [
    { icon: "eye", title: t(about.visionTitle), text: t(about.vision) },
    { icon: "target", title: t(about.missionTitle), text: t(about.mission) },
  ];

  return (
    <>
      <PageHeader eyebrow={t(company.legalName)} title={t(ui.aboutTitle)} intro={t(about.intro)} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {statements.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={s.icon} />
                </span>
                <h2 className="mt-5 text-xl font-bold text-navy-900">{s.title}</h2>
                <p className="mt-3 text-lg leading-8 text-slate-700 text-pretty">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading title={t(about.valuesTitle)} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <li key={v.en} className="rounded-2xl bg-navy-900 p-6 text-white">
                  <span className="text-sm font-semibold text-brand-500">{num(i + 1)}</span>
                  <p className="mt-3 text-lg font-semibold leading-8">{t(v)}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title={t(ui.areasTitle)} />
          <div className="mt-10">
            <ServiceGrid services={services} />
          </div>
          <DevNote>
            The About page should also introduce the team. No team details are available yet; add them in{" "}
            <code>src/content.ts</code> → <code>about</code>.
          </DevNote>
        </Container>
      </section>
    </>
  );
};

export default About;
