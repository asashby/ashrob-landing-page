import React from 'react';
import ArticleCard from './article_card/index.tsx';
import './styles.scss';
import { useTranslation } from "react-i18next";

const NewsSection: React.FC = () => {
    
  const [t, i18n] = useTranslation("blog");

  const articleData = [
    {
      date: t("blog.articles.article_1.date"),
      title: t("blog.articles.article_1.title"),
      excerpt: t("blog.articles.article_1.description"),
      image: "https://firebasestorage.googleapis.com/v0/b/ashrob-landing-page-6c3fe.appspot.com/o/architectural-map.jpg?alt=media&token=e23e91e5-d982-4597-b20f-71733eb449c7"
    },
    {
      date: t("blog.articles.article_2.date"),
      title: t("blog.articles.article_2.title"),
      excerpt: t("blog.articles.article_2.description"),
      image: "https://firebasestorage.googleapis.com/v0/b/ashrob-landing-page-6c3fe.appspot.com/o/pexels-cottonbro-5077049.jpg?alt=media&token=447e5c14-2565-4671-9b4e-754bc4684ff3"
    },
    {
      date: t("blog.articles.article_3.date"),
      title: t("blog.articles.article_3.title"),
      excerpt: t("blog.articles.article_3.description"),
      image: "https://firebasestorage.googleapis.com/v0/b/ashrob-landing-page-6c3fe.appspot.com/o/punta-cana.jpg?alt=media&token=bbe2b4ca-ee72-4c76-b586-8dc08ba1bb8c"
    }
  ];

  return (
    <>
      <section className="news-articles-section" id='news-section-ref'>
        <h2 className="news-section-title">{t("blog.title")}</h2>
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