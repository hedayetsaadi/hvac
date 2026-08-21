// Reusable service-request form with client-side validation and confirmation.
"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "../site-config";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/request-service", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setState("sent");
    } catch { setState("error"); }
  }

  if (state === "sent") return <div className="form-success" role="status"><span>✓</span><h3>Request received</h3><p>Thanks! A comfort coordinator will call you shortly to confirm the appointment window.</p><button className="text-button" onClick={() => setState("idle")}>Send another request</button></div>;

  return (
    <form className={`booking-form${compact ? " compact-form" : ""}`} onSubmit={submit}>
      <div className="field-row"><label>Full name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="(555) 000-0000" /></label></div>
      <div className="field-row"><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>Service needed<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{siteConfig.services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Not sure yet</option></select></label></div>
      {!compact && <div className="field-row"><label>Preferred day<input name="date" type="date" /></label><label>ZIP code<input name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="00000" /></label></div>}
      <label>How can we help?<textarea name="message" rows={compact ? 3 : 4} placeholder="Tell us what your system is doing…" /></label>
      <label className="consent"><input type="checkbox" required /> <span>I agree to be contacted about this service request.</span></label>
      <button className="button button-wide" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Request service"}<span>→</span></button>
      {state === "error" && <p className="form-error" role="alert">We couldn’t send that request. Please call {siteConfig.contact.phoneDisplay}.</p>}
    </form>
  );
}
// End reusable service-request form.
