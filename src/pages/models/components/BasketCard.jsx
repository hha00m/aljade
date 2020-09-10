import React, { useState, useEffect } from 'react';
import { Flex, ActivityIndicator, View, Button, InputItem, Modal, List, Toast } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FiSend } from 'react-icons/fi';
import { PlusCircleOutlined, DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {
    fetchingBasketByIDMethod, fetchingBasketsMethod, cencelSendBasketToDB, sendBasketToDB, addItemToBasket, closeModelMethod, removeItemFromBasket
} from './../store/actions/index';

const BasketCard = (props) => {
    const [totalPrice, setTotalPrice] = useState(
        {
            total: 0,
            finishsd: false,
            discount: 0,
            original: 0,
        });
    const [isLoading, setIsLoading] = useState(true);

    const onConfirmOrder = () => {
        props.sendBasketToDB(props.user.user.data.username, props.user.user.password, props.basketById.basket.id, totalPrice.discount);
        onUpdate();
    }
    const onCencelationOrder = () => {
        props.cencelSendBasketToDB(props.user.user.data.username, props.user.user.password, props.basketById.basket.id);
        onUpdate();
    }
    const changePrice = (v) => {
        let value = parseInt(v) ? parseInt(v) : 0;
        setTotalPrice({ ...totalPrice, total: totalPrice.original - value, discount: value, finishsd: true })
    }
    const onUpdate = () => {
        setIsLoading(true);
        props.fetchingBasketByIDMethod(props.user.user.data.username, props.user.user.password, props.basketById.basket.id )
    }
    const onAddItem = (id, bi_id) => {
        props.addItemToBasket(
            props.user.user.data.username, props.user.user.password,
            id, props.basketById.basket.id, bi_id
        );
        onUpdate();

    }
    const onDeleteItem = (bi_id) => {
        props.removeItemFromBasket(
            props.user.user.data.username, props.user.user.password,
            bi_id, props.basketById.basket.id
        )
        onUpdate();

    }
    useEffect(() => {
        setTotalPrice({ total: 0, finishsd: false });
        setIsLoading(false);
        if (props.basketById.basket.items) {
            let prices = 0;
            props.basketById.basket.items.map((value, index) => {
                return prices = prices + parseInt(value.price);
            })
            prices += props.basketById.basket.dev_price ? parseInt(props.basketById.basket.dev_price) : 0;
            let discount2 = props.basketById.basket.discount ? parseInt(props.basketById.basket.discount) : 0;
            setTotalPrice(
                {
                    ...totalPrice,
                    original: prices,
                    finishsd: true,
                    total: prices - discount2,
                    discount: discount2
                });
        }
       // eslint-disable-next-line
    }, [props.basketById.basket.items])
    return (
        <Modal
            visible={props.ActiveModel.model.name === 'sendBasketModel' && props.ActiveModel.action}
            transparent
            maskClosable
            closable={true}
            popup
            animationType="slide-down"
            onClose={() => {
                props.fetchingBasketsMethod(props.user.user.data.username, props.user.user.password, true);
                props.closeModelMethod(props.modelList[5]);
            }}

        >
            {isLoading ? <View style={{ width: '100%', height: document.documentElement.clientHeight * 0.5, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View> :
                <List
                    style={{ direction: "rtl", textAlign: "center" }}
                    renderHeader={() =>
                        <View>
                            <span>{props.basketById.basket.customer_name} - </span>
                            <span>{props.basketById.basket.phone} </span>
                            <span>{props.basketById.basket.city_name} - </span>
                            <span>{props.basketById.basket.town_name} </span>
                        </View>
                    }>

                    <List>
                        {props.basketById.basket.items ?
                            <View>
                                {
                                    props.basketById.basket.items.map((value, index) =>
                                        <List.Item>
                                            <Flex key={index} style={{ direction: "rtl" }} justify="between">
                                                <span style={{ Flex: '7' }}>  {value.sub_name}  </span>
                                                <View>
                                                    <span onClick={props.basketById.basket.status !== '2'
                                                        ? () => onDeleteItem(value.bi_id)
                                                        : () => Toast.fail('هذه السلة مرسلة بالفعل ولاتستطيع التعديل')}>
                                                        <DeleteOutlined style={{ fontSize: '22px', marginLeft: '10px', marginRight: '10px' }} /></span>
                                                    <span onClick={props.basketById.basket.status !== '2'
                                                        ? () => onAddItem(value.product_id, value.bi_id)
                                                        : () => Toast.fail('هذه السلة مرسلة بالفعل ولاتستطيع التعديل')}>
                                                        <PlusCircleOutlined style={{ fontSize: '22px', marginLeft: '10px', marginRight: '10px' }} /></span>
                                                </View>
                                            </Flex>
                                        </List.Item>
                                    )}
                            </View> : ''
                        }
                    </List>
                    <List.Item >
                        <View>
                            <View ><h4>المبلغ مع التوصيل:{totalPrice.finishsd ? totalPrice.total : ''}</h4></View>
                            <View style={{ border: "1px solid #ccc" }}>
                                <InputItem
                                    type={'money'}
                                    placeholder=" خصم ان وجد"
                                    clear
                                    defaultValue={parseInt(props.basketById.basket.discount) || 0}
                                    onChange={(v) => changePrice(v)}
                                />
                            </View>
                        </View>
                    </List.Item>
                    <List.Item>
                        {props.basketById.basket.status !== '2' ? <Button
                            type="primary" style={{ fontSize: '16px' }}
                            onClick={() => onConfirmOrder()}><FiSend style={{ marginLeft: '8px', fontSize: '22px' }}
                            /> أرسال الطلب</Button> :
                            <Button
                                type="warning" style={{ fontSize: '16px' }}
                                onClick={() => { onCencelationOrder() }}><CloseCircleOutlined style={{ marginLeft: '8px', fontSize: '22px' }}
                                /> الغاء</Button>
                        }
                    </List.Item>

                </List>}
        </Modal>
    );
}

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        user: state.user.user,
        basketById: state.basketById,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchingBasketByIDMethod: fetchingBasketByIDMethod,
            addItemToBasket: addItemToBasket,
            closeModelMethod: closeModelMethod,
            removeItemFromBasket: removeItemFromBasket,
            sendBasketToDB: sendBasketToDB,
            cencelSendBasketToDB: cencelSendBasketToDB,
            fetchingBasketsMethod: fetchingBasketsMethod
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(BasketCard);
