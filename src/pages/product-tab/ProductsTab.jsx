import React from "react";
import Header from './header-part/Header';
import Body from './body-part/Body';
import { View } from "antd-mobile";
const ProductsTab = () => {
    return (
        <View style={{
            flex: 1, 
            flexDirection: 'column',
            alignItems:"strech"}}>
            <Header style={{flex:'2'}} />
            <Body style={{flex:'8'}}/>
        
        </View>
    )
};


export default ProductsTab;
