import React from 'react';

const SectionDetails = ({details}) => {
    const namesList = details.map((detail, index) => {
        return (
            <li className="section__facts-item" key={index}>
                <h3 className="section__facts-title">{detail.title}</h3>
                <span className="section__facts-detail">{detail.detail}</span>
            </li>
        )
    });

    return  <ul className="section__facts">{ namesList }</ul>
};

SectionDetails.defaultProps = {
    details: []
};

export default SectionDetails;