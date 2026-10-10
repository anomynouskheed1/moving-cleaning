import { site } from "@/lib/site";

const headFont = "font-[family-name:var(--font-head)]";

function Wheel({ cx }: { cx: number }) {
    return (
        <g>
            <circle cx={cx} cy={127} r={21} fill="#041540" stroke="#ffffff" strokeWidth={3} />
            <g
                className="animate-spin"
                style={{ transformBox: "fill-box", transformOrigin: "center", animationDuration: "0.7s" }}
            >
                <circle cx={cx} cy={127} r={10} fill="#9bbcf5" />
                <line x1={cx - 10} y1={127} x2={cx + 10} y2={127} stroke="#061f52" strokeWidth={3} />
                <line x1={cx} y1={117} x2={cx} y2={137} stroke="#061f52" strokeWidth={3} />
            </g>
        </g>
    );
}

function Truck() {
    return (
        <svg viewBox="0 0 340 150" className="block w-[230px] sm:w-[300px] lg:w-[380px]" role="img" aria-label="Shammah moving truck">
            <rect x={0} y={10} width={225} height={105} rx={6} fill="#ffffff" />
            <rect x={0} y={84} width={225} height={14} fill="#2f6fd0" />
            <text x={112} y={58} textAnchor="middle" fill="#0a3a8f" fontSize={36} fontWeight={800} letterSpacing={2} style={{ fontFamily: "var(--font-head)" }}>
                SHAMMAH
            </text>
            <text x={112} y={75} textAnchor="middle" fill="#2f6fd0" fontSize={11} fontWeight={700} letterSpacing={3} style={{ fontFamily: "var(--font-head)" }}>
                MOVERS &amp; CLEANERS
            </text>
            <rect x={0} y={115} width={335} height={12} fill="#0a2a66" />
            <path d="M232 36h52l38 40v39h-90z" fill="#1f5fd0" />
            <path d="M244 48h36l25 26h-61z" fill="#cfe0ff" />
            <rect x={316} y={96} width={18} height={19} rx={3} fill="#9bbcf5" />
            <circle cx={326} cy={88} r={4} fill="#fff7c2" />
            <Wheel cx={50} />
            <Wheel cx={112} />
            <Wheel cx={275} />
        </svg>
    );
}

function Spark({ className, delay }: { className: string; delay: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`absolute animate-pulse text-white ${className}`}
            style={{ animationDelay: delay }}
            aria-hidden="true"
        >
            <path fill="currentColor" d="M12 0c.9 7.2 4.8 11.1 12 12-7.2.9-11.1 4.8-12 12-.9-7.2-4.8-11.1-12-12C7.2 11.1 11.1 7.2 12 0z" />
        </svg>
    );
}

export default function Hero() {
    const rise = (delay: number) => ({ animation: `rise 0.9s ${delay}s cubic-bezier(0.2, 0.7, 0.2, 1) both` });

    return (
        <section
            id="top"
            className="relative min-h-[100svh] overflow-hidden bg-[#061f52] text-white"
            style={{
                backgroundImage:
                    "linear-gradient(90deg, rgba(6,31,82,0.88) 0%, rgba(6,31,82,0.55) 38%, rgba(6,31,82,0) 68%), linear-gradient(to top, rgba(6,31,82,0.9) 0%, rgba(6,31,82,0) 28%), url('/hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-56 pt-36 sm:pb-64">
                <h1 className={`${headFont} text-[5rem] font-extrabold uppercase leading-[0.84] sm:text-[8rem] lg:text-[11rem]`}>
                    <span className="block" style={rise(0.1)}>We work,</span>
                    <span className="block text-[#9bbcf5]" style={rise(0.25)}>You rest!</span>
                </h1>

                <p className={`${headFont} mt-6 max-w-md text-2xl font-semibold leading-snug sm:text-3xl`} style={rise(0.45)}>
                    Enjoy the best attention and service combined together.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3" style={rise(0.6)}>
                    <a href="#contact" className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#0a3a8f] transition hover:bg-[#dbe7ff]">
                        Get a free quote
                    </a>
                    <a
                        href={site.phoneHref}
                        className="rounded-full border border-white/50 bg-[#061f52]/40 px-8 py-4 text-base font-semibold backdrop-blur-sm transition hover:border-white hover:bg-white/10"
                    >
                        {site.phone}
                    </a>
                </div>
            </div>

            {/* Road and truck overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5]" aria-hidden="true">
                <div className="absolute bottom-[58px] left-0" style={{ animation: "drive 18s linear infinite" }}>
                    <div className="relative">
                        <div
                            className="absolute bottom-[34px] right-full h-[62px] w-[70vw]"
                            style={{
                                background: "linear-gradient(to left, rgba(155,188,245,0.55), rgba(155,188,245,0))",
                                maskImage: "linear-gradient(to left, black, transparent)",
                                WebkitMaskImage: "linear-gradient(to left, black, transparent)",
                            }}
                        />
                        <Spark className="bottom-[70px] right-[calc(100%+40px)] h-4 w-4" delay="0s" />
                        <Spark className="bottom-[40px] right-[calc(100%+140px)] h-3 w-3" delay="0.6s" />
                        <Spark className="bottom-[84px] right-[calc(100%+260px)] h-5 w-5" delay="1.1s" />
                        <Spark className="bottom-[52px] right-[calc(100%+380px)] h-3 w-3" delay="0.3s" />
                        <Truck />
                    </div>
                </div>

                <div className="relative h-16 border-t-4 border-[#2f6fd0]/70 bg-[#041540]">
                    <div
                        className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2"
                        style={{
                            backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.8) 0 48px, transparent 48px 96px)",
                            backgroundSize: "96px 100%",
                            animation: "road 1.2s linear infinite",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}