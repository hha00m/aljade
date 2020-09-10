import React from 'react';
import { NavBar } from 'antd-mobile';
import { SettingOutlined } from '@ant-design/icons'
class Nav extends React.Component {



    render() {
        return (
            <NavBar
                mode="light"
            >
                ألاعدادات
                <SettingOutlined style={{marginLeft:'8px' ,fontSize:'22px'}}/></NavBar>
        )
    }
}
export default Nav;