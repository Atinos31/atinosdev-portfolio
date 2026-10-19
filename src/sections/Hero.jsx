
import HeroScene from '../components/RotatingShape.jsx';

export default function Hero() {
    return (
        <section
            id="home"
            className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12"
        >
            <div>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                    Hello, I'm Sandra Atino
                </p>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Full-Stack Developer

                    <span className="mt-3 block text-teal-400">
            Python & Django
          </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
                    I build reliable web applications, backend systems,
                    and practical digital solutions.
                </p>

                <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
                    Based in Belgium, with professional experience
                    using Django, Wagtail, WordPress, PostgreSQL,
                    and JavaScript.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-300"
                    >
                        Explore My Work →
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-teal-400 hover:text-teal-300"
                    >
                        Get in Touch
                    </a>
                </div>

                <p className="mt-9 text-sm text-slate-500">
                    Belgium · Open to remote and hybrid opportunities
                </p>
            </div>

            <div className="relative h-[320px] min-w-0 sm:h-[440px]">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-12 rounded-full bg-teal-500/10 blur-3xl"
                />

                <HeroScene />

                <p className="pointer-events-none absolute bottom-0 w-full text-center text-xs text-slate-500">
                    Drag to explore in 3D
                </p>
            </div>
        </section>
    );
}

