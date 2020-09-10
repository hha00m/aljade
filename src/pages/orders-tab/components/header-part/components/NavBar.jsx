import React from 'react';
import { NavBar } from 'antd-mobile';
import { FaBoxes } from 'react-icons/fa'
class Nav extends React.Component {



    render() {
        return (
            <NavBar
                mode="light"
            >
                جيمع الطلبيات
                <FaBoxes style={{marginLeft:'8px' ,fontSize:'22px'}}/></NavBar>
        )
    }
}
export default Nav;