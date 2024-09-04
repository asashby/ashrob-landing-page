import React from 'react';
import './styles.scss';

interface ArticleCardProps {
  date: string;
  title: string;
  excerpt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, excerpt }) => {
  return (
    <article className="article-card">
      <time className="article-date">{date}</time>
      <h3 className="article-title">{title}</h3>
      <p className="article-excerpt">{excerpt}</p>
      <button className="learn-more-btn">Learn more</button>
    </article>
  );
};

export default ArticleCard;