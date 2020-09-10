import React from "react";
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { View, NoticeBar, WhiteSpace } from "antd-mobile";
import './sticky.css';
import { connect } from 'react-redux';
import NetworkDetector from '../../../cores/NetworkDetector';
const Header = (props) => {
    return (

        <View >
            <NetworkDetector />
            <NavBar />
            {props.searchBarState.show ? <SearchBar /> : ''}

            <WhiteSpace />
            <NoticeBar mode="closable"  marqueeProps={{ loop: true, style: { padding: '0 7.5px', direction: "rtl" } }}>
            مرحبا بكم   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   تطبيق المندوبه  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ادارة المبيعات    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   التسوق والربح &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            مرحبا بكم   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   تطبيق المندوبه  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ادارة المبيعات    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   التسوق والربح
            </NoticeBar>
 
        </View>

    )
};


function mapStateToProps(state) {
    return {
        searchBarState: state.searchBarState,
    }
}

export default connect(mapStateToProps)(Header);
