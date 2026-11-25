import { ui } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { ButtonLink, Container } from "../components/ui";

const NotFound = () => {
  usePageTitle(ui.notFoundTitle);
  const { t } = useLang();
  return (
    <Container className="py-24 text-center">
      <img src="/mark.svg" alt="" className="mx-auto w-24 opacity-80" />
      <h1 className="mt-8 text-3xl font-bold text-navy-900">{t(ui.notFoundTitle)}</h1>
      <p className="mt-3 text-lg text-slate-600">{t(ui.notFoundText)}</p>
      <div className="mt-8">
        <ButtonLink to="/">{t(ui.backHome)}</ButtonLink>
      </div>
    </Container>
  );
};

export default NotFound;
