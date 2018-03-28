import React, {Component} from 'react';
import Layout from './Layout';
import Sections from '../containers/Sections';
import MenuView from './MenuView';
import NavigationDown from '../containers/NavigationDown';
import SectionHeader from './SectionHeader';
import FactsExpander from '../containers/section/FactsExpander';
import Index from '../containers/Index';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout/>
                <main>
                    <div className="sections">
                        <SectionHeader/>
                        <MenuView/>
                        <FactsExpander/>
                        <Index current="0" total="0" />
                        <NavigationDown/>
                        <Sections/>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
