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
      style={{ backgroundColor: "#fff", fontFamily: "'Outfit', ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="max-w-lg text-center">
        <h1
          className="font-bold tracking-tight mb-5"
          style={{ fontSize: "36px", color: "#1B2A6B", lineHeight: 1.15 }}
        >
          Thank You
        </h1>
        <p
          className="mb-6"
          style={{ fontSize: "18px", color: "#4A5568", lineHeight: 1.7 }}
        >
          Thank you for providing your details. One of our experts will get in touch with you very shortly.
        </p>
        <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.7 }}>
          You can also visit our website{" "}
          <a
            href="https://www.friggp2c.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 hover:no-underline"
            style={{ color: "#00B4D8" }}
          >
            www.friggp2c.com
          </a>{" "}
          to explore more.
        </p>
      </div>
    </main>
  );
}
