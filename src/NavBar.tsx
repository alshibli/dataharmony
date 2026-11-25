import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Icon } from "./components/Icon";
import { Container } from "./components/ui";
import { nav, ui } from "./content";
import { useLang } from "./i18n";

function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      aria-label={t(ui.switchLangLabel)}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-navy-900 ring-1 ring-inset ring-slate-200 hover:bg-brand-50"
    >
      <Icon name="globe" className="size-4 text-brand-600" />
      <span lang={lang === "ar" ? "en" : "ar"}>{t(ui.switchLang)}</span>
    </button>
  );
}

const NavBar = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label={t(ui.homeLink)} className="shrink-0">
          <img src="/logo.svg" alt="" className="h-10 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-navy-900 bg-brand-50" : "text-slate-600 hover:text-navy-900"
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-navy-900 hover:bg-brand-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t(open ? ui.closeMenu : ui.openMenu)}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-3">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium ${
                        isActive ? "bg-brand-50 text-navy-900" : "text-slate-700 hover:bg-slate-50"
                      }`
                    }
                  >
                    {t(item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
