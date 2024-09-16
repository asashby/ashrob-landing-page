import React from "react";
import './styles.scss';

const SideMenuIcon: React.FC = () => {
    return (
        <div className="icon-container">
            <img 
                className="side-menu-icon"
                src="https://ashrob-media.s3.us-east-2.amazonaws.com/web-icons/menu.png"
            />
        </div>
    );
};

export default SideMenuIcon;