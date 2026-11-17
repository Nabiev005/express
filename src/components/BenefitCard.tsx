import type { IconName } from './Icon';
import { Icon } from './Icon';

interface BenefitCardProps {
  icon: IconName;
  title: string;
  text: string;
  index: string;
}

export function BenefitCard({ icon, title, text, index }: BenefitCardProps) {
  return (
    <article className="benefit-card">
      <div className="benefit-card__top"><span className="benefit-card__icon"><Icon name={icon} /></span><span className="benefit-card__index">{index}</span></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
