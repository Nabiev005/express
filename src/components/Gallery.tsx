import { useEffect, useState } from 'react';
import fleetPhoto from '../assets/works/fleet-mountain.jpeg';
import redSuvPhoto from '../assets/works/red-suv-loading.jpeg';
import blackSuvPhoto from '../assets/works/black-suv-loading.jpeg';
import blueTruckPhoto from '../assets/works/blue-truck-mountain.jpeg';
import { useLang } from '../hooks/useLang';
import { Icon } from './Icon';
import styles from '../sections/Gallery.module.css';

const photos = [fleetPhoto, redSuvPhoto, blackSuvPhoto, blueTruckPhoto];

export function Gallery() {
  const { dictionary } = useLang();
  const [selected, setSelected] = useState<number | null>(null);
  const move = (offset: number) => setSelected((current) => current === null ? null : (current + offset + photos.length) % photos.length);

  useEffect(() => {
    if (selected === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <button key={photo} type="button" className={styles.image} onClick={() => setSelected(index)} aria-label={`${dictionary.gallery.open}: ${dictionary.gallery.images[index]}`}>
            <img src={photo} width={index === 0 ? 1100 : 650} height={index === 0 ? 720 : 460} loading="lazy" alt={dictionary.gallery.images[index]} />
            <span className={styles.zoom}><Icon name="arrow" /></span>
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={dictionary.gallery.images[selected]} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <button type="button" className={styles.close} onClick={() => setSelected(null)} aria-label={dictionary.gallery.close}><Icon name="close" /></button>
          <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => move(-1)} aria-label={dictionary.gallery.previous}><Icon name="arrow" /></button>
          <figure><img src={photos[selected]} width="1600" height="1000" alt={dictionary.gallery.images[selected]} /><figcaption>{dictionary.gallery.images[selected]}</figcaption></figure>
          <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => move(1)} aria-label={dictionary.gallery.next}><Icon name="arrow" /></button>
        </div>
      )}
    </>
  );
}
