import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useLang } from './hooks/useLang';
import { site } from './config/site';
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { Stats } from './sections/Stats';
import { Services } from './sections/Services';
import { Gallery } from './sections/Gallery';
import { Process } from './sections/Process';
import { Reviews } from './sections/Reviews';
import { Contacts } from './sections/Contacts';
import './styles/global.css';

function App() {
  const { language, dictionary } = useLang();

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = dictionary.meta.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute('content', dictionary.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', dictionary.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', dictionary.meta.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${site.canonicalUrl}/${language}`);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', dictionary.meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', dictionary.meta.description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', `${site.canonicalUrl}/${language}`);
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `${site.canonicalUrl}/${language}`;
    if (!canonical.parentElement) document.head.append(canonical);
    document.querySelector<HTMLLinkElement>('link[hreflang="ky"]')?.setAttribute('href', `${site.canonicalUrl}/ky`);
    document.querySelector<HTMLLinkElement>('link[hreflang="ru"]')?.setAttribute('href', `${site.canonicalUrl}/ru`);
  }, [language, dictionary]);

  useEffect(() => {
    const tagId = import.meta.env.VITE_GTM_ID;
    if (!tagId || tagId === 'GTM-XXXXXXX') return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(tagId)}`;
    document.head.append(script);
    return () => script.remove();
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TowingService',
    name: site.name,
    telephone: site.phoneInternational,
    url: `${site.canonicalUrl}/${language}`,
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: site.areaServed,
    address: { '@type': 'PostalAddress', addressLocality: 'Бишкек', addressCountry: 'KG' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Stats />
        <Services />
        <Gallery />
        <Process />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
