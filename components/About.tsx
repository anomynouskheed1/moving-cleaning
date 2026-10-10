import Icon from "@/components/Icons";
import { site, services } from "@/lib/site";

const headFont = "font-[family-name:var(--font-head)]";

const moving = services.filter((s) => /moving|relocation/i.test(s.title));
const cleaning = services.filter((s) => !/moving|relocation/i.test(s.title));

const facts = [
    { value: String(services.length), label: "services under one roof" },
    { value: "7", label: "days a week, always available" },
    { value: "Free", label: "quote on every job" },
];

export default function About() {
    return (
        <section id="about" className="bg-[#f5f7fb] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
                    {/* Story */}
                    <div>
                        <p className="text-sm font-semibold text-[#2f6fd0]">About {site.name}</p>
                        <h2 className={`${headFont} mt-3 text-5xl font-extrabold uppercase leading-[0.92] text-[#0a3a8f] sm:text-6xl lg:text-7xl`}>
                            One team for the move. One team for the clean.
                        </h2>
                        <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#37507f]">
                            {site.name} helps homes and businesses change space without the stress. We pack, carry and
                            deliver your belongings safely, then leave the place you came from, or the place you are
                            moving into, spotless.
                        </p>
                        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#37507f]">
                            Our crew is licensed and experienced, arrives on time, and quotes a clear price before any
                            work starts. Home or office, big job or small, we handle the heavy lifting.
                        </p>

                        <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[#c9d6ee] pt-8">
                            {facts.map((f) => (
                                <div key={f.label}>
                                    <dt className={`${headFont} text-5xl font-extrabold leading-none text-[#0a3a8f] sm:text-6xl`}>
                                        {f.value}
                                    </dt>
                                    <dd className="mt-2 text-sm leading-snug text-[#37507f]">{f.label}</dd>
                                </div>
                            ))}
                        </dl>

                        <a
                            href="#contact"
                            className="mt-10 inline-block rounded-full bg-[#0a3a8f] px-8 py-4 font-bold text-white transition hover:bg-[#1f5fd0]"
                        >
                            Talk to our team
                        </a>
                    </div>

                    {/* Two halves of the business */}
                    <div className="grid gap-5 self-start">
                        <article className="rounded-3xl bg-[#0a3a8f] p-8 text-white sm:p-10">
                            <h3 className={`${headFont} text-4xl font-extrabold uppercase`}>We move you</h3>
                            <p className="mt-2 text-[#cfe0ff]">Careful packing, loading and delivery.</p>
                            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                                {moving.map((s) => (
                                    <li key={s.title} className="flex gap-4">
                                        <span className="mt-1 shrink-0 text-[#9bbcf5]"><Icon name={s.icon} /></span>
                                        <span>
                                            <span className={`${headFont} block text-2xl font-bold leading-none`}>{s.title}</span>
                                            <span className="mt-1.5 block text-sm leading-snug text-[#cfe0ff]">{s.text}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-3xl bg-white p-8 ring-1 ring-[#dbe3f3] sm:ml-10 sm:p-10">
                            <h3 className={`${headFont} text-4xl font-extrabold uppercase text-[#0a3a8f]`}>We clean it</h3>
                            <p className="mt-2 text-[#37507f]">From regular upkeep to full handover cleans.</p>
                            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                                {cleaning.map((s) => (
                                    <li key={s.title} className="flex gap-4">
                                        <span className="mt-1 shrink-0 text-[#1f5fd0]"><Icon name={s.icon} /></span>
                                        <span>
                                            <span className={`${headFont} block text-2xl font-bold leading-none text-[#0a3a8f]`}>{s.title}</span>
                                            <span className="mt-1.5 block text-sm leading-snug text-[#37507f]">{s.text}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}