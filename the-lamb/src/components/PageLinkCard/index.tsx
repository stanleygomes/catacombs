import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface PageLinkCardProps {
  to: string;
  imgSrc: string;
  title: string;
  description?: string;
}

export const PageLinkCard: React.FC<PageLinkCardProps> = ({
  to,
  imgSrc,
  title,
  description,
}) => (
  <Link className={styles.card} to={to}>
    <img src={imgSrc} alt={title} className={styles.image} />
    <div className={styles.content}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  </Link>
);

interface PageLinkCardsProps {
  links: PageLinkCardProps[];
}

export const PageLinkCards: React.FC<PageLinkCardsProps> = ({ links }) => (
  <div className={styles.cardsContainer}>
    {links.map(link => (
      <PageLinkCard key={link.to} {...link} />
    ))}
  </div>
);
