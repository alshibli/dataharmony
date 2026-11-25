import { testimonials, ui } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { Icon } from "../components/Icon";
import { ButtonLink, Container, DevNote, PageHeader } from "../components/ui";

const Testimonials = () => {
  usePageTitle(ui.testimonialsTitle);
  const { t } = useLang();

  return (
    <>
      <PageHeader title={t(ui.testimonialsTitle)} intro={t(ui.testimonialsIntro)} />
      <Container className="py-16 sm:py-20">
        {testimonials.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <Icon name="quote" className="size-8 text-brand-500" />
                <blockquote className="mt-4 text-lg leading-8 text-slate-700">{t(item.quote)}</blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-navy-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{t(item.role)}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-slate-50 px-6 py-12 text-center">
            <Icon name="quote" className="mx-auto size-10 text-brand-500" />
            <p className="mt-4 text-lg leading-8 text-slate-700">{t(ui.testimonialsEmpty)}</p>
            <div className="mt-8">
              <ButtonLink to="/contact" variant="secondary">
                {t(ui.contactUs)}
              </ButtonLink>
            </div>
          </div>
        )}
        <DevNote>
          No testimonials survived from the original site. Add real client quotes in <code>src/content.ts</code> →{" "}
          <code>testimonials</code>.
        </DevNote>
      </Container>
    </>
  );
};

export default Testimonials;
