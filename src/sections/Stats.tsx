import { useEffect, useRef, useState } from 'react';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { useLang } from '../hooks/useLang';
import styles from './Stats.module.css';

export function Stats() {
  const { dictionary } = useLang();
  const ref = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting || frame) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(1000);
        observer.disconnect();
        return;
      }
      const start = performance.now();
      const duration = 1400;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(1000 * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.3 });
    observer.observe(element);
    return () => { observer.disconnect(); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return (
    <section className={styles.section} ref={ref} aria-label={dictionary.stats.customers}>
      <Container className={styles.inner}>
        <div className={styles.stat}><div className={styles.number}>{count.toLocaleString()}<span>+</span></div><p>{dictionary.stats.customers}</p></div>
        <div className={styles.divider} />
        <div className={styles.detail}><span className={styles.icon}><Icon name="pin" /></span><div><h3>{dictionary.stats.coverage}</h3><p>{dictionary.stats.years}</p></div></div>
      </Container>
    </section>
  );
}
