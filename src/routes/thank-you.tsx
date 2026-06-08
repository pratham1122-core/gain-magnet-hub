import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Frigg Business Solutions" },
      {
        name: "description",
        content:
          "Thank you for providing your details. One of our experts will get in touch with you shortly.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f7fa 50%, #f8f9ff 100%)",
        fontFamily: "'Outfit', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div
        className="max-w-lg text-center px-10 py-14 rounded-3xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 25px 80px rgba(27,42,107,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset",
        }}
      >
        {/* Success icon */}
        <div
          className="mx-auto mb-8 flex items-center justify-center"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00B4D8, #1B2A6B)",
            boxShadow: "0 12px 32px rgba(0,180,216,0.35)",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1
          className="font-bold tracking-tight mb-4"
          style={{ fontSize: "40px", color: "#1B2A6B", lineHeight: 1.15 }}
        >
          Thank You
        </h1>

        <div
          className="mx-auto mb-6"
          style={{ width: 48, height: 3, borderRadius: 2, backgroundColor: "#00B4D8" }}
        />

        <p
          className="mb-8"
          style={{ fontSize: "17px", color: "#4A5568", lineHeight: 1.8 }}
        >
          Thank you for providing your details. One of our experts will get in touch with you very shortly.
        </p>

        <a
          href="https://www.friggp2c.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:gap-3"
          style={{
            color: "#fff",
            background: "linear-gradient(135deg, #00B4D8, #1B2A6B)",
            borderRadius: 10,
            padding: "14px 28px",
            fontSize: "15px",
            boxShadow: "0 8px 24px rgba(0,180,216,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,180,216,0.4)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,180,216,0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Explore Our Website
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </main>
  );
}
