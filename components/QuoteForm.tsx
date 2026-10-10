"use client";
import { useState } from "react";
import { services, site } from "@/lib/site";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0].title);
  const [details, setDetails] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello ${site.short}, I would like a free quote.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const label = "grid gap-1.5 text-sm font-semibold text-[#061f52]";
  const field =
    "w-full rounded-xl border border-[#c9d6ee] bg-white px-4 py-3.5 text-base font-normal text-[#061f52] outline-none transition placeholder:text-[#8a9bbd] focus:border-[#1f5fd0] focus:ring-4 focus:ring-[#1f5fd0]/20";

  return (
    <form onSubmit={send} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Your name
          <input className={field} required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className={label}>
          Phone number
          <input className={field} required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
        </label>
      </div>
      <label className={label}>
        Service needed
        <select className={field} value={service} onChange={(e) => setService(e.target.value)}>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
      </label>
      <label className={label}>
        Details
        <textarea
          className={field}
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Where from, where to, date, size of the job"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-[#0a3a8f] px-6 py-4 text-base font-bold text-white transition hover:bg-[#1f5fd0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f5fd0]"
      >
        Send request on WhatsApp
      </button>
      <p className="text-center text-sm text-[#37507f]">Free quote. No obligation.</p>
    </form>
  );
}