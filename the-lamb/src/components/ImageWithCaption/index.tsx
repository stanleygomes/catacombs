import React from 'react';
import styles from './styles.module.css';

export type ImageAlign = 'left' | 'center' | 'right';

export interface ImageWithCaptionProps {
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
  let imageAlign: React.CSSProperties['alignSelf'] = 'center';
  if (align === 'left') imageAlign = 'flex-start';
  if (align === 'right') imageAlign = 'flex-end';

  return (
    <figure
      className={styles.figure}
      style={{
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          alignSelf: imageAlign,
        }}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
