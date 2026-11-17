import { site } from '../config/site';
import { useLang } from '../hooks/useLang';
import { Container } from './Container';
import { Icon } from './Icon';

export function Footer() {
  const { dictionary } = useLang();
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <a href="#home" className="brand"><span className="brand__mark"><span /></span><span>{site.name}</span></a>
          <p>{dictionary.footer.tagline}</p>
          <a className="site-footer__phone" href={site.phoneLink}><Icon name="phone" />{site.phone}</a>
        </div>
        <nav className="site-footer__nav" aria-label={dictionary.nav.home}>
          <a href="#home">{dictionary.nav.home}</a><a href="#services">{dictionary.nav.services}</a><a href="#gallery">{dictionary.nav.gallery}</a><a href="#benefits">{dictionary.nav.benefits}</a><a href="#reviews">{dictionary.nav.reviews}</a><a href="#contacts">{dictionary.nav.call}</a>
        </nav>
        <div className="site-footer__bottom"><span>© 2026 {site.name}. {dictionary.footer.rights}</span><span>{site.address}</span></div>
      </Container>
    </footer>
  );
}
