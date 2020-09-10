import React from "react";
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { View } from "antd-mobile";
const Header = () => {
    return (
        <View>
            <NavBar />
            <SearchBar/>
        </View>
    )
};


export default Header;