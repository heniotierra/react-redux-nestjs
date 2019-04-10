import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {

        }
      },
      'pt-BR':  {
        translation: {

        }
      }
    },
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;