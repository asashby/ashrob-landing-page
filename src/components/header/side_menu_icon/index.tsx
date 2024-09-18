import React from "react";
import './styles.scss';

interface SideMenuIconProps {
    onPressed: any;
}

const SideMenuIcon: React.FC<SideMenuIconProps> = ({onPressed}) => {
    return (
        <div className="icon-container" onClick={onPressed}>
            <img 
                className="side-menu-icon"
                src="https://ashrob-media.s3.us-east-2.amazonaws.com/web-icons/menu.png"
            />
        </div>
    );
};

export default SideMenuIcon;