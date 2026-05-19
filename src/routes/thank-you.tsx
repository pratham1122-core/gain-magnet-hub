import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "You're Booked — Frigg Business Solutions" },
      {
        name: "description",
        content:
          "Your free compliance assessment is confirmed. A Frigg expert will map your exact risk and give you a clear action plan in 30 minutes.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

const LOGO =
  "https://www.friggp2c.com/wp-content/uploads/2023/10/MicrosoftTeams-image.png";
const WHATSAPP_URL = "https://wa.me/19052619123";
const SITE_URL = "https://www.friggp2c.com/";
const CASE_STUDIES_URL = "http://learn.friggp2c.com/case-studies";

const styles = `
:root{--navy:#1B2A6B;--cyan:#00B4D8;--cyan-dark:#006B7D;--cyan-light:#E6F8FC;--surface:#F4F8FB;--text:#1B2A6B;--text-2:#4A5568;--muted:#94A3B8;--border:#E2EBF0;--green:#22C55E;--wa:#25D366;}
.ty-page,.ty-page *{box-sizing:border-box;font-family:'Outfit',ui-sans-serif,system-ui,sans-serif;}
.ty-page{background:#fff;color:var(--text);line-height:1.7;}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes scaleIn{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
@keyframes drawCheck{from{stroke-dashoffset:60}to{stroke-dashoffset:0}}
@keyframes pulseGlow{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(0,180,216,.3)}50%{transform:scale(1.04);box-shadow:0 0 0 10px rgba(0,180,216,0)}}
@keyframes bounceY{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
@keyframes waPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}

.ty-hidden{opacity:0}
.ty-anim-up{animation:fadeUp .5s ease forwards}
.ty-stagger>*{opacity:0}
.ty-stagger.ty-in>*{animation:fadeUp .5s ease forwards}

/* Header */
.ty-header{display:flex;align-items:center;justify-content:space-between;padding:20px 48px;background:#fff;border-bottom:1px solid var(--border);}
.ty-header img{height:44px;object-fit:contain;display:block}
.ty-header .ty-brand-fallback{color:var(--navy);font-weight:700;font-size:16px}
.ty-header a{color:var(--cyan);font-weight:600;font-size:14px;text-decoration:none}
.ty-header a:hover{text-decoration:underline}
@media (max-width:640px){.ty-header{padding:16px 20px}}

/* Hero */
.ty-hero{background:var(--navy);padding:88px 24px 80px;text-align:center;position:relative;overflow:hidden;color:#fff;}
.ty-hero::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px);background-size:20px 20px;pointer-events:none}
.ty-hero-inner{position:relative;max-width:760px;margin:0 auto}
.ty-check{width:80px;height:80px;border-radius:50%;background:rgba(0,180,216,.2);border:2px solid var(--cyan);margin:0 auto 24px;display:flex;align-items:center;justify-content:center;opacity:0;animation:scaleIn .4s ease-out forwards;animation-delay:0s}
.ty-check.ty-pulse{animation:scaleIn .4s ease-out forwards,pulseGlow 2.5s ease-in-out infinite 1s}
.ty-check svg path{stroke-dasharray:60;stroke-dashoffset:60;animation:drawCheck .5s ease-out forwards;animation-delay:.35s}
.ty-label{display:inline-block;background:rgba(0,180,216,.2);border:1px solid rgba(0,180,216,.5);border-radius:4px;padding:4px 14px;font-size:12px;color:var(--cyan);font-weight:700;text-transform:uppercase;letter-spacing:.12em;opacity:0;animation:fadeIn .4s ease forwards;animation-delay:.5s}
.ty-h1{color:#fff;font-size:58px;font-weight:700;line-height:1.15;letter-spacing:-.02em;margin:18px 0 0;opacity:0;animation:fadeUp .5s ease forwards;animation-delay:.65s}
@media (max-width:768px){.ty-h1{font-size:36px}}
.ty-sub{font-size:19px;color:rgba(255,255,255,.75);max-width:620px;margin:16px auto 0;opacity:0;animation:fadeUp .5s ease forwards;animation-delay:.8s}
.ty-bullets{display:flex;justify-content:center;gap:32px;margin-top:28px;flex-wrap:wrap;opacity:0;animation:fadeIn .4s ease forwards;animation-delay:.95s}
.ty-bullets span{display:inline-flex;align-items:center;gap:6px;font-size:15px;font-weight:600;color:#fff}
.ty-nudge{margin-top:32px;display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:16px 24px;font-size:14px;color:rgba(255,255,255,.8);font-weight:500;opacity:0;animation:fadeIn .4s ease forwards;animation-delay:1.1s}
.ty-scroll{margin-top:48px;opacity:0;animation:fadeIn .4s ease forwards;animation-delay:1.3s;display:flex;flex-direction:column;align-items:center;gap:6px}
.ty-scroll svg{animation:bounceY 1.5s ease-in-out infinite}
.ty-scroll small{font-size:12px;color:rgba(255,255,255,.4)}

/* Sections */
.ty-section{padding:72px 24px}
.ty-label-tag{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cyan);text-align:center;display:block}
.ty-h2{font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.01em;color:var(--navy);text-align:center;margin:12px auto 32px;max-width:620px}
@media (max-width:768px){.ty-h2{font-size:28px}}

.ty-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:28px;transition:all .2s ease}
.ty-card:hover{border-color:var(--cyan);transform:translateY(-3px)}

.ty-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:880px;margin:0 auto}
@media (max-width:768px){.ty-grid-3{grid-template-columns:1fr}}

.ty-num{width:48px;height:48px;border-radius:50%;background:var(--navy);color:#fff;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;transition:background .2s ease}
.ty-step:hover .ty-num{background:var(--cyan)}
.ty-step{text-align:center}
.ty-step h3{font-size:22px;font-weight:600;color:var(--navy);margin:0 0 8px}
.ty-step p{font-size:15px;color:var(--text-2);line-height:1.65;margin:0}

/* Quick links */
.ty-quick{background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:64px 24px}
.ty-quick-sub{font-size:17px;color:var(--text-2);text-align:center;max-width:500px;margin:0 auto 40px}
.ty-quick-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:900px;margin:0 auto}
@media (max-width:768px){.ty-quick-grid{grid-template-columns:1fr}}
.ty-quick-card{display:flex;gap:16px;align-items:center;text-decoration:none;color:inherit}
.ty-quick-icon{width:48px;height:48px;border-radius:50%;background:var(--cyan-light);border:1px solid rgba(0,180,216,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--cyan);transition:all .2s ease}
.ty-quick-card .ty-quick-body{display:flex;flex-direction:column}
.ty-quick-card h4{font-size:16px;color:var(--navy);font-weight:700;margin:0 0 4px}
.ty-quick-card p{font-size:13px;color:var(--text-2);line-height:1.5;margin:0 0 10px}
.ty-quick-card .ty-link{font-size:13px;color:var(--cyan);font-weight:600}
.ty-quick-card:hover .ty-link{text-decoration:underline}
.ty-quick-card.ty-wa:hover{border-color:#25D366!important}
.ty-quick-card.ty-wa:hover .ty-quick-icon{background:rgba(37,211,99,.1)}

/* Testimonials */
.ty-stars{display:flex;justify-content:center;align-items:center;gap:6px;margin-bottom:40px;color:var(--cyan);font-size:14px}
.ty-stars span{color:var(--text-2)}
.ty-test-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:960px;margin:0 auto}
@media (max-width:768px){.ty-test-grid{grid-template-columns:1fr}}
.ty-test blockquote{font-size:16px;color:var(--text-2);font-style:italic;line-height:1.75;margin:0 0 20px}
.ty-test .ty-quote-mark{color:var(--cyan);opacity:.2;font-size:40px;line-height:1;margin-bottom:14px}
.ty-test hr{border:none;border-top:1px solid var(--border);margin:0}
.ty-test-foot{display:flex;justify-content:space-between;align-items:flex-start;margin-top:16px;gap:12px}
.ty-test-foot .ty-name{font-size:15px;color:var(--navy);font-weight:700}
.ty-test-foot .ty-meta{font-size:13px;color:var(--text-2);margin-top:2px}
.ty-badge{background:var(--cyan-light);border:1px solid rgba(0,180,216,.4);border-radius:4px;padding:3px 8px;font-weight:700;font-size:11px;color:var(--cyan-dark);text-transform:uppercase;white-space:nowrap;flex-shrink:0}

/* Stats */
.ty-stats{background:var(--navy);padding:48px 24px}
.ty-stats-row{display:grid;grid-template-columns:repeat(4,1fr);max-width:860px;margin:0 auto;gap:0}
.ty-stat{text-align:center;padding:8px 16px;border-right:1px solid rgba(255,255,255,.15)}
.ty-stat:last-child{border-right:none}
.ty-stat .ty-num-big{font-size:34px;font-weight:700;color:#fff;transition:color .2s}
.ty-stat:hover .ty-num-big{color:var(--cyan)}
.ty-stat .ty-stat-label{font-size:13px;color:var(--cyan);font-weight:500;margin-top:8px}
@media (max-width:768px){.ty-stats-row{grid-template-columns:repeat(2,1fr)}.ty-stat{border-bottom:1px solid rgba(255,255,255,.15);padding:16px}.ty-stat:nth-child(2){border-right:none}.ty-stat:nth-child(3),.ty-stat:nth-child(4){border-bottom:none}}

/* WhatsApp CTA */
.ty-wa-cta{padding:72px 24px;text-align:center;border-top:1px solid var(--border)}
.ty-wa-circle{width:64px;height:64px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;animation:waPulse 2.5s ease-in-out infinite}
.ty-wa-cta h3{font-size:22px;color:var(--navy);font-weight:700;margin:0 0 10px}
.ty-wa-cta p{font-size:17px;color:var(--text-2);max-width:460px;margin:0 auto 28px}
.ty-wa-btn{display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;font-weight:700;font-size:16px;border-radius:8px;padding:14px 36px;text-decoration:none;transition:all .2s ease}
.ty-wa-btn:hover{background:#1DA851;transform:translateY(-1px)}
.ty-contact-row{display:flex;justify-content:center;gap:24px;margin-top:14px;flex-wrap:wrap}
.ty-contact-row a{display:inline-flex;align-items:center;gap:6px;font-size:14px;color:var(--text-2);text-decoration:none}
.ty-contact-row a:hover{color:var(--cyan)}

/* Footer */
.ty-footer{background:var(--navy);padding:32px 24px;text-align:center;color:#fff}
.ty-footer img{height:40px;object-fit:contain;margin:0 auto 14px;display:block}
.ty-footer-links{display:flex;justify-content:center;gap:24px;margin-bottom:12px;flex-wrap:wrap}
.ty-footer-links a{color:rgba(255,255,255,.6);text-decoration:none;font-size:14px}
.ty-footer-links a:hover{color:var(--cyan)}
.ty-footer-divider{border:none;border-top:1px solid rgba(255,255,255,.1);max-width:400px;margin:16px auto}
.ty-footer small{font-size:12px;color:rgba(255,255,255,.35)}

/* Floating WhatsApp */
.ty-float-wa{position:fixed;right:24px;bottom:24px;width:54px;height:54px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;z-index:50;transition:transform .2s ease;box-shadow:0 6px 18px rgba(0,0,0,.18)}
.ty-float-wa:hover{transform:scale(1.1)}
`;

function CheckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M9 18.5L15.5 25L27 12"
        stroke="#00B4D8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmallCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="5 12 10 17 19 7" />
    </svg>
  );
}

function MailIcon({ size = 16, color = "#00B4D8" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon({ size = 14, color = "#00B4D8" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.89.34 1.83.57 2.79.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}

function CaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function WAIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.42c-.003 6.557-5.338 11.891-11.893 11.891a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

const STEPS = [
  { n: "01", t: "We map your exposure", b: "We ask 6–8 focused questions about your business, data practices, and documentation. Zero prep needed from your side." },
  { n: "02", t: "We identify what applies", b: "We tell you precisely which Canadian laws and frameworks apply — PIPEDA, AIDA, PHIPA, SOC 2, ISO 27001, or a combination — and why." },
  { n: "03", t: "You leave with a plan", b: "A prioritized action roadmap handed to you on the call. What to fix first, realistic timelines, and what compliance unlocks for your business." },
];

const TESTIMONIALS = [
  { q: "Frigg's deep expertise and organized approach guided us every step of the way, from identifying gaps to preparing for the audit. Their meticulous attention to detail and collaborative style truly made a difference. We recommend Frigg to any organization looking for a knowledgeable, dedicated partner for ISO 27001:2022 certification.", n: "Swathi Garikipati", t: "Associate Director, PMO, GRC & Delivery Assurance", c: "Evoke Technologies Private Limited", b: "ISO 27001:2022" },
  { q: "FriggP2C's HIPAA Compliance Attestation Services are reliable and consistent. Their team's quick response and effective problem-solving abilities have enabled us to maintain a high-level US Healthcare Regulatory Compliance.", n: "Rahul Deshmukh", t: "CISO", c: "Global Data Solutions Firm", b: "HIPAA Compliance" },
  { q: "FriggP2C's Certification team provided invaluable guidance and support throughout the process, enabling us to meet the rigorous standards required for GDPR, HIPAA, SOC 2, and ISO 27001. Truly a partner you can trust.", n: "Associate Director", t: "Leading Technology & Consulting Company", c: "North America, Europe & APAC", b: "Multi-Framework" },
  { q: "FriggP2C's in-depth desk audits are thorough, and their team's attention to detail is unmatched. They leave no stone unturned and clearly show how well our compliance plan translates into practice.", n: "Sujit Piyush Pattnayak", t: "AVP", c: "Wellthy Therapeutics Pvt. Ltd.", b: "Compliance Audit" },
  { q: "Frigg played a critical role throughout our SOC 2 Type II attestation journey. Their structured approach and hands-on guidance ensured a smooth process from readiness through final certification within the planned timeline.", n: "Martin Ignatovski", t: "CIO | CTO | CPO", c: "Lightning Step Technologies & Sunwave Health", b: "SOC 2 Type II" },
  { q: "Thank you Amit — we really appreciate your team's prompt attention to the penetration testing. We look forward to engaging with your team for further certification work.", n: "Louise", t: "Health Entrepreneur | Court-Qualified Expert", c: "Independent Healthcare Practice", b: "VAPT | Pen Testing" },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("ty-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return ref;
}

function CountUp({ end, suffix = "", duration = 1800, start }: { end: number; suffix?: string; duration?: number; start: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);
  return <>{v.toLocaleString()}{suffix}</>;
}

function StatsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section className="ty-stats" ref={ref}>
      <div className="ty-stats-row">
        <div className="ty-stat"><div className="ty-num-big"><CountUp end={15000} suffix="+" start={on} /></div><div className="ty-stat-label">Businesses Supported Globally</div></div>
        <div className="ty-stat"><div className="ty-num-big"><CountUp end={25} suffix="+" start={on} /></div><div className="ty-stat-label">Years Combined Experience</div></div>
        <div className="ty-stat"><div className="ty-num-big"><CountUp end={100} suffix="%" start={on} /></div><div className="ty-stat-label">First-Attempt Audit Success Rate</div></div>
        <div className="ty-stat"><div className="ty-num-big">5x–12x</div><div className="ty-stat-label">Average Client ROI</div></div>
      </div>
    </section>
  );
}

function ThankYouPage() {
  const stepsRef = useReveal<HTMLDivElement>();
  const quickRef = useReveal<HTMLDivElement>();
  const testRef = useReveal<HTMLDivElement>();

  const onLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = "none";
    const parent = img.parentElement;
    if (parent && !parent.querySelector(".ty-brand-fallback")) {
      const span = document.createElement("span");
      span.className = "ty-brand-fallback";
      span.textContent = "Frigg Business Solutions";
      parent.insertBefore(span, img);
    }
  };

  return (
    <div className="ty-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Header */}
      <header className="ty-header">
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" aria-label="Frigg Business Solutions">
          <img src={LOGO} alt="Frigg Business Solutions" onError={onLogoError} />
        </a>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer">Visit our website →</a>
      </header>

      {/* Hero */}
      <section className="ty-hero">
        <div className="ty-hero-inner">
          <div className="ty-check ty-pulse">
            <CheckIcon />
          </div>
          <span className="ty-label">You're officially booked</span>
          <h1 className="ty-h1">You just made the best compliance decision of the year.</h1>
          <p className="ty-sub">A Frigg compliance expert will be on that call ready to map your exact risk, identify every Canadian law that applies to your business, and hand you a clear action plan — in 30 minutes flat.</p>
          <div className="ty-bullets">
            <span><SmallCheck /> No prep needed</span>
            <span><SmallCheck /> No jargon</span>
            <span><SmallCheck /> Walk away with a real plan</span>
          </div>
          <div className="ty-nudge">
            <MailIcon />
            Check your inbox — your Calendly confirmation is on its way.
          </div>
          <div className="ty-scroll">
            <ChevronDown />
            <small>See what our clients say</small>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="ty-section">
        <span className="ty-label-tag">What happens in your 30 minutes</span>
        <h2 className="ty-h2">Here's exactly what you get on the call.</h2>
        <div className="ty-grid-3 ty-stagger" ref={stepsRef}>
          {STEPS.map((s) => (
            <div className="ty-card ty-step" key={s.n}>
              <div className="ty-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="ty-quick">
        <span className="ty-label-tag">While you wait</span>
        <h2 className="ty-h2" style={{ marginBottom: 12 }}>Explore what's possible.</h2>
        <p className="ty-quick-sub">See how businesses like yours achieved compliance — and what it unlocked.</p>
        <div className="ty-quick-grid ty-stagger" ref={quickRef}>
          <a className="ty-card ty-quick-card" href={SITE_URL} target="_blank" rel="noopener noreferrer">
            <div className="ty-quick-icon"><GlobeIcon /></div>
            <div className="ty-quick-body">
              <h4>Visit the Frigg Website</h4>
              <p>Learn about our full range of compliance services across Canada, USA, India, and UAE.</p>
              <span className="ty-link">→ friggp2c.com</span>
            </div>
          </a>
          <a className="ty-card ty-quick-card" href={CASE_STUDIES_URL} target="_blank" rel="noopener noreferrer">
            <div className="ty-quick-icon"><CaseIcon /></div>
            <div className="ty-quick-body">
              <h4>See Our Case Studies</h4>
              <p>Real clients. Verified outcomes. PIPEDA, SOC 2, ISO 27001, HIPAA, AIDA — see the results we've delivered.</p>
              <span className="ty-link">→ View case studies</span>
            </div>
          </a>
          <a className="ty-card ty-quick-card ty-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <div className="ty-quick-icon" style={{ color: "#25D366" }}><WAIcon size={22} color="#25D366" /></div>
            <div className="ty-quick-body">
              <h4>Message Us on WhatsApp</h4>
              <p>Have a question before the call? Our team typically responds within a few hours.</p>
              <span className="ty-link">→ Chat on WhatsApp</span>
            </div>
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ty-section" style={{ padding: "88px 24px" }}>
        <span className="ty-label-tag">What our clients say</span>
        <h2 className="ty-h2" style={{ marginBottom: 12 }}>The decision you just made — they made it too.</h2>
        <div className="ty-stars">
          {[0,1,2,3,4].map((i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#00B4D8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          ))}
          <span>Rated 5/5 — verified client reviews</span>
        </div>
        <div className="ty-test-grid ty-stagger" ref={testRef}>
          {TESTIMONIALS.map((t, i) => (
            <div className="ty-card ty-test" key={i}>
              <div className="ty-quote-mark">“</div>
              <blockquote>{t.q}</blockquote>
              <hr />
              <div className="ty-test-foot">
                <div>
                  <div className="ty-name">{t.n}</div>
                  <div className="ty-meta">{t.t}</div>
                  <div className="ty-meta">{t.c}</div>
                </div>
                <span className="ty-badge">{t.b}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <StatsBlock />

      {/* WhatsApp CTA */}
      <section className="ty-wa-cta">
        <div className="ty-wa-circle"><WAIcon size={28} color="#fff" /></div>
        <h3>Have a question before the call?</h3>
        <p>Our team is available on WhatsApp. Most questions answered within a few hours.</p>
        <a className="ty-wa-btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chat on WhatsApp Now</a>
        <div className="ty-contact-row">
          <a href="mailto:service@friggp2c.com"><MailIcon size={14} /> service@friggp2c.com</a>
          <a href="tel:+19052619123"><PhoneIcon size={14} /> +1 (905) 261-9123</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="ty-footer">
        <img src={LOGO} alt="Frigg Business Solutions" onError={onLogoError} />
        <div className="ty-footer-links">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer">Visit Website</a>
          <a href={CASE_STUDIES_URL} target="_blank" rel="noopener noreferrer">Case Studies</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
        <hr className="ty-footer-divider" />
        <small>© 2025 Frigg Business Solutions. USA | Canada | India | UAE. All rights reserved.</small>
      </footer>

      {/* Floating WhatsApp */}
      <a className="ty-float-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us">
        <WAIcon size={24} color="#fff" />
      </a>
    </div>
  );
}