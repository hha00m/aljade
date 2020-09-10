import React from "react";
import { WingBlank, SegmentedControl, View, WhiteSpace } from 'antd-mobile';
import Grid from "./GridView";
import List from "./ListView";
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { connect } from 'react-redux';

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
            return this.setState({ grid: false });
        } else return this.setState({ grid: true });
    }
    onValueChange = (value) => {
        console.log(value);
    }
    render() {
        return (
            <View>
                {this.props.showStyleBar.show ?
                    <WingBlank><SegmentedControl
                        values={[<BarsOutlined style={{ fontSize: '22px' }} />, <AppstoreOutlined style={{ fontSize: '22px' }} />]}
                        onChange={this.onChange}
                        onValueChange={this.onValueChange}
                    />
                    </WingBlank>
                    : ''}

                <WhiteSpace size='lg' />
                {this.state.grid ? <Grid /> : <List />}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        showStyleBar: state.showStyleBar,
    }
}

export default connect(mapStateToProps)(ViewType);
