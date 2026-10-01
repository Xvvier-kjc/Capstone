// Single source of truth for the capstone collective.
// Edit member intel here — the sidebar, grid, and dossier pages all read from this file.
//
// Each artifact has a `category` used by the dossier's "Filter by category" dropdown.
// Each member has a `portfolioImage` (CV / portfolio sheet) shown as a clickable gallery image.

const PORTFOLIO_IMAGE =
  "https://media.base44.com/images/public/6ab54cd4718f46612ba052ef/2bb0a5cd7_generated_image.png";

export const collective = {
  name: "SYNDICATE",
  unit: "Capstone Intelligence Unit",
  cohort: "2026 / Cohort 04",
  availability: "OPEN FOR INDUSTRY PARTNERSHIPS",
  timeline: "Q4 2026 — Q2 2027",
  email: "briefing@syndicate.capstone",
};

export const teamMembers = [
  {
    id: "kai-tanaka",
    index: "01",
    name: "Kai Tanaka",
    role: "Lead Engineer // Systems Architecture",
    pitchReady: true,
    image: "https://media.base44.com/images/public/6ab54cd4718f46612ba052ef/536a77d13_generated_45255218.jpg",
    portfolioImage: PORTFOLIO_IMAGE,
    stack: ["Python", "Go", "Distributed Systems", "Cloud Infra", "PostgreSQL"],
    summary:
      "I build the spine. Six years of shipping production backends before returning to academia — I architect systems that survive contact with real users, not just demo audiences. My job on this capstone is to make sure the foundation is boring, because boring means reliable.",
    artifacts: [
      { title: "ATLAS — Realtime Telemetry Mesh", year: "2025", category: "Systems Engineering", description: "A low-latency event streaming platform handling 40k events/sec across 12 nodes." },
      { title: "FORGE — Internal Devkit", year: "2024", category: "Open Source", description: "A CLI + service scaffold that cut new-microservice bootstrapping from 3 days to 40 minutes." },
      { title: "LEDGER — Audit Pipeline", year: "2024", category: "Cybersecurity", description: "Append-only compliance log with cryptographic integrity proofs for fintech client." },
    ],
    whyMe:
      "Most capstone teams discover infrastructure is hard mid-project. I remove that discovery. I bring production scar tissue — on-call rotations, incident post-mortems, capacity planning — so the team can spend its cycles on the actual problem, not on keeping the lights on.",
    contact: "kai@syndicate.capstone",
  },
  {
    id: "aria-chen",
    index: "02",
    name: "Aria Chen",
    role: "Lead Strategist // UX & Research",
    pitchReady: true,
    image: "https://media.base44.com/images/public/6ab54cd4718f46612ba052ef/6811bab5f_generated_112e1a23.jpg",
    portfolioImage: PORTFOLIO_IMAGE,
    stack: ["Figma", "User Research", "Service Design", "Prototyping", "Design Systems"],
    summary:
      "I translate ambiguity into something a team can build. My background is in behavioral research and product strategy — I run the studies, synthesize the signal, and make sure the thing we engineer is the thing a partner actually needs. I do not ship features nobody asked for.",
    artifacts: [
      { title: "FIELDNOTES — Ethnographic Study", year: "2025", category: "Research", description: "32 interviews across 3 hospital wards, surfaced 11 unmet clinician needs." },
      { title: "BLUEPRINT — Design System v2", year: "2025", category: "Product / UX", description: "Token-based system adopted across 4 student projects; reduced UI drift by 70%." },
      { title: "JOURNEY — Onboarding Redesign", year: "2024", category: "Internship", description: "Re-architected first-run flow; activation rate lifted from 31% to 58%." },
    ],
    whyMe:
      "A capstone fails when it solves the wrong problem. I run the discovery that prevents that — stakeholder interviews, competitive teardowns, usability tests. By the time engineering starts, the brief is sharp enough to build against, and the partner has already seen themselves in the work.",
    contact: "aria@syndicate.capstone",
  },
  {
    id: "rohan-mehta",
    index: "03",
    name: "Rohan Mehta",
    role: "Data Scientist // ML & Analytics",
    pitchReady: true,
    image: "https://media.base44.com/images/public/6ab54cd4718f46612ba052ef/51003e93a_generated_1d00b10d.jpg",
    portfolioImage: PORTFOLIO_IMAGE,
    stack: ["Python", "PyTorch", "NLP", "Statistics", "dbt", "BigQuery"],
    summary:
      "I turn noise into decisions. I have shipped models into production — not just notebooks — and I know the gap between a 0.92 F1 and a model a business can trust. On this capstone I own the data pipeline end to end: ingestion, feature work, modeling, and the dashboard a partner actually reads.",
    artifacts: [
      { title: "SENTINEL — Anomaly Detection", year: "2025", category: "AI / Machine Learning", description: "Unsupervised model flagging fraud patterns; 23% lift over legacy rules engine." },
      { title: "LEXICON — Domain LLM Fine-tune", year: "2025", category: "AI / Machine Learning", description: "Adapted open-weight model on legal corpus; retrieval precision up 34%." },
      { title: "PULSE — Exec Analytics Dashboard", year: "2024", category: "Analytics", description: "Real-time KPI surface for a logistics startup, used daily by the C-suite." },
    ],
    whyMe:
      "Data work dies in the handoff. I sit with engineering on the pipeline and with strategy on the interpretation, so the model is not a black box the team hopes works — it is a documented, monitored, explainable component the partner can defend in a board meeting.",
    contact: "rohan@syndicate.capstone",
  },
  {
    id: "mira-okafor",
    index: "04",
    name: "Mira Okafor",
    role: "Project Lead // Delivery & Operations",
    pitchReady: true,
    image: "https://media.base44.com/images/public/6ab54cd4718f46612ba052ef/0e3f93c4c_generated_cc895e97.jpg",
    portfolioImage: PORTFOLIO_IMAGE,
    stack: ["Agile Delivery", "Risk Management", "Stakeholder Comms", "Roadmapping", "Notion"],
    summary:
      "I make sure the right thing ships on the right day. I have run delivery for a 14-person startup team and I treat a capstone like a real engagement — scope, milestones, risk register, weekly partner syncs. No surprise gaps in week ten. No ghosted deliverables.",
    artifacts: [
      { title: "CADENCE — Delivery Framework", year: "2025", category: "Product / UX", description: "Lightweight sprint system adopted across 3 student teams; on-time delivery up to 92%." },
      { title: "RISKMAP — Stakeholder Register", year: "2025", category: "Analytics", description: "Live risk-and-dependency matrix used in weekly partner reviews." },
      { title: "LAUNCH — Go-to-Market Plan", year: "2024", category: "Product / UX", description: "Coordinated 6-team release for a campus platform; 4k users in week one." },
    ],
    whyMe:
      "Industry partners do not fear students' technical ability — they fear unpredictability. I am the person who sends the status update before it is asked for, who escalates early, and who protects the scope so the team can do deep work without the partner losing trust.",
    contact: "mira@syndicate.capstone",
  },
  {
    id: "leo-park",
    index: "05",
    name: "Leo Park",
    role: "Full-Stack Engineer // Product & Interface",
    pitchReady: false,
    image: "https://media.base44.com/images/public/6ab54cd4718f46612ba052ef/7c44e9aef_generated_3bddb3f6.jpg",
    portfolioImage: PORTFOLIO_IMAGE,
    stack: ["TypeScript", "React", "Node", "API Design", "Postgres", "Tailwind"],
    summary:
      "I build the surface. I care about the seam between backend and user — the API contract, the loading state, the empty state, the error that does not make someone quit. I have shipped side projects to real users and I treat the interface as a product, not a demo skin.",
    artifacts: [
      { title: "CONDUIT — Edge API Gateway", year: "2025", category: "Systems Engineering", description: "Type-safe gateway routing 6 internal services; p95 latency under 80ms." },
      { title: "SIGNAL — Realtime Collab Editor", year: "2025", category: "Open Source", description: "CRDT-based document editor with presence and conflict-free sync." },
      { title: "ATLAS UI — Component Library", year: "2024", category: "Open Source", description: "Accessible React component set, 60+ components, full keyboard nav." },
    ],
    whyMe:
      "The interface is where a partner judges whether the work is real. I close the loop between data, backend, and human — so the partner does not see a prototype, they see a product they can imagine handing to their customers.",
    contact: "leo@syndicate.capstone",
  },
  {
    id: "nadia-rahman",
    index: "06",
    name: "Nadia Rahman",
    role: "Security Engineer // DevSecOps & Infrastructure",
    pitchReady: true,
    image: "https://media.base44.com/images/public/6ab54cd4718f46612ba052ef/2c13a521f_generated_image.png",
    portfolioImage: PORTFOLIO_IMAGE,
    stack: ["DevSecOps", "Cloud Security", "Terraform", "CI/CD", "Threat Modeling", "OWASP"],
    summary:
      "I harden what the team ships. I have broken into systems for a living before building them — so I think in threat models, not feature lists. On this capstone I own the security posture end to end: secrets, pipelines, access control, and the audit trail a regulated partner can actually sign off on.",
    artifacts: [
      { title: "BASTION — Zero-Trust Access Layer", year: "2025", category: "Cybersecurity", description: "Identity-aware proxy cutting lateral movement risk by 81% across a multi-service estate." },
      { title: "SENTINEL-POLICY — IaC Guardrails", year: "2025", category: "Cybersecurity", description: "Terraform policy pack blocking 140+ misconfigurations before deploy." },
      { title: "AUDIT-TRAIL — Compliance Pipeline", year: "2024", category: "Cybersecurity", description: "Tamper-evident logging pipeline mapped to SOC2 controls for a fintech pilot." },
    ],
    whyMe:
      "Most student projects treat security as a week-eleven checklist. I treat it as a design constraint from day one — so the partner inherits a system they can put in front of their own security review without flinching. I bring the attacker's perspective so the team never ships a soft target.",
    contact: "nadia@syndicate.capstone",
  },
  {
    id: "theo-vance",
    index: "07",
    name: "Theo Vance",
    role: "Reliability Engineer // Testing & Observability",
    pitchReady: false,
    image: "https://media.base44.com/images/public/6ab54cd4718f46612ba052ef/101269077_generated_image.png",
    portfolioImage: PORTFOLIO_IMAGE,
    stack: ["Go", "Grafana", "Prometheus", "Chaos Testing", "E2E Automation", "SLOs"],
    summary:
      "I prove it works before someone else has to. I have been the person paged at 3am, so I build systems that tell you they are sick before they die. On this capstone I own reliability: test coverage, observability, SLOs, and the dashboards that turn 'it feels slow' into a number we can fix.",
    artifacts: [
      { title: "PROBE — Synthetic Monitoring Net", year: "2025", category: "Systems Engineering", description: "Global probe fleet catching regressions 4x faster than user reports." },
      { title: "STORM — Chaos Test Suite", year: "2025", category: "Systems Engineering", description: "Controlled failure injection surfacing 9 latent race conditions pre-launch." },
      { title: "SLO-BOARD — Reliability Dashboard", year: "2024", category: "Analytics", description: "Error-budget tracking adopted by 2 student teams; incident MTTR down 60%." },
    ],
    whyMe:
      "A partner trusts what they can measure. I give them the numbers — uptime, latency, error budget — and the evidence behind them. Where most teams hand over a demo and hope, I hand over a system that monitors itself and a test suite that proves the next change will not break the last one.",
    contact: "theo@syndicate.capstone",
  },
];

export const getMember = (id) => teamMembers.find((m) => m.id === id);