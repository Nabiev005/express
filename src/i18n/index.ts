import ky from './ky.json';
import ru from './ru.json';

export type Language = 'ky' | 'ru';
export type Dictionary = typeof ru;

const dictionaries: Record<Language, Dictionary> = { ky, ru };

export function getDictionary(language: Language): Dictionary {
  return dictionaries[language];
}

export function languageFromPath(pathname: string): Language | null {
  const prefix = pathname.split('/')[1];
  return prefix === 'ky' || prefix === 'ru' ? prefix : null;
}

export function getInitialLanguage(): Language {
  const pathLanguage = languageFromPath(window.location.pathname);
  if (pathLanguage) return pathLanguage;

  const savedLanguage = window.localStorage.getItem('evakuator-language');
  if (savedLanguage === 'ky' || savedLanguage === 'ru') return savedLanguage;

  return window.navigator.language.toLowerCase().startsWith('ky') ? 'ky' : 'ru';
}
