import { createI18n as createVueI18n } from 'vue-i18n';

import en from './langs/en.json';
import de from './langs/de.json';
import fr from './langs/fr.json';
import gr from './langs/gr.json';
import ar from './langs/ar.json';

const messages = {
  en: en,
  de: de,
  fr: fr,
  gr: gr,
  ar: ar,
};

export const createI18n = () =>
  createVueI18n({
    locale: 'en',
    messages,
  });
