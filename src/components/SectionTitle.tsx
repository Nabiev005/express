import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
}

export function SectionTitle({ eyebrow, title, description, align = 'left', action }: SectionTitleProps) {
  return (
    <div className={`section-title section-title--${align}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-title__description">{description}</p>}
      </div>
      {action}
    </div>
  );
}
