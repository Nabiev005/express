import { useContext } from 'react';
import { LanguageContext } from '../i18n/LanguageContext';

export function useLang() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLang must be used within LanguageProvider');
  return value;
}
