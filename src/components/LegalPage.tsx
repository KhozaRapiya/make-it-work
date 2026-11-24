import { Container } from "./ui";
import { PageHero } from "./sections";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} crumbs={[{ label: "Home", href: "/" }, { label: title }]} />
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-subtle">Last updated: {updated}</p>
          <div className="mt-6 space-y-5 leading-relaxed text-ink/85 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
            {children}
          </div>
        </div>
      </Container>
    </>
  );
}
