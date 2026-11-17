import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getDictionary, getInitialLanguage, type Language } from './index';
import { LanguageContext } from './LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, updateLanguage] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    updateLanguage(nextLanguage);
    window.localStorage.setItem('evakuator-language', nextLanguage);
    window.history.pushState({}, '', `/${nextLanguage}`);
  }, []);

  useEffect(() => {
    const pathLanguage = window.location.pathname.split('/')[1];
    if (pathLanguage !== 'ky' && pathLanguage !== 'ru') {
      window.history.replaceState({}, '', `/${language}`);
    }
    const handlePopState = () => {
      const pathLanguage = window.location.pathname.split('/')[1];
      if (pathLanguage === 'ky' || pathLanguage === 'ru') updateLanguage(pathLanguage);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language]);

  const value = useMemo(
    () => ({ language, dictionary: getDictionary(language), setLanguage }),
    [language, setLanguage],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
