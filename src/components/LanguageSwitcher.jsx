
import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const currentLanguage =
        i18n.resolvedLanguage === 'fr' ? 'fr' : 'en';

    function changeLanguage(language) {
        if (language !== currentLanguage) {
            void i18n.changeLanguage(language);
        }
    }

    return (
        <div
            className="flex items-center gap-1
                 rounded-full border
                 border-white/20 bg-[#102033] p-1"
            role="group"
            aria-label="Select website language"
        >
            {languages.map(({ code, label }) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => changeLanguage(code)}
                    aria-pressed={currentLanguage === code}
                    lang={code}
                    className={`rounded-full px-3 py-1.5
                      text-xs font-semibold
                      transition-colors
                      focus-visible:outline-2
                      focus-visible:outline-teal-400 ${
                        currentLanguage === code
                            ? 'bg-teal-400 text-slate-950'
                            : 'text-slate-300 hover:text-white'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

