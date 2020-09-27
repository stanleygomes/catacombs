import * as Localization from 'expo-localization';
import I18n from 'i18n-js';

import enUs from './locales/enUs';
import ptBr from './locales/ptBr';

I18n.locale = Localization.locale;
I18n.fallbacks = true;
I18n.defaultLocale = 'en-US';
I18n.translations = {
  'en-US': enUs,
  'pt-BR': ptBr,
};

export default I18n;
