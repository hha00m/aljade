import React from 'react';
import { List, Flex } from 'antd-mobile';

const Item = List.Item;
const Card = (props) => {
    let order=props.order;
    let index=props.index;

    return (
        <div >
            <Item key={index} wrap>
                <Flex style={{ direction: 'rtl', height: '50px'  }}>
                    <Flex.Item style={{flex:'1', fontSize:'13px'}}>{order.id} </Flex.Item>
                    <Flex.Item style={{flex:'3', fontSize:'13px'}}>{"اسم المشتري"} </Flex.Item>
                    <Flex.Item style={{flex:'2', fontSize:'13px'}}>{"25-04-2020"}</Flex.Item>
                    <Flex.Item style={{flex:'2', fontSize:'13px'}}>5,550</Flex.Item>
                    <Flex.Item style={{flex:'2', fontSize:'13px'}}>واصل</Flex.Item>

                </Flex>
            </Item>
        </div>

    )
}
export default Card;