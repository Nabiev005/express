import { useLang } from '../hooks/useLang';

export function LangSwitcher() {
  const { language, setLanguage, dictionary } = useLang();
  return (
    <div className="lang-switcher" aria-label={dictionary.nav.language}>
      <button type="button" className={language === 'ky' ? 'is-active' : ''} aria-pressed={language === 'ky'} onClick={() => setLanguage('ky')}>КЫ</button>
      <span aria-hidden="true">|</span>
      <button type="button" className={language === 'ru' ? 'is-active' : ''} aria-pressed={language === 'ru'} onClick={() => setLanguage('ru')}>РУ</button>
    </div>
  );
}
