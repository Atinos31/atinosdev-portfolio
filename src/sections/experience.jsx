
import { useTranslation } from 'react-i18next';

export default function Experience() {
    const { t } = useTranslation();

    const achievements = t(
        'experience.jobs.colead.achievements',
        { returnObjects: true }
    );

    const achievementList = Array.isArray(achievements)
        ? achievements
        : [];

    return (
        <section
            id="experience"
            className="border-y border-white/10
                 bg-white/[0.02]"
        >
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
                {/* Section heading */}
                <p
                    className="mb-4 text-sm font-semibold
                     uppercase tracking-[0.25em]
                     text-teal-400"
                >
                    {t('experience.eyebrow')}
                </p>

                <h2
                    className="text-3xl font-bold
                     tracking-tight text-white
                     sm:text-4xl"
                >
                    {t('experience.title')}
                </h2>

                <p
                    className="mt-5 max-w-2xl
                     text-lg text-slate-400"
                >
                    {t('experience.subtitle')}
                </p>

                {/* COLEAD experience card */}
                <div
                    className="mt-12 rounded-2xl
                     border border-white/10
                     bg-[#0c1728] p-6 sm:p-10"
                >
                    <div
                        className="flex flex-wrap items-start
                       justify-between gap-4"
                    >
                        <div>
                            {/* Employment dates */}
                            <p
                                className="mb-2 text-sm
                           font-medium text-teal-400"
                            >
                                {t('experience.jobs.colead.dates')}
                            </p>

                            {/* Job title */}
                            <h3
                                className="text-2xl
                           font-bold text-white"
                            >
                                {t('experience.jobs.colead.role')}
                            </h3>

                            {/* Employer */}
                            <a
                                href="https://colead.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block
                           text-slate-300
                           transition-colors
                           hover:text-teal-300"
                            >
                                {t('experience.jobs.colead.company')} ↗
                            </a>
                        </div>

                        {/* Experience label */}
                        <span
                            className="rounded-full border
                         border-teal-400/20
                         bg-teal-400/10
                         px-4 py-2 text-xs
                         font-medium text-teal-300"
                        >
              {t('experience.professionalBadge')}
            </span>
                    </div>

                    {/* Role overview */}
                    <p
                        className="mt-7 max-w-3xl
                       leading-relaxed text-slate-300"
                    >
                        {t('experience.jobs.colead.description')}
                    </p>

                    {/* Achievements */}
                    <ul
                        className="mt-7 list-disc space-y-3
                       pl-5 leading-relaxed
                       text-slate-400
                       marker:text-teal-400"
                    >
                        {achievementList.map((achievement, index) => (
                            <li key={index}>
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
