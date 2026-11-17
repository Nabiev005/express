import { site } from '../config/site';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { SectionTitle } from '../components/SectionTitle';
import { useLang } from '../hooks/useLang';
import styles from './Contacts.module.css';

export function Contacts() {
  const { dictionary } = useLang();
  return (
    <section className={`section ${styles.section}`} id="contacts">
      <Container>
        <div className={styles.panel}>
          <div className={styles.main}>
            <SectionTitle eyebrow={dictionary.contacts.eyebrow} title={dictionary.contacts.title} description={dictionary.contacts.description} />
            <div className={styles.actions}><Button href={site.phoneLink} variant="primary" size="lg"><Icon name="phone" />{site.phone}</Button><Button href={site.whatsappLink} variant="whatsapp" size="lg" target="_blank" rel="noreferrer"><Icon name="whatsapp" />{dictionary.nav.write}</Button></div>
          </div>
          <div className={styles.info}>
            <div><span className={styles.infoIcon}><Icon name="clock" /></span><p>{dictionary.contacts.hours}</p><strong>{site.hours}</strong></div>
            <div><span className={styles.infoIcon}><Icon name="pin" /></span><p>{dictionary.contacts.area}</p><strong>{site.areaServed.join(' · ')}</strong></div>
            <div><span className={styles.infoIcon}><Icon name="phone" /></span><p>{dictionary.contacts.otherPhone}</p><strong><a href={site.phoneLink}>{site.phone}</a></strong></div>
            <a href={site.telegramLink} target="_blank" rel="noreferrer" className={styles.telegram}><Icon name="telegram" />{dictionary.contacts.telegram}<Icon name="arrow" /></a>
          </div>
          <span className={styles.deco} aria-hidden="true">24/7</span>
        </div>
      </Container>
    </section>
  );
}
