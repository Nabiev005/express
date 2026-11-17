import fleetPhoto from '../assets/works/fleet-mountain.jpeg';
import servicePhoto from '../assets/works/black-suv-loading.jpeg';
import { useLang } from '../hooks/useLang';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { SectionTitle } from '../components/SectionTitle';
import { site } from '../config/site';
import styles from './Services.module.css';

export function Services() {
  const { dictionary } = useLang();
  const items = [
    { title: dictionary.services.firstTitle, text: dictionary.services.firstText, note: dictionary.services.firstNote, image: fleetPhoto },
    { title: dictionary.services.secondTitle, text: dictionary.services.secondText, note: dictionary.services.secondNote, image: servicePhoto },
  ];
  return (
    <section className={`section ${styles.section}`} id="services">
      <Container>
        <SectionTitle eyebrow={dictionary.services.eyebrow} title={dictionary.services.title} />
        <div className={styles.list}>
          {items.map((item, index) => (
            <article className={`${styles.service} ${index % 2 ? styles.reverse : ''}`} key={item.title}>
              <div className={styles.photo}><img src={item.image} width="960" height="640" loading="lazy" alt={dictionary.services.imageAlt} /><span>0{index + 1}</span></div>
              <div className={styles.content}><p className="eyebrow">{dictionary.services.eyebrow} · 0{index + 1}</p><h3>{item.title}</h3><p className={styles.text}>{item.text}</p><p className={styles.note}><Icon name="check" />{item.note}</p><div className={styles.actions}><Button href={site.whatsappLink} variant="whatsapp" target="_blank" rel="noreferrer"><Icon name="whatsapp" />{dictionary.services.whatsapp}</Button><Button href={site.phoneLink} variant="outline"><Icon name="phone" />{dictionary.services.call}</Button></div></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
