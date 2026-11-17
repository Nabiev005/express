import { site } from '../config/site';
import { useLang } from '../hooks/useLang';
import { Button } from './Button';
import { Icon } from './Icon';

export function FloatingWhatsApp() {
  const { dictionary } = useLang();
  return (
    <>
      <a className="floating-whatsapp" href={site.whatsappLink} target="_blank" rel="noreferrer" aria-label={dictionary.floating.whatsapp}><Icon name="whatsapp" /></a>
      <div className="mobile-call-bar"><Button href={site.phoneLink} variant="primary" size="md"><Icon name="phone" />{dictionary.floating.call} · {site.phone}</Button></div>
    </>
  );
}
