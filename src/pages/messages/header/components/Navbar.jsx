import React from 'react';
import { NavBar } from 'antd-mobile';
import { CommentOutlined } from '@ant-design/icons'
class Nav extends React.Component {



    render() {
        return (
            <NavBar
                mode="light"
            >
               (قيد التطوير) محادثات
                <CommentOutlined style={{marginLeft:'8px' ,fontSize:'22px'}}/></NavBar>
        )
    }
}
export default Nav;