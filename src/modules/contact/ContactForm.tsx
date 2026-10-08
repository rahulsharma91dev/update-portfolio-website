"use client";
import { FormEvent, useState } from "react";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formId) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("email")}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) { setStatus("ok"); form.reset(); } else { setStatus("error"); }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form card" onSubmit={onSubmit}>
      <label className="contact-form__field" htmlFor="cf-name">Name
        <input id="cf-name" name="name" className="contact-form__input" required autoComplete="name" />
      </label>
      <label className="contact-form__field" htmlFor="cf-email">Email
        <input id="cf-email" name="email" type="email" className="contact-form__input" required autoComplete="email" />
      </label>
      <label className="contact-form__field" htmlFor="cf-message">Message
        <textarea id="cf-message" name="message" className="contact-form__input contact-form__input--area" rows={4} required />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="u-hidden" aria-hidden="true" />
      <button type="submit" className="pill-btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="contact-form__note" role="status" aria-live="polite">
        {status === "ok" && "Thanks! Your message has been sent."}
        {status === "error" && "Something went wrong. Please email me directly."}
      </p>
    </form>
  );
}
