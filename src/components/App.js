import React from 'react';
import Layout from './Layout';
import Menu from '../containers/Menu';
import Section from '../containers/section/Section';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Layout />
                <Menu />
                <Section />
            </div>
        );
    }
}
