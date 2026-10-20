import KnowledgeGraph from '../components/KnowledgeGraph.jsx';

const interests = [
    'AI & Data',
    'Gardening',
    'Travel',
    'Culture',
    'Dance',
];

export default function Hero() {
    return (
        <section
            id="home"
            className="mx-auto grid min-h-[85vh] max-w-7xl
                 items-center gap-12 px-6 py-16
                 lg:grid-cols-2 lg:px-12"
        >
            {/* Introduction */}
            <div className="relative z-10">
                <p
                    className="mb-5 text-sm font-semibold
                     uppercase tracking-[0.25em]
                     text-teal-400"
                >
                    Hello, I'm Sandra Atino
                </p>

                <h1
                    className="text-4xl font-bold
                     leading-tight tracking-tight
                     text-white sm:text-5xl lg:text-6xl"
                >
                    Full-Stack Developer

                    <span className="mt-3 block text-teal-400">
            Python, Django,
            <span className="block">AI & Data</span>
          </span>
                </h1>

                <p
                    className="mt-7 max-w-xl text-lg
                     leading-relaxed text-slate-300"
                >
                    I build reliable web applications and
                    backend systems while exploring AI,
                    data-driven products, and intelligent
                    automation.
                </p>

                <p className="mt-4 text-slate-400">
                    Based in Belgium · Open to remote
                    and hybrid opportunities
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-lg bg-teal-400
                       px-6 py-3 font-semibold
                       text-slate-950 transition
                       hover:bg-teal-300"
                    >
                        Explore My Work →
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg border
                       border-slate-500 px-6 py-3
                       font-semibold text-white
                       transition hover:border-teal-400"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Portrait and network visualization */}
            <div
                className="relative mx-auto flex h-[440px]
                   w-full max-w-[520px] items-center
                   justify-center sm:h-[520px]"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute
                     inset-16 rounded-full
                     bg-teal-500/10 blur-3xl"
                />

                <KnowledgeGraph />

                {/* Profile photograph */}
                <div
                    className="relative z-10 h-64 w-64
                     overflow-hidden rounded-full
                     border-2 border-teal-400/50
                     bg-slate-800 shadow-2xl
                     shadow-teal-500/10
                     sm:h-72 sm:w-72"
                >
                    <img
                        src="/images/profile/sandra.jpg"
                        alt="Portrait of Sandra Atino"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Personal interests */}
                <div
                    className="absolute bottom-2 z-20
                     flex max-w-sm flex-wrap
                     justify-center gap-2"
                >
                    {interests.map((interest) => (
                        <span
                            key={interest}
                            className="rounded-full border
                         border-teal-400/30
                         bg-[#0c1728]/90
                         px-3 py-1.5 text-xs
                         text-teal-200"
                        >
              {interest}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

