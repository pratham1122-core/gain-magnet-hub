import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

/** WhatsApp floating action button (always visible). */
export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/19052619123"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      className="fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
      style={{ backgroundColor: "var(--color-whatsapp)", height: 52, width: 52 }}
    >
      <MessageCircle size={24} />
    </a>
  );
}

/** Mobile sticky booking bar — appears after 200px scroll, mobile only. */
export function MobileStickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 h-14 bg-primary px-4 flex items-center justify-between transition-transform ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="text-[14px] font-semibold text-white">Book Free Assessment</span>
      <a
        href="#contact"
        className="bg-accent text-white text-[12px] font-bold rounded-md px-3.5 py-2"
      >
        30 Min — Free
      </a>
    </div>
  );
}
