
const highlights = [
    {
        title: 'Backend Development',
        description:
            'Building applications and APIs using Python, Django, and PostgreSQL.',
    },
    {
        title: 'Full-Stack Development',
        description:
            'Creating responsive interfaces with JavaScript, HTML, CSS, and Tailwind.',
    },
    {
        title: 'CMS Development',
        description:
            'Developing and maintaining websites using Wagtail and WordPress.',
    },
    {
        title: 'AI & Continuous Learning',
        description:
            'Exploring AI agents and practical AI-powered applications using Python.',
    },
];

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                Get to Know Me
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
                About Me
            </h2>

            <div className="mt-10 grid gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-lg leading-relaxed text-slate-300">
                        I'm Sandra Atino, a full-stack developer based in Belgium with professional experience building and maintaining web applications.
                    </p>

                    <p className="mt-5 leading-relaxed text-slate-400">
                        I previously worked at COLEAD, contributing to production websites and applications using Python, Django, Wagtail, WordPress, PostgreSQL, and JavaScript.
                    </p>

                    <p className="mt-5 leading-relaxed text-slate-400">
                        My interests include backend engineering, clean application architecture, automation, and AI-powered software.
                    </p>

                    <p className="mt-5 leading-relaxed text-slate-400">
                        I enjoy solving practical problems, learning new technologies, and building software that is reliable and maintainable.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        {/* English CV */}
                        <a
                            href="/cv/Sandra_Atino_CV_English.pdf"
                            download="Sandra_Atino_CV_English.pdf"
                            className="rounded-lg bg-teal-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-300"
                        >
                            Download English CV ↓
                        </a>

                        {/* French CV */}
                        <a
                            href="/cv/Sandra_Atino_CV_French.pdf"
                            download="Sandra_Atino_CV_French.pdf"
                            className="rounded-lg border border-teal-400/40 px-5 py-3 font-semibold text-teal-300 transition hover:bg-teal-400/10"
                        >
                            Télécharger CV français ↓
                        </a>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="grid gap-4 sm:grid-cols-2">
                    {highlights.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-400/40"
                        >
                            <div className="mb-5 h-1 w-10 rounded-full bg-teal-400" />
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
