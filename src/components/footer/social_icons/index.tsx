import React from 'react';
import './styles.scss';

interface SocialIconProps {
  src: string;
  alt: string;
  link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, link }) => (
  <a href={link} target="_blank">
    <img src={src} alt={alt}  className="social-icon" />
  </a>
);

const SocialIcons: React.FC = () => {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcee3c440958098dcf1584cc928767110f1896bfa02b3de19b987f1f57b17d99?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", alt: "X", link: "https://x.com/Ashrobbuilding" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/06a0211801b14889cc4d5bc08ecc752b7c28a5c405e480cbadcecc9a2af82954?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", alt: "Instagram", link: "https://www.instagram.com/ashrobbuildingcompany"  },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c7f58d76bca4ebf4b399efeed5ab2e27ee68fcd31ca7248b0adba4f6bc18fc8?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", alt: "TikTok", link: "https://www.tiktok.com/@ashrobbuildingcom?_t=8pTtmAj0pbq&_r=1"  },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ab1c882a69ecaa4b609bf38ffc2bbe7bfc6092721a93e8ec2af76e2e2af9d63?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", alt: "Facebook", link: "https://www.facebook.com/profile.php?id=61565720257615"  },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e848556b16c0b1d726928f1ee5965477beccc6e24ff88dfc574cc9d94e5b3ed?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", alt: "LinkedIn", link: "https://linkedin.com/company/ashrob-building-company"  },
    { src: "https://firebasestorage.googleapis.com/v0/b/ashrob-landing-page-6c3fe.appspot.com/o/youtube.png?alt=media&token=6bae92f4-dea2-4606-a167-c91ebd6e857e", alt: "Youtube", link: "https://www.youtube.com/@ASHROBBUILDINGCOMPANYS.R.L"  }
  ];

  return (
    <div className="social-icons">
      {icons.map((icon, index, link) => (
        <SocialIcon key={index} src={icon.src} alt={icon.alt} link={icon.link} />
      ))}
    </div>
  );
};

export default SocialIcons;