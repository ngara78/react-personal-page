import React from 'react';

const DownloadPrintable = () => {
    return (
        <div className="section__more">
            <div className="section__more-inner section__more-inner--bg1">
                <span className="section__more-text">Do you want a printable version?</span>
                <a href="#" className="section__more-link">
                    <span className="section__more-linktext">Download here!</span>
                    <svg className="icon icon--arrowlong">
                        <use xlinkHref="#icon-arrowlong" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default DownloadPrintable;
