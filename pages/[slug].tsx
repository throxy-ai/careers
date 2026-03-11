import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header, Footer } from "@/components/layout";
import {
  getJobBySlug,
  getAllJobSlugs,
  type Job,
} from "@/lib/jobs";

interface PageProps {
  job: Job;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllJobSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const job = getJobBySlug(slug);
  if (!job) return { notFound: true };
  return { props: { job } };
};

export default function JobPage({ job }: PageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>
          {job.title} {job.title_em} - throxy
        </title>
      </Head>

      <div className="flex-1 max-w-[800px] w-full mx-auto px-6 py-12">
        <header className="mb-12 pb-6 border-b border-gray-200">
          <Header />
        </header>

        <div className="mb-10">
          <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-black mb-4">
            {job.title} {job.title_em}
          </h1>
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div className="flex gap-6 flex-wrap">
              <MetaItem label="Location" value={job.meta.location} />
              <MetaItem label="Type" value={job.meta.type} />
              <MetaItem label="Team" value={job.meta.team} />
              <MetaItem label="Stage" value={job.meta.stage} />
            </div>
            <Link
              href={job.apply_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] font-medium py-2 px-5 rounded-sm no-underline transition-opacity hover:opacity-80 shrink-0"
            >
              Apply now &rarr;
            </Link>
          </div>
        </div>

        <main>
          {job.about && (
            <PageSection label={job.about.label} heading={job.about.heading}>
              {job.about.paragraphs.map((p, i) => (
                <p key={i} className="text-[14px] text-gray-600 mb-3 last:mb-0 leading-relaxed">
                  {p}
                </p>
              ))}
              {job.about.callout && (
                <div className="border border-gray-200 rounded-sm p-4 mt-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-gray-500 mb-2">
                    {job.about.callout.label}
                  </div>
                  <p
                    className="text-[13px] text-gray-600 m-0 leading-relaxed [&_strong]:text-black [&_strong]:font-medium"
                    dangerouslySetInnerHTML={{
                      __html: job.about.callout.body.replace(
                        /^([^.]+\.)/,
                        "<strong>$1</strong> "
                      ),
                    }}
                  />
                </div>
              )}
            </PageSection>
          )}

          {job.culture && (
            <PageSection label={job.culture.label} heading={job.culture.heading}>
              <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-sm overflow-hidden max-md:grid-cols-1">
                {job.culture.cards.map((card) => (
                  <div key={card.num} className="bg-white p-5">
                    <span className="font-mono text-[11px] text-gray-400 tracking-[0.05em] mb-2 block">
                      {card.num}
                    </span>
                    <h3 className="text-[13px] font-semibold text-black mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 m-0 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </PageSection>
          )}

          {job.tools && (
            <PageSection label={job.tools.label} heading={job.tools.heading}>
              <div className="border border-gray-200 rounded-sm p-5 bg-gray-50">
                <p
                  className="text-[13px] text-gray-600 m-0 leading-relaxed [&_strong]:text-black [&_strong]:font-medium"
                  dangerouslySetInnerHTML={{ __html: job.tools.body }}
                />
              </div>
            </PageSection>
          )}

          {job.ownership && (
            <PageSection label={job.ownership.label} heading={job.ownership.heading}>
              <div className="border border-gray-200 rounded-sm overflow-hidden divide-y divide-gray-100">
                {job.ownership.items.map((item) => (
                  <div key={item.num} className="flex gap-4 p-4">
                    <span className="font-mono text-[11px] text-gray-400 tracking-[0.05em] pt-0.5 shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <strong className="text-[13px] font-medium text-black block mb-0.5">
                        {item.title}
                      </strong>
                      <p className="text-[13px] text-gray-500 m-0 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PageSection>
          )}

          {job.ninety_days && (
            <PageSection label={job.ninety_days.label} heading={job.ninety_days.heading}>
              <div className="border border-gray-200 rounded-sm overflow-hidden divide-y divide-gray-100">
                {job.ninety_days.items.map((item, i) => (
                  <div
                    key={i}
                    className={`p-4 ${item.variant === "dark" ? "bg-gray-50" : ""}`}
                  >
                    <p
                      className={`text-[13px] m-0 leading-relaxed ${
                        item.variant === "dark"
                          ? "text-gray-400 italic text-[12px]"
                          : "text-gray-600"
                      }`}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </PageSection>
          )}

          {job.horizon && (
            <PageSection label={job.horizon.label} heading={job.horizon.heading}>
              <div className="border border-gray-200 rounded-sm overflow-hidden divide-y divide-gray-100">
                {job.horizon.cards.map((card) => (
                  <div key={card.title} className="p-4">
                    <strong className="text-[13px] font-medium text-black block mb-0.5">
                      {card.title}
                    </strong>
                    <p className="text-[13px] text-gray-500 m-0 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </PageSection>
          )}

          {job.skills && (
            <PageSection label={job.skills.label} heading={job.skills.heading}>
              <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-sm overflow-hidden max-md:grid-cols-1">
                {job.skills.cards.map((card) => (
                  <div key={card.num} className="bg-white p-5">
                    <span className="font-mono text-[11px] text-gray-400 tracking-[0.05em] mb-2 block">
                      {card.num}
                    </span>
                    <div className="text-[13px] font-medium text-black mb-1">
                      {card.label}
                    </div>
                    <p className="text-[13px] text-gray-500 m-0 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </PageSection>
          )}

          {job.requirements && (
            <PageSection label={job.requirements.label} heading={job.requirements.heading}>
              <div className="border border-gray-200 rounded-sm overflow-hidden divide-y divide-gray-100">
                {job.requirements.items.map((item, i) => (
                  <div key={i} className="flex gap-3 px-4 py-3">
                    <span className="font-mono text-[11px] text-gray-400 tracking-[0.05em] pt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] text-gray-600 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </PageSection>
          )}

          {job.hiring_process && (
            <PageSection
              label={job.hiring_process.label}
              heading={job.hiring_process.heading}
            >
              <div className="border border-gray-200 rounded-sm overflow-hidden divide-y divide-gray-100">
                {job.hiring_process.items.map((item, i) => (
                  <div
                    key={i}
                    className={`p-4 ${item.variant === "dark" ? "bg-gray-50" : ""}`}
                  >
                    {item.title ? (
                      <div>
                        <strong className="text-[13px] font-medium text-black block mb-0.5">
                          {item.title}
                        </strong>
                        <p
                          className={`text-[13px] m-0 leading-relaxed ${
                            item.variant === "dark"
                              ? "text-gray-400 italic text-[12px]"
                              : "text-gray-500"
                          }`}
                        >
                          {item.body}
                        </p>
                      </div>
                    ) : (
                      <p
                        className={`text-[13px] m-0 leading-relaxed ${
                          item.variant === "dark"
                            ? "text-gray-400 italic text-[12px]"
                            : "text-gray-500"
                        }`}
                      >
                        {item.body}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </PageSection>
          )}
        </main>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            href={job.apply_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] font-medium py-2.5 px-6 rounded-sm no-underline transition-opacity hover:opacity-80"
          >
            Apply now &rarr;
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-gray-500">
        {label}
      </span>
      <span className="text-[13px] text-black">{value}</span>
    </div>
  );
}

function PageSection({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 border-b border-gray-200 last:border-b-0">
      <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-gray-500 mb-3">
        {label}
      </div>
      <h2 className="text-[16px] font-semibold tracking-[-0.01em] text-black mb-4">
        {heading}
      </h2>
      {children}
    </section>
  );
}
