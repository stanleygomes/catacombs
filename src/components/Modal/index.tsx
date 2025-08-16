import React, { useEffect, useRef } from 'react';
import styles from './modal.module.css';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  autoFocus?: boolean;
}

export default function Modal({
  open,
  onClose,
  title,
  children,
  autoFocus = true,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);

    if (autoFocus && panelRef.current) {
      panelRef.current.focus();
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose, autoFocus]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      role='presentation'
      onMouseDown={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={styles.panel}
        role='dialog'
        aria-modal='true'
        aria-label={title}
        tabIndex={-1}
      >
        <button
          type='button'
          className={styles.close}
          aria-label='Fechar'
          onClick={onClose}
        >
          ×
        </button>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
