import React from "react";
import NavBar from './components/Navbar';
import { View } from "antd-mobile";
import  SearchBar from './components/SearchBar'
const Header = () => {
    return (
        <View>
            <NavBar />
            <SearchBar/>
        </View>
    )
};


export default Header;