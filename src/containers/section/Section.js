import React, {Component} from 'react';
import DownloadPrintable from './DownloadPrintable';
import SectionImage from './SectionImage';
import SectionContent from './SectionContent';
import SectionDetails from './SectionDetails';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {section} = this.props;
        let content = {};
        let details = {};

        if (section) {
            content = {
                name: section.name,
                content: section.content
            };
            details = section.details;
        }

        return (
            <section className="section section--current">
                <SectionContent section={content} />
                <SectionImage />
                <DownloadPrintable />
                <div className="section__expander" />
                <SectionDetails details={details} />
            </section>
        );
    }
}

export default Section;
