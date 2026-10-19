const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    return (
        <header className="border-b border-white/10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-12">
                <a
                    href="#home"
                    className="text-xl font-bold text-white"
                >
                    atinos<span className="text-teal-400">dev.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-300 transition hover:text-teal-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <a
                    href="https://github.com/Atinos31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-teal-400/40 px-4 py-2 text-sm font-medium text-teal-300 transition hover:bg-teal-400/10"
                >
                    GitHub ↗
                </a>
            </nav>
        </header>
    );
}
