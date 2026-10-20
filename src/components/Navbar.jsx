
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'skills', href: '#skills' },
    { key: 'contact', href: '#contact' },
];

const GITHUB_URL = 'https://github.com/Atinos31';

export default function Navbar() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close mobile navigation with Escape.
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Close mobile navigation when switching to desktop.
    useEffect(() => {
        const mediaQuery = window.matchMedia(
            '(min-width: 1024px)'
        );

        function handleChange(event) {
            if (event.matches) {
                setIsMenuOpen(false);
            }
        }

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);

            return () => {
                mediaQuery.removeEventListener('change', handleChange);
            };
        }

        return undefined;
    }, []);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header
            className="relative z-50 border-b
                 border-white/10 bg-[#080f1e]"
        >
            <nav
                aria-label={
                    t('nav.home') === 'Accueil'
                        ? 'Navigation principale'
                        : 'Main navigation'
                }
                className="mx-auto flex max-w-7xl
                   items-center justify-between
                   gap-4 px-6 py-5 lg:px-12"
            >
                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="shrink-0 text-xl font-bold
                     tracking-tight text-white"
                >
                    atinos
                    <span className="text-teal-400">
            dev.
          </span>
                </a>

                {/* Desktop navigation */}
                <div
                    className="hidden items-center gap-5
                     lg:flex xl:gap-7"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            className="whitespace-nowrap text-sm
                         text-slate-300 transition
                         hover:text-teal-400
                         focus-visible:text-teal-400"
                        >
                            {t(`nav.${link.key}`)}
                        </a>
                    ))}
                </div>

                {/* Desktop actions */}
                <div
                    className="hidden shrink-0
                     items-center gap-3 lg:flex"
                >
                    <LanguageSwitcher />

                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-lg
                       border border-teal-400/40
                       px-4 py-2 text-sm
                       font-medium text-teal-300
                       transition hover:bg-teal-400/10"
                    >
                        GitHub ↗
                    </a>
                </div>

                {/* Mobile and tablet controls */}
                <div className="flex items-center gap-3 lg:hidden">
                    {/* Language selection stays visible */}
                    <LanguageSwitcher />

                    {/* Hamburger button */}
                    <button
                        type="button"
                        aria-label={
                            isMenuOpen
                                ? t('nav.home') === 'Accueil'
                                    ? 'Fermer le menu'
                                    : 'Close navigation menu'
                                : t('nav.home') === 'Accueil'
                                    ? 'Ouvrir le menu'
                                    : 'Open navigation menu'
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() =>
                            setIsMenuOpen((previous) => !previous)
                        }
                        className="rounded-lg border
                       border-white/15 p-2
                       text-teal-300
                       hover:bg-white/10
                       focus-visible:outline-2
                       focus-visible:outline-offset-2
                       focus-visible:outline-teal-400"
                    >
                        {isMenuOpen ? (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                aria-hidden="true"
                            >
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                aria-hidden="true"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile / tablet dropdown */}
            <div
                id="mobile-navigation"
                hidden={!isMenuOpen}
                className="border-t border-white/10
                   bg-[#0c1728] lg:hidden"
            >
                <div
                    className="flex flex-col gap-1
                     px-6 py-5"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3
                         text-slate-200 transition
                         hover:bg-teal-400/10
                         hover:text-teal-300"
                        >
                            {t(`nav.${link.key}`)}
                        </a>
                    ))}

                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="mt-4 rounded-lg
                       bg-teal-400 px-4 py-3
                       text-center font-semibold
                       text-slate-950 transition
                       hover:bg-teal-300"
                    >
                        {t('nav.home') === 'Accueil'
                            ? 'Voir mon GitHub ↗'
                            : 'Visit My GitHub ↗'}
                    </a>
                </div>
            </div>
        </header>
    );
}
