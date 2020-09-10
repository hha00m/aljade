import React, { useEffect } from 'react';
import { Accordion, Flex, WingBlank, List } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchingOrdersMethods } from '../../store/actions/index';
import './components/style.css';
import Item from 'antd-mobile/lib/popover/Item';
const OrdersTab = (props) => {
    useEffect(() => {
        props.fetchingOrdersMethods(props.user.user.data.username, props.user.user.password)
   // eslint-disable-next-line
 }, [])

    return (
        <WingBlank >
            <Accordion accordion openAnimation={{}} className="my-accordion">
                {
                    props.orders.orders.map((order, i) => (
                        <Accordion.Panel key={i} header={<Flex
                            style={{ direction: 'rtl', height: '50px' }}>
                            <Flex.Item style={{ flex: '2', fontSize: '14px' }}>{order.order_no} </Flex.Item>
                            <Flex.Item style={{ flex: '3', fontSize: '14px' }}>{order.customer_name} </Flex.Item>
                            <Flex.Item style={{ flex: '2', fontSize: '14px' }}>{order.total_price}</Flex.Item>
                            <Flex.Item style={{ flex: '3', fontSize: '14px' }}>{order.status_name}</Flex.Item>
                        </Flex>}
                        >
                            <List className='my-list' style={{marginRight:'8px',backgroundColor:'#F7E1DD'}}>
                            <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>أسم الصفحة </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.store_name}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>رقم المشتري </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.client_phone}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>أسم المشتري </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.customer_name}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>المحافظة</Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.city}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>المدينة</Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.town}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>باقي العنوان </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.address}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>ملاحظة </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.note}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>حلة الطلب </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.status_name}</Flex.Item>
                                    </Flex>
                                </Item> 
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>سعر الطلب </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.total_price}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>خصم </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.discount}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>المندوب </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.staff_name}</Flex.Item>
                                    </Flex>
                                </Item>

                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>ربح المندوب من الطلب </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{order.mandop_earnings}</Flex.Item>
                                    </Flex>
                                </Item>

                                
                            </List>

                        </Accordion.Panel>
                    ))
                }
            </Accordion>
        </WingBlank>
    )
}

function mapStateToProps(state) {
    return {

        orders: state.orders,
        user: state.user.user,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchingOrdersMethods: fetchingOrdersMethods
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(OrdersTab);
