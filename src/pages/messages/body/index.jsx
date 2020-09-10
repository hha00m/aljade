import React from 'react';
import { List } from 'antd-mobile';
import { FaRegUserCircle } from 'react-icons/fa'

const Item = List.Item;
const Brief = Item.Brief;
class BodyMoreList extends React.Component {
    state = {
        disabled: false,
    }

    render() {
        return (<div >


            <List style={{ direction: 'rtl' }}
                // renderHeader={() => 'خيارات الحساب'}
                >
                <Item
                    thumb={<FaRegUserCircle style={{ fontSize: '50px' }} />}
                    arrow="down"
                    onClick={() => { }}
                    style={{ direction: 'rtl' }}
                >محادثة رقم ١ <Brief>أخر محادثة</Brief></Item>
                 <Item
                    thumb={<FaRegUserCircle style={{ fontSize: '50px' }} />}
                    arrow="down"
                    onClick={() => { }}
                    style={{ direction: 'rtl' }}
                >محادثة رقم ٢ <Brief>أخر محادثة</Brief></Item>
                
            </List>

        

        </div>);
    }
}

export default BodyMoreList;