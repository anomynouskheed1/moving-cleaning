import Icon from "@/components/Icons";
import { site, services } from "@/lib/site";

const headFont = "font-[family-name:var(--font-head)]";

function waLink(service: string) {
    const text = `Hello ${site.short}, I would like a free quote for ${service}.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export default function Services() {
    return (
        <section id="services" className="bg-[#061f52] py-24 text-white sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
                {/* Heading, stays in view on desktop */}
                <div className="lg:sticky lg:top-32 lg:self-start">
                    <p className="text-sm font-semibold text-[#9bbcf5]">What we do</p>
                    <h2 className={`${headFont} mt-3 text-5xl font-extrabold uppercase leading-[0.92] sm:text-6xl lg:text-7xl`}>
                        Our services
                    </h2>
                    <p className="mt-6 max-w-sm text-lg leading-relaxed text-[#cfe0ff]">
                        Moving and cleaning for homes and offices. Choose a service and we send you a free quote.
                    </p>
                    <a
                        href={site.phoneHref}
                        className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-[#0a3a8f] transition hover:bg-[#dbe7ff]"
                    >
                        Call {site.phone}
                    </a>
                </div>

                {/* Service list */}
                <ul className="border-t border-white/15">
                    {services.map((s) => (
                        <li key={s.title} className="group border-b border-white/15">
                            <div className="grid items-center gap-5 px-2 py-8 transition-colors duration-300 hover:bg-white/[0.04] sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:px-6">
                                <span className="text-[#9bbcf5] transition-transform duration-300 group-hover:scale-110">
                                    <Icon name={s.icon} />
                                </span>
                                <div>
                                    <h3 className={`${headFont} text-3xl font-bold uppercase leading-none sm:text-4xl`}>{s.title}</h3>
                                    <p className="mt-2 max-w-lg leading-relaxed text-[#cfe0ff]">{s.text}</p>
                                </div>
                                <a
                                    href={waLink(s.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-[#0a3a8f]"
                                >
                                    Get a quote
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}