import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en.json';
import ru from './lang/ru.json';
import hy from './lang/hy.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
      hy: {
        translation: hy,
      },
    },
    fallbackLng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'hy',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;