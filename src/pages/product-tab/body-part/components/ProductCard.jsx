import React from 'react';
import { Button, Flex, SwipeAction, Tag, View, Toast } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    activeProductMethod,
    selectedOptionsMethods,
    closeModelMethod,
    activeModelMethod
}
    from '../../../models/store/actions';
import './style.css'
const ProductCard = (props) => {
    let obj = props.obj;
    let rowID = props.rowID;

    const onPressedButton = (e, val) => {
        e.preventDefault();
        if (props.activeProduct.product) {
            if (props.activeProduct.product.id === obj.id) {
                props.activeModelMethod(val);
            } else {
                Toast.fail('رجاء اختر خيار من نفس المنتج', 2, null, false);
            }
        } else {
            if (obj.attribute.length < 1) {
                props.activeProductMethod(obj);
                props.activeModelMethod(val);
            } else
                Toast.info('رجاء اختر خيار قبل الشراء', 2, null, false);

        }


    }
    return (

        <View key={rowID} style={{ padding: '0 15px' }} >

            <SwipeAction
                style={{ backgroundColor: 'white' }}

                left={[
                    {
                        text: 'أشارة',
                        onPress: (e) => { onPressedButton(e, props.modelList[0]); },
                        style: { backgroundColor: '#f96f6d', color: 'white', width: "100px" },
                    },
                ]}
            >
                <View style={{ display: 'flex', padding: '10px 0', direction: "rtl" }}>
                    
                    <img style={{ width: '90px', height: '130px', marginLeft: '5px', borderRadius: '5px' }}
                        src={`https://shorjashops.com/store/img/product/${obj.img}`} alt="" />
                    <View style={{ lineHeight: 1, width: "100%" }} className="flex-container">
                        <View style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.name}
                            {/* <Badge text="شعار"
                                style={{
                                    marginRight: '5px',
                                    padding: '0px  6px',
                                    backgroundColor: '#f19736',
                                    borderRadius: 2,
                                    color: '#fff',
                                    border: '1px solid #f19736',
                                }}
                            /> */}
                        </View>
                        <View style={{ marginBottom: '8px' }}>
                            <span style={{ fontSize: '15px', color: '#FF6E27' }}>{obj.store_name}
                            </span>
                        </View>
                        <Flex justify="between">
                            <span style={{ alignSelf: "flex-end", fontSize: '15px', color: '#000' }} className="inline">{obj.price}</span>
                            <Button type="warning" size="small" inline className="inline"
                                onClick={(e) => { onPressedButton(e, props.modelList[1]) }}
                            >شراء</Button>
                        </Flex>
                        {obj.attribute.length > 0 ?
                            <View >
                                <span>{obj.attribute[0].name}:</span>
                                {
                                    (obj.attribute).map((v, i) => {
                                        return (
                                            <Flex wrap="wrap" key={i} className="tag-container" style={{
                                                height: ' 60px'
                                            }}>
                                                {
                                                    (v.config).map((option, index) => {
                                                        return option.qty > 0 ?
                                                            <Tag key={index}
                                                                selected={(props.activeProduct.options ?
                                                                    props.activeProduct.options.id === option.id : false)
                                                                    && props.activeProduct.product.id === obj.id}
                                                                onChange={() => props.activeProductMethod(obj, option)}
                                                            >{option.value}</Tag>
                                                            : ''
                                                    }
                                                    )}
                                            </Flex>)
                                    })
                                }
                            </View> : ''}
                    </View>
                </View>
            </SwipeAction>
        </View>

    );

}
function mapStateToProps(state) {
    return {
        modelList: state.modelList,
        selectedOptions: state.selectedOptionsMethods,
        activeProduct: state.activeProduct,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            activeModelMethod: activeModelMethod,
            closeModelMethod: closeModelMethod,
            activeProductMethod: activeProductMethod,
            selectedOptionsMethods: selectedOptionsMethods
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(ProductCard);
