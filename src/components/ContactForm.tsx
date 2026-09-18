"use client";

import { useState } from "react";
import { waLink } from "@/lib/data";
import { Container, Eyebrow } from "./ui";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Property Development");
  const [message, setMessage] = useState("");

  const services = [
    "Property Development",
    "Building Construction",
    "Detailed Construction Finishes",
    "Building Maintenance",
    "Construction Materials",
    "M&E (Mechanical & Electrical)",
    "General Enquiry",
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi Smeatonian BC, my name is ${name || "—"}.\nPhone: ${
      phone || "—"
    }\nService interested in: ${service}\nMessage: ${message || "—"}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-ink py-16 md:py-20 border-t border-paper/10">
      <Container className="mx-auto max-w-2xl">
        <div className="text-center">
          <Eyebrow>Send us a message</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Tell us about your project
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
            Fill in a few details and we&apos;ll pick up the conversation on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="rounded-xl border border-paper/15 bg-paper/[0.04] px-4 py-3.5 text-[15px] text-paper placeholder:text-paper/40 outline-none focus:border-gold/60"
            />
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="rounded-xl border border-paper/15 bg-paper/[0.04] px-4 py-3.5 text-[15px] text-paper placeholder:text-paper/40 outline-none focus:border-gold/60"
            />
          </div>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rounded-xl border border-paper/15 bg-paper/[0.04] px-4 py-3.5 text-[15px] text-paper outline-none focus:border-gold/60"
          >
            {services.map((s) => (
              <option key={s} value={s} className="bg-ink">
                {s}
              </option>
            ))}
          </select>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us a bit about your project or enquiry"
            rows={5}
            className="rounded-xl border border-paper/15 bg-paper/[0.04] px-4 py-3.5 text-[15px] text-paper placeholder:text-paper/40 outline-none focus:border-gold/60"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
          >
            Send via WhatsApp
          </button>
        </form>
      </Container>
    </section>
  );
}
