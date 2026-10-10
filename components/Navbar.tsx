"use client";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why us", href: "#why" },
    { label: "Contact", href: "#contact" },
];

const headFont = "font-[family-name:var(--font-head)]";

function PhoneIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            {/* Info strip, collapses on scroll */}
            <div
                className={`hidden overflow-hidden bg-[#2f6fd0] text-white transition-all duration-300 md:block ${scrolled ? "max-h-0" : "max-h-10"
                    }`}
            >
                <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm font-medium">
                    <span>{site.hours}. Free quotes for every job.</span>
                    <a href={`mailto:${site.email}`} className="hover:underline">
                        {site.email}
                    </a>
                </div>
            </div>

            {/* Main bar */}
            <nav
                aria-label="Main"
                className={`transition-all duration-300 ${scrolled || open
                        ? "bg-[#061f52]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md"
                        : "bg-transparent"
                    }`}
            >
                <div
                    className={`mx-auto flex max-w-7xl items-center justify-between px-6 text-white transition-all duration-300 ${scrolled ? "h-16" : "h-20"
                        }`}
                >
                    <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                        <Logo size={scrolled ? 38 : 44} />
                        <span className={`${headFont} text-xl font-extrabold uppercase leading-[0.9] tracking-wide sm:text-2xl`}>
                            Shammah
                            <span className="block text-[0.62em] font-semibold tracking-[0.18em] text-[#9bbcf5]">
                                Movers &amp; Cleaners
                            </span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden items-center gap-9 lg:flex">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    className="relative py-1 text-[0.95rem] font-medium text-white/90 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#2f6fd0] after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <a
                            href={site.phoneHref}
                            className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-sm font-semibold transition hover:border-white hover:bg-white/10"
                        >
                            <PhoneIcon />
                            {site.phone}
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#0a3a8f] transition hover:bg-[#dbe7ff]"
                        >
                            Get a free quote
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((v) => !v)}
                        className="relative grid h-11 w-11 place-items-center rounded-full border border-white/30 lg:hidden"
                    >
                        <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
                        <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                        <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 top-0 -z-10 flex flex-col justify-between bg-[#061f52] px-6 pb-10 pt-28 text-white transition-all duration-500 lg:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
                    }`}
            >
                <ul className="grid gap-2">
                    {links.map((l) => (
                        <li key={l.href} className="border-b border-white/15">
                            <a
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className={`${headFont} block py-4 text-5xl font-extrabold uppercase tracking-wide transition hover:pl-3 hover:text-[#9bbcf5]`}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="grid gap-3">
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="rounded-full bg-white py-4 text-center text-lg font-bold text-[#0a3a8f]"
                    >
                        Get a free quote
                    </a>
                    <a
                        href={site.phoneHref}
                        className="flex items-center justify-center gap-2 rounded-full border border-white/30 py-4 text-lg font-semibold"
                    >
                        <PhoneIcon />
                        {site.phone}
                    </a>
                    <p className="mt-2 text-center text-sm text-[#9bbcf5]">{site.hours}</p>
                </div>
            </div>
        </header>
    );
}