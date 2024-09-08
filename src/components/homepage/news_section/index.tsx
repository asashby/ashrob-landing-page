import React from 'react';
import ArticleCard from './article_card/index.tsx';
import './styles.scss';
import { useTranslation } from "react-i18next";

interface NewsSectionProps {
    ref: any;
}

const NewsSection: React.FC<NewsSectionProps> = ({ref}) => {
    
  const [t, i18n] = useTranslation("blog");

  const articleData = [
    {
      date: t("blog.articles.article_1.date"),
      title: t("blog.articles.article_1.title"),
      excerpt: t("blog.articles.article_1.description"),
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e775e325d568b975a4d97a33e78e3641553b28cdf889b9e1a325403d9c4d5098?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
    },
    {
      date: t("blog.articles.article_2.date"),
      title: t("blog.articles.article_2.title"),
      excerpt: t("blog.articles.article_2.description"),
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e775e325d568b975a4d97a33e78e3641553b28cdf889b9e1a325403d9c4d5098?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
    },
    {
      date: t("blog.articles.article_3.date"),
      title: t("blog.articles.article_3.title"),
      excerpt: t("blog.articles.article_3.description"),
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e775e325d568b975a4d97a33e78e3641553b28cdf889b9e1a325403d9c4d5098?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
    }
  ];

  return (
    <>
      <section className="news-articles-section">
        <h2 className="section-title" ref={ref}>{t("blog.title")}</h2>
        <div className="articles-container">
          <div className="articles-row">
            <div className="side-column">
              <div className="side-article-wrapper">
                <div className="side-image-gallery">
                  <div className="side-image-row">
                    <div className="side-icon-column">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68e8995e36dc9c4eb0498b436f94f16eb40bec612f551e1804436449ec37da26?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" className="side-icon" alt="" />
                    </div>
                    {articleData.map((article) => (
                      <ArticleCard
                        image={article.image}
                        date={article.date}
                        title={article.title}
                        excerpt={article.excerpt}
                        btn_prompt={t("blog.btn_prompt")}
                      />
                    ))}
                    <div className="side-icon-column">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a20ee7f780925153b7894bb9904de6fb0c7efd68b603bb1d33e7fd32a213a192?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" className="side-icon" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;