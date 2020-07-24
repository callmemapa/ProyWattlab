import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Entraduction from './translations/En-translations';
import Estraduction from './translations/Es-translations';
import Pttraduction from './translations/Pt-translations';

const Language = ['es', 'en', 'pt']
const options = {
    // order and from where user language should be detected
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    cookieMinutes: 20,
    cookieDomain: 'myDomain',
    htmlTag: document.documentElement,

    // only detect languages that are in the whitelist
    checkWhitelist: true
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: Entraduction,
            es: Estraduction,
            pt: Pttraduction
        },
        fallbackLng: "en",
        debug: true,
        whitelist: Language,
        detection: options,
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            wait: true
        }
    });

export default i18n;
