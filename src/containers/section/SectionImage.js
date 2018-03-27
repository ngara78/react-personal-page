import React from 'react';
import './../../images/1.jpg'

const SectionImage = () => {
    return (
        <div className="section__img">
            <div
                className="section__img-inner"
                style={{backgroundImage: `url(require("images/1.jpg"))`}}
            />
        </div>
    );
};

export default SectionImage;