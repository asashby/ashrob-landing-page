import React from 'react';
import './styles.scss';

interface LanguageOption {
  code: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const languages: LanguageOption[] = [
    { code: 'US', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c9c4677d6327b4c4cb891373d14418492c7b230faab2934861d9bf6aabaad03c?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294' },
    { code: 'DO', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4cfa7b6fc47974c15b0502c0fc9a6ba4b12a5e5f91986cc566ed667d7358e98b?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294' },
  ];

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button key={lang.code} className="language-option">
          <img loading="lazy" src={lang.flag} alt={`${lang.code} flag`} className="flag-icon" />
          <span className="language-code">{lang.code}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;