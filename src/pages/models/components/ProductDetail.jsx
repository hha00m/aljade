import React from 'react';
import { Flex, Tag, View, WhiteSpace, Button, Modal, List, Toast } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModelMethod, activeProductMethod,activeModelMethod } from '../../models/store/actions/index';
import { PlusCircleOutlined } from '@ant-design/icons';
import './productDetails.css'
const Item = List.Item;

const MyAccountModel = (props) => {

    const onPressedButton = (val) => {
        if (props.activeProduct.product) {
                props.activeModelMethod(val);
            } else
                Toast.info('رجاء اختر خيار قبل الشراء', 2, null, false);
    }
    return (
        <Modal
            visible={props.ActiveModel.model.name === 'productDetails' && props.ActiveModel.action}
            transparent
            maskClosable
            closable={true}
            popup
            animationType="slide-down"
            onClose={() => {
                props.closeModelMethod(props.modelList[11]);
            }}

        >
            {props.activeProduct.product ?
                <List
                    style={{ direction: "rtl", textAlign: "center" }}>
                    <Item style={{ height: '450px', width: '100%' }}>
                        <img style={{ width: '100%', height: '100%', borderRadius: '5px' }}
                            src={`https://aljade.com/store/img/product/${props.activeProduct.product.images[0].path}`} alt="" />
                    </Item>
                    <Item style={{textAlign:'center'}} >
                        <h2 > {props.activeProduct.product.price}</h2>
                    </Item>
                    <Item >
                        <Button type="primary" onClick={() => { onPressedButton(props.modelList[1]) }} style={{ fontSize: '16px' }}> <PlusCircleOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} />اضف للسلة</Button><WhiteSpace />
                    </Item>
                    <Item>
                        {props.activeProduct.product.attribute ?
                            <View>
                                <span>{props.activeProduct.product.attribute[0].name}:</span>
                                {
                                    (props.activeProduct.product.attribute).map((v, i) => {
                                        return (
                                            <Flex wrap="wrap" key={i} className="tag-container" >
                                                {
                                                    (v.config).map((option, index) =>
                                                        <Tag key={index}
                                                        selected={(props.activeProduct.options ?
                                                            props.activeProduct.options.id === option.id : false)}
                                                        onChange={() => props.activeProductMethod(props.activeProduct.product, option)}
                                                        >{option.value}</Tag>
                                                    )}
                                            </Flex>)
                                    })
                                }
                                <WhiteSpace size='lg' />
                            </View> : ''}
                    </Item>
                    <Item>
                        <h4>وصف كامل</h4>
                        <span>{props.activeProduct.product.simple_des}</span>
                    </Item>
                </List> : ''}
        </Modal>
    );
}

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        user: state.user.user,
        activeProduct: state.activeProduct,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            closeModelMethod: closeModelMethod,
            activeProductMethod: activeProductMethod,
            activeModelMethod:activeModelMethod,
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MyAccountModel);
