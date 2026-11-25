import { useState, type FormEvent } from "react";
import { contact, products, services, ui } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { Icon, type IconName } from "../components/Icon";
import { Container, DevNote, PageHeader } from "../components/ui";

const field =
  "mt-2 block w-full rounded-xl border-0 bg-white px-4 py-3 text-slate-800 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500 disabled:bg-slate-50";

const Contact = () => {
  usePageTitle(ui.contactTitle);
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" });
  const canSend = Boolean(contact.email);
  const address = t(contact.address);

  const details: { icon: IconName; label: string; value: string; href?: string }[] = [];
  if (contact.email) details.push({ icon: "mail", label: t(ui.emailLabel), value: contact.email, href: `mailto:${contact.email}` });
  if (contact.phone) details.push({ icon: "phone", label: t(ui.phoneLabel), value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` });
  if (address) details.push({ icon: "pin", label: t(ui.addressLabel), value: address });

  const interests = [...services.map((s) => t(s.title)), ...products.map((p) => t(p.name)), t(ui.formOther)];

  // There is no backend: the form opens the visitor's email app with the message filled in.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSend) return;
    const subject = `${form.interest || t(ui.contactTitle)}: ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHeader title={t(ui.contactTitle)} intro={t(ui.contactIntro)} />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-xl font-bold text-navy-900">{t(ui.contactDetails)}</h2>
          {details.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={d.icon} className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="font-semibold text-navy-900 hover:text-brand-700" dir="ltr">
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-navy-900">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 leading-7 text-slate-600">{t(ui.contactPending)}</p>
          )}
          <DevNote>
            No contact details survived. Set <code>email</code>, <code>phone</code> and <code>address</code> in{" "}
            <code>src/content.ts</code> → <code>contact</code>; setting the email also turns the form on.
          </DevNote>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <fieldset disabled={!canSend} className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-navy-900">
              {t(ui.formName)}
              <input
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
            </label>
            <label className="block text-sm font-semibold text-navy-900">
              {t(ui.formEmail)}
              <input
                required
                type="email"
                autoComplete="email"
                dir="ltr"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
            </label>
            <label className="block text-sm font-semibold text-navy-900 sm:col-span-2">
              {t(ui.formInterest)}
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className={field}
              >
                <option value="">—</option>
                {interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-navy-900 sm:col-span-2">
              {t(ui.formMessage)}
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={field}
              />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                <Icon name="mail" className="size-4" />
                {t(ui.formSend)}
              </button>
              <p className="text-sm text-slate-500">{t(canSend ? ui.formMailNote : ui.formUnavailable)}</p>
            </div>
          </fieldset>
        </form>
      </Container>
    </>
  );
};

export default Contact;
