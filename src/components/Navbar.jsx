
import { useState, useEffect } from 'react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close the menu when Escape is pressed.
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

    // Close the menu when the screen switches to desktop.
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        function handleChange(event) {
            if (event.matches) {
                setIsMenuOpen(false);
            }
        }

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="relative z-50 border-b border-white/10 bg-[#080f1e]">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex max-w-7xl items-center
                   justify-between px-6 py-5 lg:px-12"
            >
                {/* Website logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="text-xl font-bold tracking-tight text-white"
                >
                    atinos<span className="text-teal-400">dev.</span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-300
                         transition hover:text-teal-400
                         focus-visible:text-teal-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop GitHub button */}
                <a
                    href="https://github.com/Atinos31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-lg border
                     border-teal-400/40 px-4 py-2
                     text-sm font-medium text-teal-300
                     transition hover:bg-teal-400/10
                     md:inline-flex"
                >
                    GitHub ↗
                </a>

                {/* Mobile hamburger button */}
                <button
                    type="button"
                    aria-label={
                        isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg border border-white/15
                     p-2 text-teal-300
                     hover:bg-white/10
                     focus-visible:outline-2
                     focus-visible:outline-offset-2
                     focus-visible:outline-teal-400
                     md:hidden"
                >
                    {isMenuOpen ? (
                        // Close icon
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile dropdown */}
            <div
                id="mobile-navigation"
                hidden={!isMenuOpen}
                className="border-t border-white/10 bg-[#0c1728] md:hidden"
            >
                <div className="flex flex-col gap-1 px-6 py-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3
                         text-slate-200 transition
                         hover:bg-teal-400/10
                         hover:text-teal-300"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="https://github.com/Atinos31"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="mt-4 rounded-lg bg-teal-400
                       px-4 py-3 text-center
                       font-semibold text-slate-950
                       transition hover:bg-teal-300"
                    >
                        Visit My GitHub ↗
                    </a>
                </div>
            </div>
        </header>
    );
}
