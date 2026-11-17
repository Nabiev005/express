import { site } from '../config/site';
import { useLang } from '../hooks/useLang';
import { Button } from './Button';
import { Icon } from './Icon';

interface ContactButtonsProps {
  whatsappText?: string;
  callText?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ContactButtons({ whatsappText, callText, size = 'md', className = '' }: ContactButtonsProps) {
  const { dictionary } = useLang();
  return (
    <div className={`contact-buttons ${className}`}>
      <Button href={site.whatsappLink} variant="whatsapp" size={size} target="_blank" rel="noreferrer">
        <Icon name="whatsapp" /> {whatsappText ?? dictionary.nav.write}
      </Button>
      <Button href={site.phoneLink} variant="primary" size={size}>
        <Icon name="phone" /> {callText ?? dictionary.nav.call}
      </Button>
    </div>
  );
}
