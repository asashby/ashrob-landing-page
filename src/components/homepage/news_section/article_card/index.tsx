import React from 'react';
import './styles.scss';

interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  btn_prompt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, date, title, excerpt, btn_prompt }) => {
  return (
    <div className="article-card-container">
      <div className="side-image-column">
        <img loading="lazy" src={image} className="side-article-image" alt="Article thumbnail" />
      </div>
      <article className="article-card">
        <time className="article-date">{date}</time>
        <h3 className="article-title">{title}</h3>
        <p className="article-excerpt">{excerpt}</p>
        <button className="learn-more-btn">{btn_prompt}</button>
      </article>
    </div>
  );
};

export default ArticleCard;