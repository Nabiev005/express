import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { ReviewCard } from '../components/ReviewCard';
import { SectionTitle } from '../components/SectionTitle';
import { useLang } from '../hooks/useLang';
import styles from './Reviews.module.css';

export function Reviews() {
  const { dictionary } = useLang();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const startX = useRef<number | null>(null);
  const reviews = dictionary.reviews.items;
  const move = useCallback((amount: number) => setIndex((current) => (current + amount + reviews.length) % reviews.length), [reviews.length]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => move(1), 6500);
    return () => window.clearInterval(timer);
  }, [move, playing]);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  };
  const onPointerDown = (event: PointerEvent<HTMLElement>) => { startX.current = event.clientX; };
  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (startX.current === null) return;
    const distance = event.clientX - startX.current;
    if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
    startX.current = null;
  };
  const currentReview = reviews[index];
  if (!currentReview) return null;

  return (
    <section className={`section ${styles.section}`} id="reviews" onKeyDown={onKeyDown} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={() => { startX.current = null; }} tabIndex={0} aria-roledescription="carousel" aria-label={dictionary.reviews.title}>
      <Container>
        <SectionTitle eyebrow={dictionary.reviews.eyebrow} title={dictionary.reviews.title} />
        <div className={styles.slider} aria-live="polite">
          <div className={styles.card}><ReviewCard name={currentReview.name} text={currentReview.text} location={currentReview.location} /><span className={styles.quoteMark}>“</span></div>
          <div className={styles.controls}>
            <span className={styles.counter}>0{index + 1}<i> / 0{reviews.length}</i></span>
            <div className={styles.dots} aria-label={dictionary.reviews.title}>
              {reviews.map((review, dotIndex) => <button key={review.name} type="button" className={dotIndex === index ? styles.activeDot : ''} onClick={() => setIndex(dotIndex)} aria-label={`${dictionary.reviews.slide} ${dotIndex + 1}`} aria-pressed={dotIndex === index} />)}
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={() => move(-1)} aria-label={dictionary.reviews.previous}><Icon name="arrow" /></button>
              <button type="button" onClick={() => move(1)} aria-label={dictionary.reviews.next}><Icon name="arrow" /></button>
              <button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? dictionary.reviews.pause : dictionary.reviews.play}><Icon name={playing ? 'pause' : 'play'} /></button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
