
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar.jsx';

import Hero from './sections/hero.jsx';
import EngineeringExplorer from './sections/EngineeringExplorer.jsx';
import About from './sections/about.jsx';
import Projects from './sections/projects.jsx';
import Experience from './sections/experience.jsx';
import Skills from './sections/skills.jsx';
import EngineeringJournal from './sections/EngineeringJournal.jsx';

const GITHUB_URL = 'https://github.com/Atinos31';
const EMAIL = 'atinos31.dev@gmail.com';

function Contact() {
    const { t } = useTranslation();

    return (
        <section
            id="contact"
            className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
        >
            <p
                className="mb-4 text-sm font-semibold uppercase
                   tracking-[0.25em] text-teal-400"
            >
                {t('contact.eyebrow')}
            </p>

            <h2
                className="text-3xl font-bold
                   text-white sm:text-4xl"
            >
                {t('contact.title')}
            </h2>

            <p
                className="mt-5 max-w-xl
                   leading-relaxed text-slate-400"
            >
                {t('contact.description')}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a
                    href={`mailto:${EMAIL}`}
                    className="rounded-lg bg-teal-400
                     px-6 py-3 font-semibold
                     text-slate-950 transition
                     hover:bg-teal-300
                     focus-visible:outline-2
                     focus-visible:outline-offset-2
                     focus-visible:outline-teal-400"
                >
                    {t('contact.email')} →
                </a>

                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border
                     border-white/20
                     px-6 py-3 font-semibold
                     text-white transition
                     hover:border-teal-400
                     hover:text-teal-300
                     focus-visible:outline-2
                     focus-visible:outline-offset-2
                     focus-visible:outline-teal-400"
                >
                    {t('contact.github')} ↗
                </a>
            </div>
        </section>
    );
}

function Footer() {
    const { t } = useTranslation();

    return (
        <footer
            className="border-t border-white/10
                 px-6 py-6 text-center
                 text-sm text-slate-500"
        >
            <p>
                © {new Date().getFullYear()}{' '}
                {t('footer.copyright')}{' '}
                {t('footer.builtWith')}
            </p>
        </footer>
    );
}

export default function App() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-white">
            <Navbar />

            <main>
                <Hero />
                <EngineeringExplorer />
                <About />
                <Projects />
                <Experience />
                <Skills />
                <EngineeringJournal />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
