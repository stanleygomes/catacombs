import React from 'react';
import styles from './CenteredImageWithCaption.module.css';

interface CenteredImageWithCaptionProps {
  src: string;
  alt?: string;
  caption?: string;
  maxWidth?: number | string;
}

export default function CenteredImageWithCaption({
  src,
  alt,
  caption,
  maxWidth = 400,
}: CenteredImageWithCaptionProps) {
  return (
    <figure
      className={styles.figure}
      style={{
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
      }}
    >
      <img
        src={src}
        alt={alt || ''}
        className={styles.image}
        style={{
          maxWidth: '100%',
          width: '100%',
          display: 'block',
          margin: '0 auto',
        }}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
