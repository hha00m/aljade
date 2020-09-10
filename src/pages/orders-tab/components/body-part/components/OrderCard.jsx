import React from 'react';
import { Accordion, List, Flex, View, Modal } from 'antd-mobile';
import './../components/style.css';

const Item = List.Item;
const Card = (props) => {
    let order = props.order;
    let index = props.index;
    return (
        <View >
            <Accordion.Panel key={index} header="Title 1">


                <Flex
                    style={{ direction: 'rtl', height: '50px' }}>
                    <Flex.Item style={{ flex: '1', fontSize: '13px' }}>{order.id} </Flex.Item>
                    <Flex.Item style={{ flex: '3', fontSize: '13px' }}>{order.customer_name} </Flex.Item>
                    <Flex.Item style={{ flex: '2', fontSize: '13px' }}>{order.total_price}</Flex.Item>
                    <Flex.Item style={{ flex: '2', fontSize: '13px' }}>{order.status_name}</Flex.Item>
                </Flex>
            </Accordion.Panel>

        </View>

    )
}
export default Card;