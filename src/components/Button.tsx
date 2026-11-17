import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'whatsapp' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a className={`button button--${variant} button--${size} ${className}`} {...props}>
      {children}
    </a>
  );
}
