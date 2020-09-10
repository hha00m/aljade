import React from "react";
import { ActivityIndicator, WingBlank, View, List, Flex, WhiteSpace, SwipeAction, Button } from 'antd-mobile';
import { PlusCircleOutlined } from '@ant-design/icons'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeModelMethod, closeModelMethod } from '../../../models/store/actions/index';
import {
    cencelSendBasketToDB, fetchingBasketsMethod, deleteBasketsMethod,
    sendBasketToDB, selectedBasketMethod , fetchingBasketByIDMethod
} from '../../../models/store/actions/index';
// import './_style.css';
const BasketsTab = (props) => {

    const selectBasket = (val) => {
        props.selectedBasketMethod(val)
        props.fetchingBasketByIDMethod(props.user.user.data.username, props.user.user.password, val.id)
    }
   const onUpdate = () => {
        props.fetchingBasketsMethod(props.user.user.data.username, props.user.user.password,true)
    }
    return (
        <WingBlank >
            <List
                style={{ direction: "rtl", backgroundColor: 'white' }}
                className="picker-list">
                {
                    props.baskets.fetched ?
                        props.baskets.baskets.map((i, index) => (
                            <SwipeAction
                                style={{ backgroundColor: '#fff' }}
                                autoClose
                                right={[
                                    {
                                        text: 'تحديث',
                                        onPress: () => {
                                            selectBasket(i);
                                            props.activeModelMethod(props.modelList[3])
                                        },
                                        style: { backgroundColor: '#cbbeb5', color: "black" },
                                    },
                                    {
                                        text: 'الغاء التثبيت',
                                        onPress: () => {
                                            props.cencelSendBasketToDB(props.user.user.data.username, props.user.user.password, i.id);
                                            onUpdate ();
                                         },
                                        style: { backgroundColor: '#525266', color: 'white' },
                                    },
                                    {
                                        text: 'حذف',
                                        onPress: () => {
                                            props.deleteBasketsMethod(props.user.user.data.username, props.user.user.password, i.id);
                                            onUpdate ();
                                        },
                                        style: { backgroundColor: '#ff6666', color: 'white' },

                                    },
                                ]}
                                left={[
                                    {
                                        text: 'تثبيت الطلب',
                                        onPress: () => {

                                            selectBasket(i);
                                            props.activeModelMethod(props.modelList[5])

                                        },
                                        style: { backgroundColor: '#108ee9', color: 'white' },

                                    }, {
                                        text: 'عرض',
                                        onPress: () => props.activeModelMethod(props.modelList[5])
                                        ,
                                        style: { backgroundColor: '#525266', color: 'white' },
                                    },

                                ]}
                            > <List.Item key={index}
                                checked={props.selectedBasket.id === i.id} onChange={() => { selectBasket(i) }}
                                disabled={i.status === '2'}
                            >
                                    <Flex>
                                    <span > {i.customer_name} - {i.customer_phone} - {i.city_name} - {i.town_name} </span>
                                    </Flex>
                                </List.Item>
                            </SwipeAction>
                        )) :
                        <View style={{ width: '100%', height: document.documentElement.clientHeight * 0.1, display: 'flex', justifyContent: 'center' }}>
                            <ActivityIndicator size="large" />
                        </View>
                }
                <List.Item>

                    <Button type="ghost" onClick={() => props.activeModelMethod(props.modelList[2])} style={{ fontSize: '16px' }}> <PlusCircleOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} /> اضافة سلة جديدة</Button><WhiteSpace />

                </List.Item>
            </List>

        </WingBlank>

    )
}

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        baskets: state.baskets,
        user: state.user.user,
        selectedBasket: state.selectedBasket,
        activeProduct: state.activeProduct,
 
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchingBasketsMethod: fetchingBasketsMethod,
            activeModelMethod: activeModelMethod,
            deleteBasketsMethod: deleteBasketsMethod,
            closeModelMethod: closeModelMethod,
            sendBasketToDB: sendBasketToDB,
            cencelSendBasketToDB: cencelSendBasketToDB,
            selectedBasketMethod: selectedBasketMethod,
            fetchingBasketByIDMethod: fetchingBasketByIDMethod,
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(BasketsTab);
