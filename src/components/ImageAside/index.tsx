import React, { ReactNode, CSSProperties } from 'react';
import ImageWithCaption, { ImageWithCaptionProps } from '../ImageWithCaption';
import styles from './styles.module.css';

export type ImageAsideAlign = 'left' | 'right';

interface ImageAsideProps extends Partial<ImageWithCaptionProps> {
  align?: ImageAsideAlign;
  children: ReactNode;
  style?: CSSProperties;
}

export default function ImageAside({
  src,
  alt,
  caption,
  maxWidth,
  align = 'right',
  children,
  style,
  ...imgProps
}: ImageAsideProps) {
  // Restrict align to 'left' or 'right'
  const imageAlign: 'left' | 'right' = align === 'left' ? 'left' : 'right';

  return (
    <div
      className={styles.container}
      style={{
        display: 'flex',
        flexDirection: imageAlign === 'left' ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: '2rem',
        ...style,
      }}
    >
      <ImageWithCaption
        src={src!}
        alt={alt}
        caption={caption}
        maxWidth={maxWidth}
        align={'center'}
        {...imgProps}
      />
      <div className={styles.text}>{children}</div>
    </div>
  );
}
