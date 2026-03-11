import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CodeIcon, AccountSetting03Icon } from "@hugeicons/core-free-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header, Footer } from "@/components/layout";
import { CompanyLogos } from "@/components/company-logos";
import { VideoPlayer } from "@/components/video-player";
import { JOBS } from "@/lib/jobs";

const SECTION_ORDER = ["Engineering", "Customer Success"] as const;
const SECTION_ICONS = {
  Engineering: CodeIcon,
  "Customer Success": AccountSetting03Icon,
} as const;

// "a" = avatar circle, "d" = small dot. Forms an oval blob like GitHub's contribution graph.
const AVATAR_GRID: Array<Array<"a" | "d">> = [
  ["d","d","d","a","a","a","a","d","d","d"],
  ["d","d","a","a","a","a","a","a","d","d"],
  ["d","a","a","a","a","a","a","a","a","d"],
  ["d","d","a","a","a","a","a","a","d","d"],
  ["d","d","d","a","a","a","a","d","d","d"],
];

// Team photos from public/team (order matches grid fill)
const TEAM_IMAGES = [
  "/team/pablo-jimenez.png",
  "/team/al-russell.png",
  "/team/mart-n-cires.png",
  "/team/tristan-tusa.png",
  "/team/bergen.png",
  "/team/claudia-postigo.png",
  "/team/iago-puente.jpg",
  "/team/bahaa.jpg",
  "/team/ben-bowman.png",
  "/team/annabella.png",
  "/team/arnau.png",
  "/team/pablo-molina.png",
  "/team/marcel.png",
  "/team/will-jones.png",
  "/team/hugo.jpg",
];

// Row opacity — center row is fully opaque, edges fade out
const ROW_OPACITY = [0.5, 0.75, 1, 0.75, 0.5];

function groupJobsByTeam(jobs: typeof JOBS) {
  const grouped: Record<string, typeof JOBS> = {};
  for (const job of jobs) {
    const team = job.meta.team;
    if (!grouped[team]) grouped[team] = [];
    grouped[team].push(job);
  }
  return grouped;
}

export default function CareersPage() {
  const grouped = groupJobsByTeam(JOBS);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F4F1]">
      <Head>
        <title>Careers - throxy</title>
      </Head>

      <Header />

      {/* 1. HERO */}
      <section className="w-full border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-8 py-20">
          <h1 className="text-[48px] font-semibold tracking-[-0.03em] text-black leading-[1.1] mb-10 text-center">
            Work at throxy.
          </h1>
          <div className="max-w-[560px] mx-auto space-y-4 text-[15px] leading-[1.7] text-black/70">
            <p>
              throxy is a small applied research lab working on the future of
              sales. The next $1T company will be a software company
              masquerading as a services firm.
            </p>
            <p>
              We are a group of researchers, engineers, and technologists in
              London inventing at the edge of what&apos;s useful and possible.
            </p>
            <p>
              At throxy, we are building agents that generate sales pipeline for
              our customers.
            </p>
            <p>
              If you&apos;re interested in the types of problems we&apos;re
              working on, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VIDEO */}
      <section className="w-full border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-8 py-16">
          <VideoPlayer
            src="/clau-1-year-final.mp4"
            subtitle="Inside throxy"
            title={
              <>
                What it&apos;s like building the<br />future of sales at throxy.
              </>
            }
          />
        </div>
      </section>

      {/* 3. TEAM */}
      <section className="w-full border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-8 py-20">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-black leading-snug mb-3 max-w-[700px] mx-auto text-center">
            <span className="text-black">Join a small team of builders.</span>{" "}
            <span className="text-gray-400">
              We&apos;re looking for determined and ambitious people to help us
              build the future of sales.
            </span>
          </h2>

          {/* Avatar grid */}
          <div className="mt-12 flex flex-col items-center gap-2">
            {(() => {
              let avatar_index = 0;
              return AVATAR_GRID.map((row, ri) => (
                <div key={ri} className="flex gap-2" style={{ opacity: ROW_OPACITY[ri] }}>
                  {row.map((cell, ci) => {
                    if (cell === "d") {
                      return (
                        <div
                          key={ci}
                          className="w-9 h-9 flex items-center justify-center"
                        >
                          <div className="w-2 h-2 rounded-full bg-gray-300" />
                        </div>
                      );
                    }
                    const idx = avatar_index++;
                    const src = TEAM_IMAGES[idx % TEAM_IMAGES.length];
                    return (
                      <Avatar key={ci} className="w-9 h-9 border border-gray-200">
                        <AvatarImage src={src} alt="Team member" />
                        <AvatarFallback className="bg-gray-200 text-gray-400 text-[9px] font-mono">
                          {String(idx + 1).padStart(2, "0")}
                        </AvatarFallback>
                      </Avatar>
                    );
                  })}
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* 4. BENTO PHOTOS + LOGOS */}
      <section className="w-full border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-8 py-16">
          {/* Bento grid — top right and bottom left swapped */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            {[1, 2, 4].map((n, i) => (
              <div
                key={n}
                className={`relative rounded-md overflow-hidden aspect-[4/3] bg-gray-200 ${i === 2 ? "brightness-110" : ""}`}
              >
                <Image
                  src={`/bento/bento-${n}.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[3, 5].map((n) => (
              <div
                key={n}
                className="relative rounded-md overflow-hidden aspect-[16/9] bg-gray-200"
              >
                <Image
                  src={`/bento/bento-${n}.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* Logo strip */}
          <div className="mt-14">
            <p className="text-[12px] text-gray-400 text-center mb-6 tracking-[0.03em]">
              We&apos;ve sharpened our skills at...
            </p>
            <CompanyLogos />
          </div>
        </div>
      </section>

      {/* 5. OPEN POSITIONS */}
      <section className="w-full flex-1">
        <div className="max-w-[1000px] mx-auto px-8 py-16">
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-[#241F23] mb-10">
            Open positions.
          </h2>

          <div className="space-y-4">
            {SECTION_ORDER.map((team) => {
              const jobs = grouped[team];
              if (!jobs?.length) return null;

              return (
                <div
                  key={team}
                  className="bg-[#F9F4F1] border border-gray-200 rounded-md overflow-hidden"
                >
                  {/* Section header row */}
                  <div className="px-5 py-3.5 flex items-center gap-3 border-b border-gray-200">
                    <HugeiconsIcon
                      icon={SECTION_ICONS[team]}
                      size={18}
                      color="currentColor"
                      strokeWidth={1.5}
                      className="text-gray-400 shrink-0"
                    />
                    <span className="text-[13px] font-semibold text-[#241F23]">
                      {team}
                    </span>
                    <sup className="text-[10px] font-semibold text-gray-400 ml-0.5">
                      [{jobs.length}]
                    </sup>
                  </div>

                  {/* Job rows */}
                  <div className="divide-y divide-gray-200">
                    {jobs.map((job, i) => (
                      <Link
                        key={job.slug}
                        href={`/${job.slug}`}
                        className="flex items-center gap-5 px-5 py-4 no-underline text-[#241F23] hover:bg-white/30 transition-colors"
                      >
                        <span className="font-mono text-[11px] text-gray-400 tracking-[0.05em] w-5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-[14px] font-medium">
                          {job.title} {job.title_em}
                        </span>
                        <span className="text-[13px] text-gray-400">
                          {job.meta.location}
                        </span>
                        <span className="text-gray-300">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
