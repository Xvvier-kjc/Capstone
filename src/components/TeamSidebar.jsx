import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { teamMembers, collective } from "@/data/team";
import { Image } from "@/components/ui/image";

// The "Drop-Side" Navigator — fixed left sidebar (20% width).
// Hovering a member name summons a low-opacity ghost portrait that follows the cursor.
export default function TeamSidebar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);
  const [hovered, setHovered] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const sidebarRef = useRef(null);

  const activeId = location.pathname.split("/").pop();

  const onMouseMove = (e) => {
    if (!sidebarRef.current) return;
    const rect = sidebarRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <aside
      ref={sidebarRef}
      onMouseMove={onMouseMove}
      className="fixed left-0 top-0 z-40 flex h-screen w-full flex-col border-r border-graphene bg-obsidian md:w-1/5 lg:w-[20%]"
    >
      {/* Header */}
      <div className="border-b border-graphene p-5">
        <Link to="/" className="group block">
          <div className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {collective.unit}
          </div>
          <div className="mt-1 font-heading text-2xl font-extrabold tracking-tight text-foreground">
            {collective.name}
            <span className="text-foreground">.</span>
          </div>
        </Link>
      </div>

      {/* Directory label */}
      <div className="flex items-center justify-between border-b border-graphene px-5 py-3">
        <span className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          / Directory
        </span>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="font-mono-label text-[10px] uppercase tracking-widest text-foreground transition hover:text-foreground"
        >
          {expanded ? "[ Collapse ]" : "[ Expand ]"}
        </button>
      </div>

      {/* Member directory */}
      <nav className="relative flex-1 overflow-y-auto">
        <ul className="divide-y divide-graphene">
          <li>
            <Link
              to="/team"
              className={`flex items-center justify-between px-5 py-3.5 transition ${
                location.pathname === "/team"
                  ? "bg-secondary text-foreground"
                  : "text-foreground hover:bg-secondary/60"
              }`}
            >
              <span className="font-mono-label text-[13px] uppercase tracking-wide">
                Overview
              </span>
              <span className="font-mono-label text-[10px] text-muted-foreground">00</span>
            </Link>
          </li>
          {teamMembers.map((m) => {
            const isActive = activeId === m.id;
            return (
              <li
                key={m.id}
                onMouseEnter={() => setHovered(m)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  to={`/team/${m.id}`}
                  className={`flex items-center justify-between px-5 py-3.5 transition ${
                    isActive ? "bg-secondary text-foreground" : "text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`inline-block h-1.5 w-1.5 rounded-full ${
                        m.pitchReady ? "bg-citrine animate-pulse-dot" : "bg-foreground/30"
                      }`}
                    />
                    <span className="font-mono-label text-[13px] uppercase tracking-wide">
                      {m.name}
                    </span>
                  </span>
                  <span className="font-mono-label text-[10px] text-muted-foreground">
                    {m.index}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Kinetic ghost image — follows cursor within sidebar bounds */}
        {hovered && (
          <div
            className="pointer-events-none absolute z-10 hidden h-44 w-36 overflow-hidden border border-graphene opacity-20 transition-opacity duration-200 md:block"
            style={{
              left: Math.min(cursor.x + 18, (sidebarRef.current?.offsetWidth ?? 200) - 150),
              top: Math.min(cursor.y - 88, (sidebarRef.current?.offsetHeight ?? 800) - 180),
            }}
          >
            <Image
              src={hovered.image}
              alt={hovered.name}
              className="h-full w-full object-cover grayscale"
              fittingType="fill"
            />
          </div>
        )}
      </nav>

      {/* Footer of sidebar */}
      <div className="border-t border-graphene p-5">
        <div className="font-mono-label text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          {collective.cohort}
        </div>
      </div>
    </aside>
  );
}