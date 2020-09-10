import React from 'react';
import { NavBar } from 'antd-mobile';
// import { ShoppingCartOutlined } from '@ant-design/icons'
import {BiBasket} from 'react-icons/bi'
class Nav extends React.Component {
    render() {
        return (
            <NavBar
                mode="light"
            >
                جيمع السلات
                <BiBasket style={{marginLeft:'8px' ,fontSize:'22px'}}/></NavBar>
        )
    }
}
export default Nav;