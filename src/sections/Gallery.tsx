import { Container } from '../components/Container';
import { Gallery as GalleryGrid } from '../components/Gallery';
import { SectionTitle } from '../components/SectionTitle';
import { useLang } from '../hooks/useLang';
import styles from './GallerySection.module.css';

export function Gallery() {
  const { dictionary } = useLang();
  return (
    <section className={`section ${styles.section}`} id="gallery">
      <Container>
        <SectionTitle eyebrow={dictionary.gallery.eyebrow} title={dictionary.gallery.title} description={dictionary.gallery.caption} align="center" />
        <GalleryGrid />
      </Container>
    </section>
  );
}
