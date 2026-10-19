
const technologies = {
    backend: [
        'Python',
        'Django',
        'Django REST APIs',
        'PostgreSQL',
    ],
    frontend: [
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Alpine.js',
        'Bootstrap',
    ],
    cms: [
        'Wagtail',
        'WordPress',
        'Divi',
        'ACF',
        'WPML',
    ],
    tools: [
        'Git',
        'GitHub',
        'Jira',
        'REST APIs',
    ],
};

function SkillGroup({ title, items }) {
    return (
        <div>
            <h4 className="mb-4 font-semibold text-white">
                {title}
            </h4>

            <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-lg border border-white/10
                       bg-white/5 px-3 py-2 text-sm
                       text-slate-300"
                    >
            {skill}
          </span>
                ))}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <section
            id="experience"
            className="border-y border-white/10 bg-white/[0.02]"
        >
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
                <p
                    className="mb-4 text-sm font-semibold uppercase
                     tracking-[0.25em] text-teal-400"
                >
                    My Background
                </p>

                <h2
                    className="text-3xl font-bold tracking-tight
                     text-white sm:text-4xl"
                >
                    Professional Experience
                </h2>

                <p className="mt-5 max-w-2xl text-lg text-slate-400">
                    Building and maintaining web applications
                    for real-world business needs.
                </p>

                {/* Work experience */}
                <div
                    className="mt-12 rounded-2xl border border-white/10
                     bg-[#0c1728] p-6 sm:p-10"
                >
                    <div
                        className="flex flex-wrap items-start
                       justify-between gap-4"
                    >
                        <div>
                            <p
                                className="mb-2 text-sm font-medium
                           text-teal-400"
                            >
                                July 2022 — April 2026
                            </p>

                            <h3 className="text-2xl font-bold text-white">
                                Full-Stack Developer
                            </h3>

                            <a
                                href="https://colead.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block text-slate-300
                           hover:text-teal-300"
                            >
                                COLEAD ↗
                            </a>
                        </div>

                        <span
                            className="rounded-full border border-teal-400/20
                         bg-teal-400/10 px-4 py-2
                         text-xs font-medium text-teal-300"
                        >
              Professional Experience
            </span>
                    </div>

                    <p className="mt-7 max-w-3xl leading-relaxed text-slate-300">
                        Contributed to the development, maintenance,
                        and improvement of production web platforms,
                        working across backend functionality,
                        content management systems, databases,
                        and user interfaces.
                    </p>

                    <ul
                        className="mt-7 list-disc space-y-3
                       pl-5 leading-relaxed text-slate-400
                       marker:text-teal-400"
                    >
                        <li>
                            Developed and maintained web functionality
                            using Python, Django, Wagtail and JavaScript.
                        </li>
                        <li>
                            Worked with relational databases, APIs,
                            debugging and application improvements.
                        </li>
                        <li>
                            Developed and maintained WordPress CMS
                            features and frontend components.
                        </li>
                        <li>
                            Contributed to collaborative development
                            workflows involving Git and issue tracking.
                        </li>
                        <li>
                            Worked on production platforms including
                            AGRINFO and Agrinnovators.
                        </li>
                    </ul>
                </div>

                {/* Technical skills */}
                <div className="mt-16">
                    <h3 className="mb-8 text-2xl font-bold text-white">
                        Technical Skills
                    </h3>

                    <div
                        className="grid gap-8 rounded-2xl
                       border border-white/10 p-6
                       sm:grid-cols-2 sm:p-8"
                    >
                        <SkillGroup
                            title="Backend Development"
                            items={technologies.backend}
                        />

                        <SkillGroup
                            title="Frontend Development"
                            items={technologies.frontend}
                        />

                        <SkillGroup
                            title="CMS Platforms"
                            items={technologies.cms}
                        />

                        <SkillGroup
                            title="Development Tools"
                            items={technologies.tools}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
