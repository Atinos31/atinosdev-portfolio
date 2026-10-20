
import { useTranslation } from 'react-i18next';

const highlightKeys = [
    'backend',
    'fullstack',
    'cms',
    'ai',
];

const BASE_URL = import.meta.env.BASE_URL;

const cvFiles = {
    en: 'Sandra_Atino_CV_English.pdf',
    fr: 'Sandra_Atino_CV_French.pdf',
};

export default function About() {
    const { t, i18n } = useTranslation();

    const language =
        i18n.resolvedLanguage === 'fr' ? 'fr' : 'en';

    const otherLanguage =
        language === 'fr' ? 'en' : 'fr';

    const primaryCV = cvFiles[language];
    const secondaryCV = cvFiles[otherLanguage];

    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
        >
            {/* Section heading */}
            <p
                className="mb-4 text-sm font-semibold uppercase
                   tracking-[0.25em] text-teal-400"
            >
                {t('about.eyebrow')}
            </p>

            <h2
                className="text-3xl font-bold
                   text-white sm:text-4xl"
            >
                {t('about.title')}
            </h2>

            <div className="mt-10 grid gap-12 lg:grid-cols-2">
                {/* LEFT: Personal introduction */}
                <div>
                    <p
                        className="text-lg leading-relaxed
                       text-slate-300"
                    >
                        {t('about.intro')}
                    </p>

                    <p
                        className="mt-5 leading-relaxed
                       text-slate-400"
                    >
                        {t('about.experience')}
                    </p>

                    <p
                        className="mt-5 leading-relaxed
                       text-slate-400"
                    >
                        {t('about.interests')}
                    </p>

                    <p
                        className="mt-5 leading-relaxed
                       text-slate-400"
                    >
                        {t('about.approach')}
                    </p>

                    {/* CV downloads */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href={`${BASE_URL}cv/${primaryCV}`}
                            download={primaryCV}
                            className="inline-flex items-center
                         rounded-lg bg-teal-400
                         px-5 py-3 font-semibold
                         text-slate-950 transition
                         hover:bg-teal-300
                         focus-visible:outline-2
                         focus-visible:outline-offset-2
                         focus-visible:outline-teal-400"
                        >
                            {t('about.downloadCV')} ↓
                        </a>

                        <a
                            href={`${BASE_URL}cv/${secondaryCV}`}
                            download={secondaryCV}
                            className="inline-flex items-center
                         rounded-lg border
                         border-teal-400/40
                         px-5 py-3 font-semibold
                         text-teal-300 transition
                         hover:bg-teal-400/10
                         focus-visible:outline-2
                         focus-visible:outline-offset-2
                         focus-visible:outline-teal-400"
                        >
                            {t('about.otherLanguageCV')} ↓
                        </a>
                    </div>
                </div>

                {/* RIGHT: Expertise highlights */}
                <div className="grid gap-4 sm:grid-cols-2">
                    {highlightKeys.map((key) => (
                        <article
                            key={key}
                            className="rounded-xl border
                         border-white/10
                         bg-white/[0.03] p-6
                         transition-colors
                         hover:border-teal-400/40"
                        >
                            <div
                                className="mb-5 h-1 w-10
                           rounded-full bg-teal-400"
                                aria-hidden="true"
                            />

                            <h3
                                className="text-lg font-semibold
                           text-white"
                            >
                                {t(`about.highlights.${key}.title`)}
                            </h3>

                            <p
                                className="mt-2 text-sm
                           leading-relaxed
                           text-slate-400"
                            >
                                {t(`about.highlights.${key}.description`)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
