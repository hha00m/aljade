import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'

import { showSearchBar, showStyleBarMethod } from '../../store/actions/index'
class Nav extends React.Component {
    render() {
        return (
            <NavBar
                mode="light"
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px', color: this.props.searchBarState.show ? '#f50' : '#108ee9' }}
                        onClick={() => this.props.searchBarState.show ? this.props.showSearchBar(false) : this.props.showSearchBar(true)} />,
                    !this.props.showStyleBar.grid ?
                        <BarsOutlined
                            style={{ color: this.props.showStyleBar.show ? '#f50' : '#108ee9', fontSize:'22px' }}
                            onClick={() => this.props.showStyleBar.show ? this.props.showStyleBarMethod(false, this.props.showStyleBar.grid) : this.props.showStyleBarMethod(true, this.props.showStyleBar.grid)} />
                        : <AppstoreOutlined
                            style={{ color: this.props.showStyleBar.show ? '#f50' : '#108ee9'  , fontSize:'22px'}}
                            onClick={() => this.props.showStyleBar.show ? this.props.showStyleBarMethod(false, this.props.showStyleBar.grid) : this.props.showStyleBarMethod(true, this.props.showStyleBar.grid)} />,



                ]}

            >
                المخزن
            </NavBar>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchBarState: state.searchBarState,
        showStyleBar: state.showStyleBar,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            showSearchBar: showSearchBar,
            showStyleBarMethod: showStyleBarMethod
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Nav);
