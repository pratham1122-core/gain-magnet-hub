import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

const STORAGE_KEY = "frigg_popup_shown";

/* [CONNECT FORM SUBMISSION TO GOOGLE SHEETS BEFORE LAUNCH]
   Target sheet: https://docs.google.com/spreadsheets/d/17fVg7K1d3v3cb4s4sd_FOLWUW1kC9ZV2o2uhw-ADopY/edit

   To wire this form to the Google Sheet, deploy a Google Apps Script Web App:
   1. Open the sheet → Extensions → Apps Script
   2. Paste:
        function doPost(e) {
          const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
          const data = JSON.parse(e.postData.contents);
          sheet.appendRow([new Date(), data.name, data.email, data.company, data.whatsapp, data.challenge]);
          return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
        }
   3. Deploy → New deployment → Web app → Execute as: Me, Access: Anyone
   4. Copy the Web App URL and paste it below as SHEET_ENDPOINT.
*/
const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbzlW3AWGmy4HIw6fvIzA2XW6Wy4qhtfOskAvyqZj1ILkpvN5z4QnbteIyUjixRfeBpT/exec";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      whatsapp: String(fd.get("whatsapp") || ""),
      challenge: String(fd.get("challenge") || ""),
      submittedAt: new Date().toISOString(),
    };

    try {
      if (SHEET_ENDPOINT) {
        await fetch(SHEET_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        console.warn("[LeadPopup] SHEET_ENDPOINT not configured — submission not sent.", payload);
      }
    } catch (err) {
      console.error("[LeadPopup] submission error", err);
    } finally {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setSubmitting(false);
      close();
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 220);
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        className="frigg-overlay"
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
          <input type="text" name="name" required maxLength={100} className="frigg-popup-input" placeholder="Full Name" />
          <input type="email" name="email" required maxLength={255} className="frigg-popup-input" placeholder="Business Email" />
          <input type="text" name="company" required maxLength={150} className="frigg-popup-input" placeholder="Company Name" />
          <input type="tel" name="whatsapp" required maxLength={25} pattern="[0-9+\-\s()]{7,25}" className="frigg-popup-input" placeholder="WhatsApp Number (with country code)" />
          <select name="challenge" required defaultValue="" className="frigg-popup-input appearance-none">
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
            disabled={submitting}
            className="btn-primary w-full mt-2 !text-[15px] sm:!text-[16px] !font-bold justify-center text-center"
            style={{ minHeight: 52, fontWeight: 700, padding: "14px 20px", lineHeight: 1.2 }}
          >
            {submitting ? "Submitting..." : "Book My Free Assessment →"}
          </button>
        </form>

        <div className="mt-3 text-center" style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.5 }}>
          <div className="flex items-center justify-center gap-1">
            <Lock size={11} />
            <span>Your info is safe with us — we'll only use it to give you the best service possible.</span>
          </div>
        </div>
      </div>
    </>
  );
}
