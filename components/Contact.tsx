import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

const headFont = "font-[family-name:var(--font-head)]";

const details = [
    { label: "Phone", value: site.phone, href: site.phoneHref },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Support", value: site.support, href: `mailto:${site.support}` },
    { label: "Website", value: site.website, href: `https://${site.website}` },
];

export default function Contact() {
    return (
        <section id="contact" className="bg-[#061f52] py-24 text-white sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
                <div>
                    <p className="text-sm font-semibold text-[#9bbcf5]">Contact us</p>
                    <h2 className={`${headFont} mt-3 text-5xl font-extrabold uppercase leading-[0.92] sm:text-6xl lg:text-7xl`}>
                        Get your free quote today
                    </h2>
                    <p className="mt-6 max-w-md text-lg leading-relaxed text-[#cfe0ff]">
                        Tell us what you need moved or cleaned. {site.hours}, so reach out whenever suits you.
                    </p>

                    <dl className="mt-10 border-t border-white/15">
                        {details.map((d) => (
                            <div key={d.label} className="grid gap-1 border-b border-white/15 py-5 sm:grid-cols-[8rem_1fr] sm:items-center">
                                <dt className="text-sm text-[#9bbcf5]">{d.label}</dt>
                                <dd>
                                    <a
                                        href={d.href}
                                        className={`${headFont} break-all text-2xl font-bold transition hover:text-[#9bbcf5] sm:text-3xl`}
                                        {...(d.label === "Website" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                        {d.value}
                                    </a>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="self-start rounded-3xl bg-[#f5f7fb] p-7 sm:p-10">
                    <h3 className={`${headFont} text-3xl font-extrabold uppercase text-[#061f52] sm:text-4xl`}>Request a quote</h3>
                    <p className="mb-7 mt-2 text-[#37507f]">Your details open in WhatsApp so we can reply fast.</p>
                    <QuoteForm />
                </div>
            </div>
        </section>
    );
}