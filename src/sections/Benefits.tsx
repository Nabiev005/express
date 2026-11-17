import { BenefitCard } from '../components/BenefitCard';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { useLang } from '../hooks/useLang';
import styles from './Benefits.module.css';

const icons = ['price', 'clock', 'shield'] as const;

export function Benefits() {
  const { dictionary } = useLang();
  return (
    <section className={`section ${styles.section}`} id="benefits">
      <Container>
        <SectionTitle eyebrow={dictionary.benefits.eyebrow} title={dictionary.benefits.title} />
        <div className={styles.grid}>
          {dictionary.benefits.items.map((item, index) => <BenefitCard key={item.title} icon={icons[index] ?? 'shield'} title={item.title} text={item.text} index={`0${index + 1}`} />)}
        </div>
      </Container>
    </section>
  );
}
