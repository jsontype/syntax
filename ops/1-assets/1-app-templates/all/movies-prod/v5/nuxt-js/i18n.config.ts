
import en from './lang/en.json';
import de from './lang/de.json';
import fr from './lang/fr.json';
import gr from './lang/gr.json';
import ar from './lang/ar.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
     en: en,
  de: de,
  fr: fr,
  gr: gr,
  ar: ar,
  }
}))
