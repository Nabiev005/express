import { useState } from 'react';
import { site } from '../config/site';
import { useLang } from '../hooks/useLang';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Button } from './Button';
import { Container } from './Container';
import { Icon } from './Icon';
import { LangSwitcher } from './LangSwitcher';

const nav = [
  ['home', '#home'],
  ['services', '#services'],
  ['gallery', '#gallery'],
  ['benefits', '#benefits'],
  ['reviews', '#reviews'],
] as const;
const navIds = nav.map(([, href]) => href.slice(1));

export function Header() {
  const { dictionary } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navIds);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a href="#home" className="brand" onClick={closeMenu} aria-label={`${site.name} — ${dictionary.nav.home}`}>
          <span className="brand__mark"><span /></span><span>{site.name}</span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? dictionary.nav.close : dictionary.nav.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label={dictionary.nav.home}>
          <div className="main-nav__links">
            {nav.map(([key, href]) => <a key={key} href={href} onClick={closeMenu} aria-current={activeId === href.slice(1) ? 'location' : undefined}>{dictionary.nav[key]}</a>)}
          </div>
          <div className="main-nav__actions">
            <LangSwitcher />
            <Button href={site.whatsappLink} variant="outline" size="sm" target="_blank" rel="noreferrer"><Icon name="whatsapp" />{dictionary.nav.write}</Button>
            <Button href={site.phoneLink} variant="primary" size="sm"><Icon name="phone" />{dictionary.nav.call}</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
