import React from 'react';
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    
    const [t, i18n] = useTranslation("not_found");
    
    return (
        <div className="not-found-container">
            <img className="not-found-icon" src='https://firebasestorage.googleapis.com/v0/b/ashrob-landing-page-6c3fe.appspot.com/o/bad-search.png?alt=media&token=1a7a7558-adcb-40cb-89f0-eefcea1b4982'/>
            <p className="not-found-title">{t("not_found.title")}</p>
            <p className="not-found-subtitle">{t("not_found.subtitle")}</p>
            <Link to="/">
                <button className="not-found-button">
                    {t("not_found.btn_prompt")}
                </button>
            </Link>
        </div>
    );
};

export default NotFoundPage;