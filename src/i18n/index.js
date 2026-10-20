
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import frCommon from './locales/fr/common.json';

import enHero from './locales/en/hero.json';
import frHero from './locales/fr/hero.json';

import enAbout from './locales/en/about.json';
import frAbout from './locales/fr/about.json';

import enProjects from './locales/en/projects.json';
import frProjects from './locales/fr/projects.json';

import enExperience from './locales/en/experience.json';
import frExperience from './locales/fr/experience.json';

import enSkills from './locales/en/skills.json';
import frSkills from './locales/fr/skills.json';

import enEngineer from './locales/en/engineer.json';
import frEngineer from './locales/fr/engineer.json';

import enJournal from './locales/en/journal.json';
import frJournal from './locales/fr/journal.json';

const LANGUAGE_KEY = 'atinosdev-language';

const resources = {
    en: {
        translation: {
            ...enCommon,
            ...enHero,
            ...enAbout,
            ...enProjects,
            ...enExperience,
            ...enSkills,
            ...enEngineer,
            ...enJournal,
        },
    },
    fr: {
        translation: {
            ...frCommon,
            ...frHero,
            ...frAbout,
            ...frProjects,
            ...frExperience,
            ...frSkills,
            ...frEngineer,
            ...frJournal,
        },
    },
};

// Check whether the visitor previously selected a language.
function getSavedLanguage() {
    try {
        const saved = localStorage.getItem(LANGUAGE_KEY);

        if (saved === 'en' || saved === 'fr') {
            return saved;
        }
    } catch {
        // Continue if storage is unavailable.
    }

    return null;
}

// Detect the visitor's browser language.
function getBrowserLanguage() {
    if (typeof navigator === 'undefined') {
        return 'en';
    }

    const languages = navigator.languages?.length
        ? navigator.languages
        : [navigator.language];

    for (const language of languages) {
        const code = language?.split('-')[0].toLowerCase();

        if (code === 'fr' || code === 'en') {
            return code;
        }
    }

    return 'en';
}

const initialLanguage =
    getSavedLanguage() || getBrowserLanguage();

i18n.use(initReactI18next).init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],

    interpolation: {
        escapeValue: false,
    },

    react: {
        useSuspense: false,
    },
});

// Update the document language for accessibility.
function updateDocumentLanguage(language) {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
    }
}

updateDocumentLanguage(initialLanguage);

// Remember language changes made by the visitor.
i18n.on('languageChanged', (language) => {
    updateDocumentLanguage(language);

    try {
        localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
        // Language still works without persistent storage.
    }
});

export default i18n;
