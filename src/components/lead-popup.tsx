import { useEffect, useState } from "react";
import { X, Lock } from "lucide-react";

const STORAGE_KEY = "frigg_popup_shown";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* [CONNECT FORM SUBMISSION TO REAL CRM OR EMAIL BEFORE LAUNCH — currently scrolls to Calendly on click] */
    close();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 220);
  };

  if (!open) return null;

  return (
    <>
      <div
        className="frigg-overlay"
        onClick={close}
        style={closing ? { opacity: 0, transition: "opacity 0.2s ease-in" } : undefined}
      />
      <div
        className="frigg-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="frigg-popup-title"
        style={
          closing
            ? {
                opacity: 0,
                transform: "translate(-50%, -50%) scale(0.9)",
                transition: "opacity 0.2s ease-in, transform 0.2s ease-in",
                animation: "none",
              }
            : undefined
        }
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center hover:bg-border transition-colors"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <X size={14} style={{ color: "var(--color-muted-foreground)" }} />
        </button>

        <div
          className="font-bold uppercase mb-3"
          style={{
            fontSize: 12,
            color: "var(--color-accent)",
            letterSpacing: "0.1em",
          }}
        >
          FREE 30-MINUTE ASSESSMENT
        </div>

        <h3
          id="frigg-popup-title"
          className="font-bold mb-2.5"
          style={{
            fontSize: 24,
            color: "var(--color-primary)",
            lineHeight: 1.25,
          }}
        >
          Find out if your business is compliant in Canada — in 30 minutes.
        </h3>
        <style>{`@media (max-width: 480px) { #frigg-popup-title { font-size: 20px !important; } }`}</style>

        <p
          style={{
            fontSize: 15,
            color: "var(--color-muted-foreground)",
            lineHeight: 1.6,
            marginBottom: 24,
          }}
        >
          Tell us a little about your business and a Frigg expert will map your exact compliance risk — no commitment, no jargon.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" required className="frigg-popup-input" placeholder="Full Name" />
          <input type="email" required className="frigg-popup-input" placeholder="Business Email" />
          <input type="text" required className="frigg-popup-input" placeholder="Company Name" />
          <select required defaultValue="" className="frigg-popup-input appearance-none">
            <option value="" disabled>Select your biggest challenge...</option>
            <option>I don't know where to start</option>
            <option>Preparing for a PIPEDA or PHIPA audit</option>
            <option>SOC 2 or ISO 27001 certification</option>
            <option>AIDA — AI compliance requirements</option>
            <option>Multi-framework compliance</option>
            <option>Urgent regulatory deadline</option>
          </select>

          <button
            type="submit"
            className="btn-primary w-full mt-2"
            style={{ height: 48, fontWeight: 700 }}
          >
            Book My Free Assessment →
          </button>
        </form>

        <div className="mt-3 text-center" style={{ fontSize: 12, color: "#94A3B8" }}>
          <div>No commitment required. Cancel anytime.</div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Lock size={11} />
            <span>Your information is never shared.</span>
          </div>
        </div>
      </div>
    </>
  );
}
