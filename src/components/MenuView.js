import React from 'react';

const MENU_OPTIONS = {
    ABOUT: 'About',
    EXPERIENCE: 'Experience',
    EDUCATION: 'Education',
    SKILLS: 'Skills',
    INTERESTS: 'Interests',
    CONTACT: 'Contact'
};

const renderMenuOptions = () => {
    let menuOptions = [];
    Object.keys(MENU_OPTIONS).forEach(attrName => {
        menuOptions.push(
            <li className="menu__item" key={attrName}>
                <a className="menu__item-link" href="#">
                    {MENU_OPTIONS[attrName]}
                </a>
            </li>
        );
    });
    return menuOptions;
};

const MenuView = () => {
    return (
        <nav className="menu">
            <ul className="menu__inner">{renderMenuOptions()}</ul>
            <div className="menu__toggle">
                <span className="menu__toggle-inner menu__toggle-inner--open">
                    <svg className="icon icon--menu">
                        <use xlinkHref="#icon-menu" />
                    </svg>
                </span>
                <span className="menu__toggle-inner menu__toggle-inner--close">
                    <svg className="icon icon--close">
                        <use xlinkHref="#icon-close" />
                    </svg>
                </span>
            </div>
        </nav>
    );
};

export default MenuView;
