import React from 'react';

const IndexView = ({current, total}) => {
    return (
        <div className="sections__index">
            <span className="sections__index-current">
                <span className="sections__index-inner">{current}</span>
            </span>
            <span className="sections__index-total">{total}</span>
        </div>
    );
};

export default IndexView;
