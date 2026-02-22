import React from 'react';
import styles from './styles.module.css';

interface ScrollToReferenceProps {
  targetId: string;
  children: React.ReactNode;
}

export default function ScrollToReference({
  targetId,
  children,
}: ScrollToReferenceProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <span
      role='link'
      tabIndex={0}
      className={styles.scrollToRef}
      onClick={handleClick}
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') handleClick(e as any);
      }}
    >
      {children}
    </span>
  );
}
