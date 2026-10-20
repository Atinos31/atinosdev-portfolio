
import Navbar from './components/Navbar.jsx';
import Hero from './sections/hero.jsx';
import Projects from './sections/projects.jsx';
import Experience from './sections/experience.jsx';
import About from './sections/about.jsx';
import KnowledgeGraph from "./components/KnowledgeGraph.jsx";
import Skills from './sections/skills.jsx';




function App() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-white">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <KnowledgeGraph />
                <Skills />

                <section
                    id="contact"
                    className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
                >
                    <p
                        className="mb-4 text-sm font-semibold uppercase
                       tracking-[0.25em] text-teal-400"
                    >
                        Get in Touch
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Let's Build Something Great
                    </h2>

                    <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
                        I'm interested in backend and full-stack
                        development opportunities, including remote
                        and hybrid roles.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="mailto:atinos31.dev@gmail.com"
                            className="rounded-lg bg-teal-400 px-6 py-3
                         font-semibold text-slate-950
                         transition hover:bg-teal-300"
                        >
                            Email Me →
                        </a>

                        <a
                            href="https://github.com/Atinos31"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-white/20
                         px-6 py-3 font-semibold
                         transition hover:border-teal-400
                         hover:text-teal-300"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </section>
            </main>

            <footer
                className="border-t border-white/10 px-6 py-6
                   text-center text-sm text-slate-500"
            >
                © {new Date().getFullYear()} Sandra Atino.
                Built with React, Tailwind CSS and Three.js.
            </footer>
        </div>
    );
}

export default App;



