import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMember, teamMembers, collective } from "@/data/team";
import { Image } from "@/components/ui/image";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";

// View 03 — The "Specialist Dossier" (Individual Member Page)
// Split-screen: fixed portrait left, scrollable intel feed right.
export default function MemberDossier() {
  const { memberId } = useParams();
  const member = getMember(memberId);
  const [activeArtifact, setActiveArtifact] = useState(0);
  const [category, setCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveArtifact(0);
    setCategory("all");
  }, [memberId]);

  if (!member) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-obsidian px-6 text-center">
        <div className="font-mono-label text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          ERROR // FILE NOT FOUND
        </div>
        <h1 className="font-heading text-4xl font-extrabold tracking-tight">No dossier on record.</h1>
        <Link to="/team" className="font-mono-label text-[12px] uppercase tracking-widest text-foreground hover:text-foreground">
          ← Back to collective
        </Link>
      </div>
    );
  }

  const next = teamMembers[(teamMembers.findIndex((m) => m.id === member.id) + 1) % teamMembers.length];

  const categoryOptions = ["All", ...Array.from(new Set(member.artifacts.map((a) => a.category))).sort()];
  const filteredArtifacts =
    category === "all" ? member.artifacts : member.artifacts.filter((a) => a.category === category);
  const safeActive = Math.min(activeArtifact, filteredArtifacts.length - 1);

  return (
    <div className="min-h-screen bg-obsidian text-foreground">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-graphene px-6 py-3 font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:px-12">
        <Link to="/team" className="flex items-center gap-2 transition hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> Collective
        </Link>
        <span>FILE {member.index} // SPECIALIST DOSSIER</span>
        <span className="hidden md:inline">{collective.cohort}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — fixed portrait */}
        <div className="relative hidden h-screen lg:block lg:sticky lg:top-0">
          <Image
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover grayscale"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="font-mono-label text-[11px] text-foreground">FILE {member.index}</div>
            <div className="mt-2 font-heading text-5xl font-extrabold tracking-tighter">{member.name}</div>
            <div className="mt-1 font-mono-label text-[11px] uppercase tracking-widest text-muted-foreground">
              {member.role}
            </div>
            <div className="mt-4 flex items-center gap-2 font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${
                  member.pitchReady ? "bg-citrine animate-pulse-dot" : "bg-foreground/30"
                }`}
              />
              {member.pitchReady ? "Pitch Ready" : "Standby"}
            </div>
          </div>
        </div>

        {/* RIGHT — scrollable intel feed */}
        <div className="px-6 py-10 md:px-12 md:py-16">
          {/* mobile portrait */}
          <div className="relative mb-8 aspect-[4/5] overflow-hidden lg:hidden">
            <Image src={member.image} alt={member.name} className="h-full w-full object-cover grayscale" fittingType="fill" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="font-mono-label text-[11px] text-foreground">FILE {member.index}</div>
              <div className="mt-1 font-heading text-3xl font-extrabold tracking-tight">{member.name}</div>
              <div className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">{member.role}</div>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="border-b border-graphene pb-10">
            <div className="font-mono-label text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              / Executive Summary
            </div>
            <p className="mt-5 text-xl font-light leading-relaxed text-foreground md:text-2xl">
              {member.summary}
            </p>
          </section>

          {/* Technical Stack */}
          <section className="border-b border-graphene py-10">
            <div className="font-mono-label text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              / Technical Stack
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {member.stack.map((s) => (
                <span
                  key={s}
                  className="border border-graphene px-3 py-1.5 font-mono-label text-[11px] uppercase tracking-wide text-foreground transition hover:border-foreground hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Project Artifacts — interactive horizontal gallery */}
          <section className="border-b border-graphene py-10">
            <div className="flex items-center justify-between gap-4">
              <div className="font-mono-label text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                / Project Artifacts
              </div>
              <Select
                value={category}
                onValueChange={(v) => {
                  setCategory(v);
                  setActiveArtifact(0);
                }}
              >
                <SelectTrigger className="w-[200px] border-graphene bg-transparent font-mono-label text-[10px] uppercase tracking-widest text-foreground">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent className="border-graphene bg-background font-mono-label text-[11px] uppercase tracking-widest text-foreground">
                  {categoryOptions.map((c) => (
                    <SelectItem key={c} value={c === "All" ? "all" : c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-6 overflow-x-auto">
              <div className="flex gap-px bg-graphene">
                {filteredArtifacts.map((a, i) => (
                  <button
                    key={a.title}
                    onClick={() => setActiveArtifact(i)}
                    className={`min-w-[180px] flex-1 border-0 p-5 text-left transition ${
                      safeActive === i ? "bg-citrine text-foreground" : "bg-obsidian text-foreground hover:bg-secondary"
                    }`}
                  >
                    <div className={`font-mono-label text-[10px] ${safeActive === i ? "text-foreground/70" : "text-foreground"}`}>
                      ART.{String(i + 1).padStart(2, "0")} // {a.year}
                    </div>
                    <div className="mt-1 font-mono-label text-[9px] uppercase tracking-wide text-muted-foreground">
                      {a.category}
                    </div>
                    <div className="mt-2 font-heading text-base font-bold leading-tight">{a.title}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-5 border border-graphene p-6">
              <div className="font-mono-label text-[10px] uppercase tracking-widest text-foreground">
                {filteredArtifacts[safeActive].year} — {filteredArtifacts[safeActive].category}
              </div>
              <p className="mt-3 text-lg leading-relaxed text-foreground">
                {filteredArtifacts[safeActive].description}
              </p>
            </div>
          </section>

          {/* Why Me */}
          <section className="border-b border-graphene py-10">
            <div className="font-mono-label text-[11px] uppercase tracking-[0.25em] text-foreground">
              / Why Me — On This Capstone
            </div>
            <div className="mt-5 border-l-2 border-foreground bg-secondary/40 p-6">
              <p className="text-xl font-light leading-relaxed text-foreground">
                {member.whyMe}
              </p>
            </div>
          </section>

          {/* Portfolio & CV — clickable gallery image */}
          <section className="border-b border-graphene py-10">
            <div className="font-mono-label text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              / Portfolio & CV
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group mt-5 block w-full text-left"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-graphene bg-obsidian sm:aspect-[4/3]">
                <Image
                  src={member.portfolioImage}
                  alt={`${member.name} — portfolio & CV`}
                  className="h-full w-full object-cover transition group-hover:opacity-90"
                  fittingType="fit"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-obsidian/70 via-transparent to-transparent p-4">
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-foreground">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </button>
          </section>

          {/* Direct contact */}
          <section className="py-10">
            <a
              href={`mailto:${member.contact}`}
              className="group flex items-center justify-between border border-graphene p-6 transition hover:border-foreground hover:bg-secondary/40"
            >
              <span>
                <span className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">
                  Direct Line
                </span>
                <span className="mt-1 block font-heading text-2xl font-bold tracking-tight text-foreground">
                  {member.contact}
                </span>
              </span>
              <Mail className="h-6 w-6 text-foreground transition group-hover:translate-x-1" />
            </a>
          </section>

          {/* Next dossier */}
          <Link
            to={`/team/${next.id}`}
            className="group flex items-center justify-between border-t border-graphene pt-8"
          >
            <span>
              <span className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">
                Next Dossier // {next.index}
              </span>
              <span className="mt-1 block font-heading text-3xl font-extrabold tracking-tight transition group-hover:text-foreground">
                {next.name}
              </span>
            </span>
            <ArrowRight className="h-8 w-8 text-foreground transition group-hover:translate-x-2" />
          </Link>
        </div>
      </div>

      {/* Lightbox — enlarged portfolio / CV image */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 md:p-10"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 font-mono-label text-[11px] uppercase tracking-widest text-background transition hover:opacity-70"
          >
            [ Close ]
          </button>
          <img
            src={member.portfolioImage}
            alt={`${member.name} — portfolio & CV`}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}