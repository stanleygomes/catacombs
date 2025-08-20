import React from 'react';
import styles from './styles.module.css';

export type ImageAlign = 'left' | 'center' | 'right';

interface ImageWithCaptionProps {
  src: string;
  alt?: string;
  caption?: string;
  maxWidth?: number | string;
  align?: ImageAlign;
}

export default function ImageWithCaption({
  src,
  alt,
  caption,
  maxWidth = 400,
  align = 'center',
}: ImageWithCaptionProps) {
  let justifyContent: React.CSSProperties['justifyContent'] = 'center';
  if (align === 'left') justifyContent = 'flex-start';
  if (align === 'right') justifyContent = 'flex-end';

  return (
    <figure
      className={styles.figure}
      style={{
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        display: 'flex',
        flexDirection: 'column',
        alignItems:
          align === 'center'
            ? 'center'
            : align === 'left'
              ? 'flex-start'
              : 'flex-end',
        justifyContent,
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
        }}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
