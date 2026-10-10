import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const headFont = "font-[family-name:var(--font-head)]";

const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why us", href: "#why" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#f5f7fb] text-[#061f52]">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <div className="flex items-center gap-3">
                        <Logo size={48} />
                        <span className={`${headFont} text-2xl font-extrabold uppercase leading-none`}>{site.name}</span>
                    </div>
                    <p className="mt-5 max-w-sm leading-relaxed text-[#37507f]">
                        {site.tagline} {site.hours}. Serving you with care and professionalism.
                    </p>
                </div>

                <nav aria-label="Footer">
                    <h3 className={`${headFont} text-xl font-bold uppercase text-[#2f6fd0]`}>Explore</h3>
                    <ul className="mt-4 grid gap-2">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a href={l.href} className="transition hover:text-[#1f5fd0]">{l.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h3 className={`${headFont} text-xl font-bold uppercase text-[#2f6fd0]`}>Reach us</h3>
                    <ul className="mt-4 grid gap-2">
                        <li><a href={site.phoneHref} className="transition hover:text-[#1f5fd0]">{site.phone}</a></li>
                        <li><a href={`mailto:${site.email}`} className="break-all transition hover:text-[#1f5fd0]">{site.email}</a></li>
                        <li><a href={`mailto:${site.support}`} className="break-all transition hover:text-[#1f5fd0]">{site.support}</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-[#c9d6ee]">
                <p className="mx-auto max-w-7xl px-6 py-5 text-sm text-[#37507f]">
                    &copy; 2026 {site.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}