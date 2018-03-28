import React, {Component} from 'react';

class NavigationDown extends Component {
    render() {
        return (
            <nav className="sections__nav">
                <button className="sections__nav-item sections__nav-item--prev">
                    <svg className="icon icon--navup">
                        <use xlinkHref="#icon-navup" />
                    </svg>
                </button>
                <button className="sections__nav-item sections__nav-item--next">
                    <svg className="icon icon--navdown">
                        <use xlinkHref="#icon-navdown" />
                    </svg>
                </button>
            </nav>
        );
    }
}

export default NavigationDown;
