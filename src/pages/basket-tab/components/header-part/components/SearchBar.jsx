import React from "react";
import { View, SearchBar, WingBlank } from "antd-mobile";
const Header = () => {
    return (
        <View>
            <SearchBar placeholder="بحث" maxLength={8} />
            <WingBlank style={{direction:'rtl'}}>
           <h4>جميع السلات قيد التجهيز</h4>
            </WingBlank>
        </View>
    )
};


export default Header;


