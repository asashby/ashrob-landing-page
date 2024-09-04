import React from 'react';
import ArticleCard from './article_card/index.tsx';
import './styles.scss';

const articleData = [
  {
    date: "August 27th 2024",
    title: "Loren ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e775e325d568b975a4d97a33e78e3641553b28cdf889b9e1a325403d9c4d5098?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
  },
  {
    date: "August 27th 2024",
    title: "Loren ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e775e325d568b975a4d97a33e78e3641553b28cdf889b9e1a325403d9c4d5098?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
  },
  {
    date: "August 27th 2024",
    title: "Loren ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e775e325d568b975a4d97a33e78e3641553b28cdf889b9e1a325403d9c4d5098?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
  }
];

const NewsSection: React.FC = () => {
  return (
    <>
      <section className="news-articles-section">
        <h2 className="section-title">NEWS & ARTICLES</h2>
        <div className="articles-container">
          <div className="articles-row">
            <div className="main-column">
              <div className="main-article-wrapper">
                <div className="image-gallery">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68e8995e36dc9c4eb0498b436f94f16eb40bec612f551e1804436449ec37da26?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" className="icon" alt="" />
                  <img loading="lazy" src={articleData[0].image} className="article-image" alt="Article thumbnail" />
                  <img loading="lazy" src={articleData[1].image} className="article-image" alt="Article thumbnail" />
                </div>
                <div className="articles-grid">
                  <div className="articles-row">
                    {articleData.slice(0, 2).map((article, index) => (
                      <div key={index} className="article-column">
                        <ArticleCard
                          date={article.date}
                          title={article.title}
                          excerpt={article.excerpt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="side-column">
              <div className="side-article-wrapper">
                <div className="side-image-gallery">
                  <div className="side-image-row">
                    <div className="side-image-column">
                      <img loading="lazy" src={articleData[2].image} className="side-article-image" alt="Article thumbnail" />
                    </div>
                    <div className="side-icon-column">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a20ee7f780925153b7894bb9904de6fb0c7efd68b603bb1d33e7fd32a213a192?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" className="side-icon" alt="" />
                    </div>
                  </div>
                </div>
                <div className="side-article-card">
                  <ArticleCard
                    date={articleData[2].date}
                    title={articleData[2].title}
                    excerpt={articleData[2].excerpt}
                  />
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