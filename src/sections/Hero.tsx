import heroPhoto from '../assets/works/red-suv-loading.jpeg';
import { useLang } from '../hooks/useLang';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { site } from '../config/site';
import styles from './Hero.module.css';

export function Hero() {
  const { dictionary } = useLang();
  const { hero } = dictionary;
  return (
    <section className={styles.hero} id="home">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <p className="eyebrow"><span className={styles.pulse} />{hero.eyebrow}</p>
          <h1>{hero.title}<span>.</span></h1>
          <p className={styles.description}>{hero.description}</p>
          <ul className={styles.points}>
            {hero.points.map((point) => <li key={point}><Icon name="check" />{point}</li>)}
          </ul>
          <div className={styles.actions}>
            <Button href={site.whatsappLink} variant="whatsapp" size="lg" target="_blank" rel="noreferrer"><Icon name="whatsapp" />{hero.whatsapp}</Button>
            <Button href={site.phoneLink} variant="primary" size="lg"><Icon name="phone" />{hero.call}</Button>
          </div>
          <div className={styles.trust}><span className={styles.avatars}><i>M</i><i>A</i><i>Ч</i></span><span>{hero.rating}<b> · 1000+</b></span></div>
        </div>
        <div className={styles.visual}>
          <div className={styles.glow} />
          <img src={heroPhoto} width="768" height="1024" alt={hero.imageAlt} />
          <div className={styles.badge}><span><Icon name="clock" /></span><b>{hero.badge}</b></div>
          <span className={styles.visualLabel}>24<span>/</span>7</span>
        </div>
      </Container>
      <div className={styles.bottomLine}><Container><span /><span /></Container></div>
    </section>
  );
}
