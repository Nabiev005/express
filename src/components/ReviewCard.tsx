import { Icon } from './Icon';

interface ReviewCardProps {
  name: string;
  text: string;
  location: string;
}

export function ReviewCard({ name, text, location }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="review-card__stars" aria-label="5/5"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></div>
      <blockquote>{text}</blockquote>
      <div className="review-card__author"><span className="review-card__avatar">{name.charAt(0)}</span><div><h3>{name}</h3><p>{location}</p></div></div>
    </article>
  );
}
