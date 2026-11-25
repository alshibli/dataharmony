import { Link } from "react-router-dom";
import { Icon } from "./components/Icon";
import { Container } from "./components/ui";
import { company, contact, nav, ui } from "./content";
import { useLang } from "./i18n";

const Footer = () => {
  const { t } = useLang();
  const address = t(contact.address);

  return (
    <footer className="bg-navy-950 text-white/75">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/logo-light.svg" alt={t(company.name)} className="h-14 w-auto" />
          <p className="mt-5 max-w-sm leading-7">{t(company.tagline)}</p>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 self-start text-sm md:grid-cols-1">
          {nav.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-white">
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>

        {(contact.email || contact.phone || address) && (
          <ul className="space-y-3 self-start text-sm">
            {contact.email && (
              <li className="flex items-center gap-2">
                <Icon name="mail" className="size-4 text-brand-500" />
                <a href={`mailto:${contact.email}`} className="hover:text-white" dir="ltr">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.phone && (
              <li className="flex items-center gap-2">
                <Icon name="phone" className="size-4 text-brand-500" />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white" dir="ltr">
                  {contact.phone}
                </a>
              </li>
            )}
            {address && (
              <li className="flex items-center gap-2">
                <Icon name="pin" className="size-4 text-brand-500" />
                {address}
              </li>
            )}
          </ul>
        )}
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-sm text-white/60">
          © {new Date().getFullYear()} {t(company.legalName)}. {t(ui.allRights)}
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
