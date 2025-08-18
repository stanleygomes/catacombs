import React, { useState, ReactNode } from 'react';
import Modal from '@site/src/components/Modal';
import styles from './modalContainer.module.css';

export interface ModalTermProps {
  label: ReactNode;
  title?: string;
  children: ReactNode;
  noUnderline?: boolean;
}

export default function ModalTerm({
  label,
  title,
  children,
  noUnderline,
}: ModalTermProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type='button'
        className={
          styles.trigger + (noUnderline ? ' ' + styles.noUnderline : '')
        }
        aria-haspopup='dialog'
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title || (typeof label === 'string' ? label : undefined)}
      >
        {children}
      </Modal>
    </>
  );
}
