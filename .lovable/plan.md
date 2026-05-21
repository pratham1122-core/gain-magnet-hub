## Problem

The redirect listener in `FinalCtaSection` (src/components/landing-sections.tsx) is wired correctly — it listens for `calendly.event_scheduled` postMessages and navigates to `/thank-you`. But the Calendly iframe never sends that message, so nothing happens after a booking.

Calendly only emits its postMessage events (`profile_page_viewed`, `event_type_viewed`, `date_and_time_selected`, `event_scheduled`) when the iframe URL declares the parent embed context via query params. Without them, the booking iframe behaves like a standalone page and stays silent.

## Fix

Update the Calendly iframe in `FinalCtaSection` so its `src` includes the required embed params:

- `embed_domain=<parent hostname>` — must match the page hosting the iframe
- `embed_type=Inline`

Build the URL inside the component using `window.location.hostname` (guarded for SSR) so it works on preview, published, and the custom `learn.friggp2c.com` domain without hardcoding.

Example shape:
```
https://calendly.com/friggbusinesssolutions/30min?embed_domain={hostname}&embed_type=Inline
```

Also harden the message listener slightly:
- Filter `e.origin` to `https://calendly.com` before acting (defensive — avoids reacting to unrelated postMessages).

No other files need to change. The `/thank-you` route, the listener effect, and analytics tags are already in place.

## Verification

After the change, open the booking section, complete a test booking through Calendly, and confirm the page navigates to `/thank-you`. If the user prefers not to consume a real booking slot, we can temporarily log the incoming message events to confirm Calendly is now posting them.