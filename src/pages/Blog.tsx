import { blogPosts, ui } from "../content";
import { useLang, usePageTitle } from "../i18n";
import { Icon } from "../components/Icon";
import { Container, DevNote, PageHeader } from "../components/ui";

const Blog = () => {
  usePageTitle(ui.blogTitle);
  const { t, lang } = useLang();
  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : "en-GB", { dateStyle: "long" }).format(new Date(iso));

  return (
    <>
      <PageHeader title={t(ui.blogTitle)} intro={t(ui.blogIntro)} />
      <Container className="py-16 sm:py-20">
        {blogPosts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <time dateTime={post.date} className="text-sm text-slate-500">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-3 text-lg font-bold leading-snug text-navy-900">{t(post.title)}</h2>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{t(post.excerpt)}</p>
                {post.href && (
                  <a href={post.href} className="mt-5 text-sm font-semibold text-brand-700 hover:text-navy-900">
                    {t(ui.readMore)}
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-slate-50 px-6 py-12 text-center">
            <Icon name="pen" className="mx-auto size-10 text-brand-500" />
            <p className="mt-4 text-lg leading-8 text-slate-700">{t(ui.blogEmpty)}</p>
          </div>
        )}
        <DevNote>
          No blog posts survived from the original site. Add posts in <code>src/content.ts</code> → <code>blogPosts</code>.
        </DevNote>
      </Container>
    </>
  );
};

export default Blog;
