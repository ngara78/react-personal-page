import React from 'react';

const SectionContent = ({section}) => {
    return (
        <div className="section__content">
            <h2 className="section__title">{section.name}</h2>
            <p className="section__description">
                <span className="section__description-inner">{section.content}</span>
            </p>
        </div>
    );
};

export default SectionContent;