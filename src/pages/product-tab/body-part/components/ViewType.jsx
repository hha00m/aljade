import React from "react";
import { WingBlank, SegmentedControl, View, WhiteSpace } from 'antd-mobile';
import Grid from "./GridView";
import List from "./ListView";
import { bindActionCreators } from 'redux';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { connect } from 'react-redux';
import {showStyleBarMethod} from '../../store/actions/index'

class ViewType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: false,
        };
    }

    onChange = (e) => {
        console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
        if (e.nativeEvent.selectedSegmentIndex === 0) {
            this.props.showStyleBarMethod(true,false);
            return this.setState({ grid: false });
        } else {
            this.props.showStyleBarMethod(true,true);
            return this.setState({ grid: true })};
    }
    onValueChange = (value) => {
        console.log(value);
    }
    render() {
        return (
            <View> 
                {this.props.showStyleBar.show ?
                    <WingBlank >
                        <WhiteSpace />
                        <SegmentedControl
                            values={[<BarsOutlined style={{ fontSize: '22px' }} />, <AppstoreOutlined style={{ fontSize: '22px' }} />]}
                            onChange={this.onChange}
                            selectedIndex={this.props.showStyleBar.grid?1:0}
                    
                        />
                    </WingBlank>
                    : ''}

                <WhiteSpace />
                {this.props.showStyleBar.grid ? <Grid /> : <List />}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        showStyleBar: state.showStyleBar,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            showStyleBarMethod: showStyleBarMethod
        }, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(ViewType);
