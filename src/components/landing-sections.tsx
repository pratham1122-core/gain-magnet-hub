import { Check, Star, Play, Phone, Mail, MessageCircle, FileX, BellRing, Cpu, ShieldOff, Quote, ArrowRight } from "lucide-react";
import { CountUp } from "@/components/count-up";

const PHOTO_FALLBACK_BG = "var(--color-primary)";

/* ─────────────────────────── HERO ─────────────────────────── */
export function HeroSection() {
  const badges = [
    "CISSP CERTIFIED TEAM",
    "ISO 27001 LEAD AUDITOR",
    "CIPP | CIPM CERTIFIED",
    "25+ YEARS EXPERIENCE",
  ];
  const bullets = [
    "Takes less than 30 minutes",
    "No technical knowledge required",
    "Instant clarity on your compliance gaps",
    "Includes a prioritized action roadmap",
  ];
  const whatYouGet = [
    "Full compliance gap analysis (PIPEDA, AIDA, PHIPA, SOC 2, ISO 27001)",
    "Identification of which laws apply to your business",
    "Prioritized risk ranking — what to fix first",
    "Realistic timeline and effort estimate",
    "Framework recommendation (project, retainer, or combo)",
    "No-obligation written summary sent after the call",
  ];

  return (
    <section id="top" className="bg-white with-header-offset">
      <div className="max-w-7xl mx-auto px-4 pb-12 md:pb-20 grid lg:grid-cols-[55%_45%] gap-12 items-center">
        {/* LEFT */}
        <div className="reveal">
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="badge-credential">{b}</span>
            ))}
          </div>

          {/* FIX 2 — H1 42px mobile / 68px desktop. FIX 4A — animated underline on "non-compliant". */}
          <h1 className="text-[42px] md:text-[68px] font-bold text-primary mt-5 leading-[1.1]">
            You might already be <span className="hl-word">Non-Compliant</span> in Canada.
          </h1>

          <p className="text-[19px] text-muted-foreground mt-4 leading-relaxed">
            Get your exact compliance risk across PIPEDA, AIDA, PHIPA, SOC 2, and ISO 27001 — and a clear action plan — before it costs you a deal, an audit, or a penalty.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-5 text-[14px]">
            <div className="flex gap-[3px]">
              {[0,1,2,3,4].map((i) => (
                <Star key={i} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">Trusted by 15,000+ businesses globally</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-primary font-semibold">100% Audit Success Rate</span>
          </div>

          {/* FIX 4F — only this CTA pulses */}
          <a href="#contact" className="btn-primary cta-pulse !text-[16px] !font-bold !px-8 !py-4 mt-6">
            Book Your Free 30-Min Compliance Assessment
          </a>
          <p className="text-[14px] italic text-muted-foreground mt-2.5">
            No commitment. No jargon. Walk away with clarity on where you stand.
          </p>

          <div className="grid sm:grid-cols-2 gap-2 mt-4">
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <Check size={14} className="text-success mt-1 shrink-0" />
                <span className="text-[14px] text-primary font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="reveal">
          <div className="w-full aspect-video bg-primary rounded-xl mb-5 overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PI4bxm5IYys?autoplay=1&mute=1&playsinline=1&rel=0"
              title="Frigg Business Solutions Company Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="card-flat overflow-hidden">
            <div className="bg-primary px-5 py-4">
              <div className="text-white text-[15px] font-bold">What You Get in Your Free Assessment</div>
            </div>
            <div className="p-5 bg-white">
              <ul className="space-y-3">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-[15px] text-primary leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface px-5 py-4 border-t border-border">
              <div className="text-[13px] text-muted-foreground">30-minute session. Available via video or phone.</div>
              <a href="#contact" className="btn-primary w-full !text-[15px] mt-2.5">Schedule Now →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TRUST BAR ─────────────────────── */
export function TrustBar() {
  /* FIX 4B — only animate "15,000+", "25+", "120+". 5x–12x and 100% remain static. */
  const stats = [
    { type: "count" as const, value: 15000, suffix: "+", l: "Businesses Supported Globally" },
    { type: "count" as const, value: 25, suffix: "+", l: "Years Combined Experience" },
    { type: "count" as const, value: 120, suffix: "+", l: "Compliance Programs Delivered" },
    { type: "static" as const, text: "100%", l: "First-Attempt Audit Success Rate" },
    { type: "static" as const, text: "5x–12x", l: "Average Client ROI" },
  ];
  const clients = ["Lightning Step Technologies", "Sunwave Health", "Evoke Technologies", "Wellthy Therapeutics"];

  return (
    <section className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/20">
          {stats.map((s, i) => (
            <div key={i} className="px-4 text-center first:pl-0 last:pr-0">
              <div className="text-[28px] md:text-[32px] font-bold text-white">
                {s.type === "count" ? <CountUp end={s.value} suffix={s.suffix} /> : s.text}
              </div>
              <div className="text-[12px] text-accent mt-1.5 font-medium">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <span className="text-[13px] text-white/60 mr-2">Trusted by:</span>
          {/* [REPLACE BADGES WITH ACTUAL LOGO IMAGES WHEN AVAILABLE] */}
          {clients.map((c) => (
            <span key={c} className="bg-white/10 border border-white/25 rounded text-[13px] text-white font-medium px-3 py-1">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PROBLEM ─────────────────────── */
export function ProblemSection() {
  const problems = [
    { Icon: FileX, title: "Enterprise deals get blocked", body: "SOC 2 and ISO 27001 are now standard procurement requirements for enterprise, government, and financial services clients. Without documentation, you don't make the shortlist — regardless of how strong your product is." },
    { Icon: BellRing, title: "Privacy investigations triggered", body: "PIPEDA violations can result in OPC investigation notices, mandatory breach reporting, and fines up to CAD $100,000 per violation. The investigation process alone is costly, disruptive, and public." },
    { Icon: Cpu, title: "AI products flagged under AIDA", body: "Canada's Artificial Intelligence and Data Act places high-impact AI systems under mandatory assessment obligations. Non-compliant systems face stop-orders and fines reaching CAD $25 million or 5% of global revenue." },
    { Icon: ShieldOff, title: "Patient data exposed under PHIPA", body: "Ontario healthcare custodians face mandatory IPC breach notifications, formal investigations, and order-making powers. A single improper disclosure can trigger a review that disrupts your entire practice." },
  ];

  return (
    <section id="problem" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal">
          <div className="section-label">THE RISK OF DOING NOTHING</div>
          <h2 className="text-[32px] md:text-[46px] font-bold text-primary mt-3">
            What happens when compliance slips in Canada?
          </h2>
          <p className="text-[19px] text-muted-foreground mt-3 max-w-2xl">
            Most businesses don't realize their exposure until it arrives as a blocked deal, an investigation notice, or a headline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {problems.map(({ Icon, title, body }) => (
            <div key={title} className="reveal card-flat problem-card p-6 border-l-[4px]" style={{ borderLeftColor: "var(--color-accent)" }}>
              <div className="icon-circle h-10 w-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-accent-soft)" }}>
                <Icon size={20} className="text-accent" />
              </div>
              <h3 className="text-[22px] font-bold text-primary">{title}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed mt-2">{body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[16px] italic text-muted-foreground mt-8">
          The businesses that act before a notice arrives spend a fraction of what reactive compliance costs.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────── CTA STRIP 1 ─────────────────────── */
export function CtaStrip1() {
  return (
    <section className="bg-surface border-y border-border py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[14px] italic text-muted-foreground mb-5">
          Ready to understand your exact exposure? Your assessment starts here.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-primary !px-8">Book Free Assessment</a>
          <a href="tel:+19052619123" className="inline-flex items-center gap-2 text-[16px] font-semibold text-primary hover:underline">
            <Phone size={16} className="text-primary" />
            <span>+1 (905) 261-9123</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── SERVICES ─────────────────────── */
export function ServicesSection() {
  const modules = [
    { n: "01", title: "PIPEDA & Data Privacy Compliance", body: "Gap analysis, privacy policy development, consent framework design, breach response procedures, and OPC investigation readiness.", badges: ["PIPEDA", "Quebec Law 25", "CASL"] },
    { n: "02", title: "AIDA — AI Compliance & Governance", body: "Algorithmic Impact Assessments, AI governance framework design, transparency statement preparation, and AIDA readiness documentation for high-impact AI systems.", badges: ["AIDA", "ISO 42001", "AI Governance"] },
    { n: "03", title: "SOC 2 Type I & Type II Readiness", body: "Control mapping across all five Trust Service Criteria, documentation, evidence collection, mock audit, and coordination with your AICPA-licensed audit firm.", badges: ["SOC 2 Type I", "SOC 2 Type II", "AICPA"] },
    { n: "04", title: "ISO 27001:2022 Certification Support", body: "Risk assessment, ISMS implementation, Annex A control mapping, internal audit preparation, and Stage 1 and Stage 2 audit support. First-pass certification focus.", badges: ["ISO 27001:2022", "ISMS", "Risk Management"] },
    { n: "05", title: "PHIPA — Healthcare Data Protection", body: "Patient data compliance, Privacy Contact appointment, IPC breach notification procedures, staff training, and PHIPA audit readiness for Ontario healthcare custodians.", badges: ["PHIPA", "PIPEDA", "Healthcare Privacy"] },
    { n: "06", title: "Ongoing Compliance & vCISO Programs", body: "Continuous compliance monitoring, virtual CISO and virtual DPO services, vendor risk management, regular audits, and multi-framework management on retainer.", badges: ["vCISO", "vDPO", "Retainer", "VRM"] },
  ];

  const timeline = [
    ["PIPEDA Compliance", "2–4 months", "6–8 weeks"],
    ["ISO 27001:2022", "4–6 months", "2.5–3 months"],
    ["SOC 2 Type I", "2–4 months", "6–8 weeks"],
    ["SOC 2 Type II", "6–12 months", "4–6 months"],
    ["AIDA Readiness", "3–5 months", "2–3 months"],
    ["PHIPA Compliance", "2–3 months", "4–6 weeks"],
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal">
          <div className="section-label">WHAT YOU GET</div>
          <h2 className="text-[32px] md:text-[46px] font-bold text-primary mt-3">
            One partner. Every Canadian compliance framework you need.
          </h2>
          <p className="text-[19px] text-muted-foreground mt-3">
            From your first gap assessment to your final certification — Frigg handles every step.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {modules.map((m) => (
            <div key={m.n} className="reveal card-flat service-row p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5">
              <div className="row-num h-10 w-10 rounded-full bg-primary text-white text-[16px] font-bold flex items-center justify-center shrink-0">
                {m.n}
              </div>
              <div className="flex-grow">
                <h3 className="text-[22px] font-bold text-primary">{m.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mt-1">{m.body}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:max-w-[260px] md:justify-end">
                {m.badges.map((b) => (
                  <span key={b} className="badge-framework">{b}</span>
                ))}
              </div>
              <ArrowRight size={20} className="row-arrow hidden md:block shrink-0" />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl overflow-hidden border border-border">
          <table className="w-full text-left">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 text-[14px] font-bold">Framework</th>
                <th className="px-4 py-3 text-[14px] font-bold">Typical Timeline</th>
                <th className="px-4 py-3 text-[14px] font-bold">Fast-Track Available</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-surface" : "bg-white"}>
                  {row.map((c) => (
                    <td key={c} className="px-4 py-3 text-[15px] text-primary">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CTA STRIP 2 ─────────────────────── */
export function CtaStrip2() {
  return (
    <section className="bg-primary py-14">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h3 className="text-[22px] md:text-[24px] font-bold text-white">Not sure which framework applies to you?</h3>
          <p className="text-[16px] text-white/80 mt-2 leading-relaxed">
            That is exactly what the free assessment answers. In 30 minutes, we map your compliance posture and tell you precisely what applies to your business.
          </p>
        </div>
        <div className="md:text-right">
          <a href="#contact" className="btn-on-dark !px-8 !py-4 !text-[16px]">Book Your Free Assessment</a>
          <div className="text-[13px] text-white/60 mt-2">30 minutes. No commitment.</div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── EXPERTS ─────────────────────── */
type Expert = {
  name: string;
  title: string;
  badges: string[];
  bio: string;
  credentials: string[];
  photo: string;
  initials: string;
};

const experts: Expert[] = [
  {
    name: "Amit Sarkar",
    title: "Founder & Principal Consultant",
    badges: ["CISSP", "CISM", "ISO 27001 LA", "HIPAA", "Six Sigma"],
    bio: "Former CEO of a US Healthcare Regulatory Compliance organization and senior global leader in HIPAA, IT Security, and Risk Management. Author of multiple articles published in HCCA and SCCE. Master Black Belt in Six Sigma from GE. 20+ years leading compliance programs across USA, Canada, India, and the Middle East.",
    credentials: [
      "Published author — HCCA and SCCE",
      "7,000+ LinkedIn followers in compliance",
      "Led compliance for global Fortune-scale healthcare organizations",
    ],
    photo: "https://www.friggp2c.com/wp-content/uploads/2023/09/amit2.jpeg",
    initials: "AS",
  },
  {
    name: "James",
    title: "Senior Compliance Consultant",
    badges: ["ISO 27001", "SOC 2", "CISA"],
    bio: "Experienced compliance consultant specializing in ISO 27001 and SOC 2 implementations across diverse industries.",
    credentials: [
      "Multiple ISO 27001 implementations",
      "SOC 2 readiness specialist",
      "Enterprise risk assessment expert",
    ],
    photo: "https://www.friggp2c.com/wp-content/uploads/2026/03/james-1.jpeg",
    initials: "JM",
  },
  {
    name: "Paula",
    title: "Privacy & Data Protection Specialist",
    badges: ["CIPP", "CIPM", "PIPEDA"],
    bio: "Privacy specialist with deep expertise in Canadian data protection law, consent frameworks, and privacy impact assessments.",
    credentials: [
      "CIPP/C certified privacy professional",
      "PIPEDA compliance specialist",
      "Privacy impact assessment expert",
    ],
    photo: "https://www.friggp2c.com/wp-content/uploads/2026/03/paula_pic-1.jpg",
    initials: "PA",
  },
  {
    name: "Tina",
    title: "Cybersecurity & Risk Analyst",
    badges: ["CISM", "ISO 27001", "Risk Management"],
    bio: "Cybersecurity analyst focused on risk management frameworks, security control assessments, and continuous monitoring programs.",
    credentials: [
      "CISM certified security manager",
      "Risk assessment methodology expert",
      "Security operations specialist",
    ],
    photo: "https://www.friggp2c.com/wp-content/uploads/2026/03/tina_pic2-1.jpg",
    initials: "TI",
  },
];

export function ExpertsSection() {
  return (
    <section id="experts" className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal">
          <div className="section-label">YOUR COMPLIANCE EXPERTS</div>
          <h2 className="text-[32px] md:text-[46px] font-bold text-primary mt-3">Led by practitioners, not generalists.</h2>
          <p className="text-[19px] text-muted-foreground mt-3">
            Every Frigg engagement is led by a named, certified expert — not handed off to a junior analyst.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {experts.map((e) => (
            <div key={e.name} className="reveal card-flat p-6">
              <div className="flex items-start gap-4">
                <div className="relative shrink-0" style={{ height: 80, width: 80 }}>
                  <img
                    src={e.photo}
                    alt={e.name}
                    className="h-20 w-20 rounded-full object-cover border-[3px] border-accent"
                    style={{ objectPosition: "center top" }}
                    onError={(ev) => {
                      const img = ev.currentTarget;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 rounded-full items-center justify-center text-white text-[22px] font-bold border-[3px] border-accent" style={{ display: "none", backgroundColor: PHOTO_FALLBACK_BG }}>
                    {e.initials}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-[18px] font-bold text-primary">{e.name}</div>
                  <div className="text-[14px] text-muted-foreground mb-2">{e.title}</div>
                  <div className="flex flex-wrap gap-1">
                    {e.badges.map((b) => (
                      <span key={b} className="bg-accent-soft border border-accent text-[12px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded" style={{ color: "var(--color-accent-hover)" }}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border my-4" />

              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">{e.bio}</p>

              <ul className="space-y-1.5 mb-3">
                {e.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-[14px] text-primary font-medium">
                    <Check size={12} className="text-success mt-1.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              {/* [ADD REAL LINKEDIN URL] */}
              <a href="#" className="text-[14px] font-medium text-accent hover:underline">View LinkedIn →</a>
            </div>
          ))}
        </div>

        <p className="text-center text-[15px] text-muted-foreground mt-10">
          Supported by a team of CIPP, CIPM, CISA, CHPC, ISO 27001 Lead Implementer, and ISO 42001 (AIMS) certified specialists.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────── RESULTS ─────────────────────── */
export function ResultsSection() {
  const metrics = [
    { n: "3x–12x", l: "ROI on compliance investment" },
    { n: "60%", l: "Reduction in audit preparation time" },
    { n: "$500K+", l: "Enterprise pipeline unlocked post-SOC 2" },
    { n: "100%", l: "First-attempt audit pass rate" },
  ];
  const outcomes = [
    "Enterprise deals closed faster — procurement requirements satisfied upfront",
    "Security questionnaire time reduced by up to 80%",
    "Regulated-sector clients unlocked — finance, government, healthcare",
    "Compliance investment pays back within first two closed enterprise deals",
  ];

  return (
    <section id="results" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal">
          <div className="section-label">PROVEN RESULTS</div>
          <h2 className="text-[32px] md:text-[46px] font-bold text-primary mt-3">What our clients actually gain.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {metrics.map((m) => (
            <div key={m.n} className="reveal metric-card p-7 text-center">
              <div className="metric-num text-[28px] md:text-[32px] font-bold">{m.n}</div>
              <div className="text-[14px] text-muted-foreground mt-2 leading-snug">{m.l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {outcomes.map((o) => (
            <div key={o} className="flex items-start gap-3">
              <Check size={16} className="text-success mt-1 shrink-0" />
              <span className="text-[16px] text-primary font-medium">{o}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TESTIMONIALS — FIX 3: SIX REAL TESTIMONIALS, 2x3 grid ─────────────────────── */
export function TestimonialsSection() {
  const items = [
    {
      quote: "Frigg's deep expertise and organized approach guided us every step of the way, from identifying gaps to preparing for the audit. Their meticulous attention to detail and collaborative style truly made a difference. We recommend Frigg to any organization looking for a knowledgeable, dedicated partner for ISO 27001:2022 certification.",
      name: "Swathi Garikipati",
      title: "Associate Director, PMO, GRC & Delivery Assurance",
      company: "Evoke Technologies Private Limited",
      badge: "ISO 27001:2022",
    },
    {
      quote: "FriggP2C's HIPAA Compliance Attestation Services are reliable and consistent. Their team's quick response and effective problem-solving abilities have enabled us to maintain a high-level US Healthcare Regulatory Compliance.",
      name: "Rahul Deshmukh",
      title: "CISO",
      company: "A Global Data Solutions Firm",
      badge: "HIPAA Compliance",
    },
    {
      quote: "FriggP2C's Certification team provided invaluable guidance and support throughout the process, enabling us to meet the rigorous standards required for GDPR, HIPAA, SOC 2, and ISO 27001. Truly a partner you can trust.",
      name: "Associate Director",
      title: "Leading Technology and Consulting Company",
      company: "North America, Europe & APAC",
      badge: "SOC 2 | ISO 27001 | GDPR",
    },
    {
      quote: "FriggP2C's in-depth desk audits are thorough, and their team's attention to detail is unmatched. They leave no stone unturned and clearly show how well our compliance plan translates into practice.",
      name: "Sujit Piyush Pattnayak",
      title: "AVP",
      company: "Wellthy Therapeutics Pvt. Ltd.",
      badge: "Compliance Audit",
    },
    {
      quote: "Frigg brought deep expertise and a structured, business-aligned approach to AI governance. Their guidance was instrumental in helping us identify compliance gaps and build a robust AI Management System. Lightning Step successfully achieved ISO 42001:2023 certification.",
      name: "Martin Ignatovski",
      title: "CIO | CTO | CPO",
      company: "Lightning Step Technologies & Sunwave Health",
      badge: "ISO 42001:2023",
    },
    {
      quote: "Thank you Amit — we really appreciate your team's prompt attention to the penetration testing. We look forward to engaging with your team for further certification work.",
      name: "Louise",
      title: "Health Entrepreneur | Court-Qualified Expert",
      company: "Independent Healthcare Practice",
      badge: "Pen Testing | VAPT",
    },
  ];

  return (
    <section className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal text-center">
          <div className="section-label">CLIENT TESTIMONIALS</div>
          <h2 className="text-[32px] md:text-[46px] font-bold text-primary mt-3">In their own words.</h2>
          <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
            <div className="flex gap-1">
              {[0,1,2,3,4].map((i) => <Star key={i} size={18} className="fill-accent text-accent" />)}
            </div>
            <span className="text-[15px] text-muted-foreground">
              Rated 5/5 by clients across healthcare, technology, and SaaS
            </span>
          </div>
        </div>

        {/* 2x3 on desktop, single column on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items.map((t, i) => (
            <div key={i} className="reveal card-flat p-7 relative flex flex-col">
              <Quote size={40} className="text-accent/40 mb-4" />
              <p className="text-[16px] text-muted-foreground italic leading-[1.7] mb-5 flex-grow">"{t.quote}"</p>
              <div className="border-t border-border pt-4 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[15px] font-bold text-primary">{t.name}</div>
                  <div className="text-[14px] text-muted-foreground">{t.title}</div>
                  <div className="text-[14px] text-muted-foreground">{t.company}</div>
                </div>
                <span className="badge-framework whitespace-nowrap">{t.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CTA STRIP 3 ─────────────────────── */
export function CtaStrip3() {
  return (
    <section className="bg-white border-y border-border py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-[16px] font-semibold text-primary mb-2">
          Your business could be compliant in as little as 6 weeks.
        </p>
        <p className="text-[14px] text-muted-foreground mb-6">It starts with one 30-minute conversation.</p>
        <a href="#contact" className="btn-primary !text-[16px] !font-bold !px-10 !py-4">Book Your Free Assessment</a>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-3.5">
          <a href="tel:+19052619123" className="flex items-center gap-2 text-[15px] text-primary hover:underline">
            <Phone size={14} />
            <span>+1 (905) 261-9123</span>
          </a>
          <a href="https://wa.me/19052619123" className="flex items-center gap-2 text-[15px] hover:underline" style={{ color: "var(--color-whatsapp)" }}>
            <MessageCircle size={14} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PRICING ─────────────────────── */
export function PricingSection() {
  const plans = [
    { tag: "Best for new clients", title: "Project-Based", body: "Defined scope, fixed deliverables. Ideal for ISO 27001 implementation, SOC 2 readiness, PIPEDA gap assessments, and AIDA readiness projects.", uses: ["ISO 27001 implementation", "SOC 2 readiness program", "PIPEDA gap assessment", "AIDA readiness documentation"], featured: false, tagDark: false },
    { tag: "Most popular", title: "Retainer", body: "Continuous compliance management, virtual CISO, virtual DPO, and ongoing multi-framework monitoring. Best for organisations that need compliance to run continuously.", uses: ["Virtual CISO / vDPO services", "Continuous SOC 2 and ISO monitoring", "AI governance oversight", "Vendor risk management"], featured: true, tagDark: true },
    { tag: "Best value", title: "Combo Packages", body: "Pursuing ISO 27001 plus SOC 2 plus PIPEDA simultaneously? Integrated delivery reduces duplication and total cost significantly.", uses: ["ISO 27001 + SOC 2 combined", "PIPEDA + PHIPA together", "Multi-region compliance programs", "Bundled certification pathways"], featured: false, tagDark: false },
  ];

  return (
    <section id="how-it-works" className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal">
          <div className="section-label">ENGAGEMENT MODELS</div>
          <h2 className="text-[32px] md:text-[46px] font-bold text-primary mt-3">
            Flexible pricing built around your stage and goals.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {plans.map((p) => (
            <div key={p.title} className={`reveal card-flat p-7 ${p.featured ? "border-2" : ""}`} style={p.featured ? { borderColor: "var(--color-accent)" } : undefined}>
              <span className="inline-block rounded text-[12px] font-bold px-2 py-1 mb-3" style={p.tagDark ? { backgroundColor: "var(--color-primary)", color: "#fff" } : { backgroundColor: "var(--color-accent-soft)", color: "var(--color-accent-hover)" }}>
                {p.tag}
              </span>
              <h3 className="text-[22px] font-bold text-primary">{p.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed mt-2">{p.body}</p>
              <ul className="mt-3 space-y-1.5">
                {p.uses.map((u) => (
                  <li key={u} className="flex gap-2 text-[14px] text-primary font-medium">
                    <span className="text-accent">—</span>
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-[15px] text-muted-foreground mt-6">
          Not sure which model fits? The free assessment call answers this — no pressure.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────── FINAL CTA + CALENDLY ─────────────────────── */
export function FinalCtaSection() {
  const items = [
    "Identify your compliance gaps",
    "Understand which Canadian laws apply",
    "Leave with a written action roadmap",
  ];

  return (
    <section id="contact" className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-[32px] md:text-[46px] font-bold text-white">
          Don't wait for a deal to get blocked or a notice to arrive.
        </h2>
        <p className="text-[19px] text-white/80 max-w-xl mx-auto mt-4 leading-relaxed">
          In 30 minutes, we identify your compliance gaps, tell you exactly which Canadian laws apply to your business, and give you a clear, prioritized next step.
        </p>

        <div className="inline-flex flex-col items-start gap-2.5 my-6">
          {items.map((i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Check size={16} className="text-success" />
              <span className="text-[16px] font-medium text-white">{i}</span>
            </div>
          ))}
        </div>

        {/* [CRITICAL — REPLACE WITH REAL CALENDLY LINK BEFORE LAUNCH. THIS IS THE PRIMARY CONVERSION ELEMENT ON THE PAGE.] */}
        <div className="bg-white rounded-xl overflow-hidden max-w-3xl mx-auto mt-8 border border-border">
          <iframe
            title="Schedule your free assessment"
            src="https://calendly.com/friggbusinesssolutions/30min"
            className="w-full"
            style={{ height: 700, border: 0 }}
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
          <a href="mailto:service@friggp2c.com" className="flex items-center gap-2 text-[14px] text-white hover:text-accent">
            <Mail size={14} className="text-accent" />
            <span>service@friggp2c.com</span>
          </a>
          <a href="tel:+19052619123" className="flex items-center gap-2 text-[14px] text-white hover:text-accent">
            <Phone size={14} className="text-accent" />
            <span>+1 (905) 261-9123</span>
          </a>
          <a href="tel:+18669077227" className="flex items-center gap-2 text-[14px] text-white hover:text-accent">
            <Phone size={14} className="text-accent" />
            <span>+1 (866) 907-7227 (USA)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
