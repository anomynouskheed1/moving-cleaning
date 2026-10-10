import { site, reasons } from "@/lib/site";

const headFont = "font-[family-name:var(--font-head)]";

const details = [
    "A trained crew that knows how to pack, lift and clean properly, for homes and offices.",
    "We arrive when we say we will, so your move and your schedule stay on track.",
    "You get a clear price before any work starts. No surprises on the day.",
];

const steps = [
    { title: "Call or message us", text: "Tell us what you need moved or cleaned, and where." },
    { title: "Get your free quote", text: "We send a clear price so you can decide with confidence." },
    { title: "We handle the rest", text: "Our team arrives on time and does the heavy lifting." },
];

export default function WhyUs() {
    return (
        <section id="why" className="bg-[#f5f7fb] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="text-sm font-semibold text-[#2f6fd0]">The Shammah difference</p>
                        <h2 className={`${headFont} mt-3 text-5xl font-extrabold uppercase leading-[0.92] text-[#061f52] sm:text-6xl lg:text-7xl`}>
                            Why choose us?
                        </h2>
                        <p className="mt-6 max-w-sm text-lg leading-relaxed text-[#37507f]">
                            {site.hours}. Get in touch today for a free quote and let us handle the heavy lifting.
                        </p>
                    </div>

                    <ul className="border-t border-[#c9d6ee]">
                        {reasons.map((r, i) => (
                            <li key={r} className="flex gap-6 border-b border-[#c9d6ee] py-8">
                                <svg width="40" height="40" viewBox="0 0 24 24" className="mt-1 shrink-0" aria-hidden="true">
                                    <circle cx="12" cy="12" r="11" fill="#0a3a8f" />
                                    <path d="m7 12.5 3.2 3.2L17 9" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div>
                                    <h3 className={`${headFont} text-3xl font-bold uppercase leading-none text-[#061f52] sm:text-4xl`}>{r}</h3>
                                    <p className="mt-3 max-w-lg text-lg leading-relaxed text-[#37507f]">{details[i]}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* How it works */}
                <div className="mt-20 rounded-3xl bg-[#061f52] p-8 text-white sm:p-12">
                    <h3 className={`${headFont} text-4xl font-extrabold uppercase sm:text-5xl`}>How it works</h3>
                    <ol className="mt-8 grid gap-8 md:grid-cols-3">
                        {steps.map((s, i) => (
                            <li key={s.title} className="relative border-t-2 border-[#2f6fd0] pt-5">
                                <span className={`${headFont} text-5xl font-extrabold leading-none text-[#2f6fd0]`}>{i + 1}</span>
                                <h4 className={`${headFont} mt-3 text-2xl font-bold uppercase`}>{s.title}</h4>
                                <p className="mt-2 leading-relaxed text-[#cfe0ff]">{s.text}</p>
                            </li>
                        ))}
                    </ol>
                    <a
                        href={site.phoneHref}
                        className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-bold text-[#0a3a8f] transition hover:bg-[#dbe7ff]"
                    >
                        Call {site.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}