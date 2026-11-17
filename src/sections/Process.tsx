import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { SectionTitle } from '../components/SectionTitle';
import { useLang } from '../hooks/useLang';
import styles from './Process.module.css';

export function Process() {
  const { dictionary } = useLang();
  return (
    <section className={`section ${styles.section}`} id="process">
      <Container>
        <SectionTitle eyebrow={dictionary.process.eyebrow} title={dictionary.process.title} align="center" />
        <ol className={styles.steps}>
          {dictionary.process.steps.map((step, index) => <li className={styles.step} key={step.title}><span className={styles.number}>0{index + 1}</span><span className={styles.check}><Icon name="check" /></span><h3>{step.title}</h3><p>{step.text}</p></li>)}
        </ol>
      </Container>
    </section>
  );
}
