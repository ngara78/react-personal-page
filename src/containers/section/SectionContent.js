import React from 'react';

const SectionContent = ({section}) => {
    const {name, content} = section;
    return (
        <div className="section__content">
            <h2 className="section__title">{name}</h2>
            <p className="section__description">
                <span className="section__description-inner">{content}</span>
            </p>
        </div>
    );
};

export default SectionContent;
