import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';

function App() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-white">
            <Navbar />

            <main>
                <Hero />

                <section
                    id="projects"
                    className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
                        Selected Work
                    </p>

                    <h2 className="text-3xl font-bold">
                        Featured Projects
                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-400">
                        Explore the software projects and applications
                        I've developed.
                    </p>

                    <a
                        href="https://github.com/Atinos31"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block text-teal-400 hover:underline"
                    >
                        View my GitHub projects →
                    </a>
                </section>

                <section
                    id="experience"
                    className="border-y border-white/10 bg-white/5"
                >
                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
                            My Background
                        </p>

                        <h2 className="text-3xl font-bold">
                            Professional Experience
                        </h2>

                        <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
                            Professional experience developing web applications
                            using Python, Django, Wagtail, WordPress,
                            PostgreSQL, and JavaScript.
                        </p>
                    </div>
                </section>

                <section
                    id="contact"
                    className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
                        Get in Touch
                    </p>

                    <h2 className="text-3xl font-bold">
                        Let's Work Together
                    </h2>

                    <p className="mt-4 text-slate-400">
                        Interested in discussing a development opportunity?
                    </p>

                    <a
                        href="https://github.com/Atinos31"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block text-teal-400 hover:underline"
                    >
                        Connect with me on GitHub ↗
                    </a>
                </section>
            </main>

            <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Sandra Atino.
                Built with React and Three.js.
            </footer>
        </div>
    );
}

export default App;




