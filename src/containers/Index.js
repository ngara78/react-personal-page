import React, {Component} from 'react';
import IndexView from '../components/IndexView';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {}

    componentWillReceiveProps(props) {}

    render() {
        return <IndexView current={this.props.current} total={this.props.total} />;
    }
}
export default Index;