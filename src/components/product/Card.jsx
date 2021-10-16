import React from 'react';
import { Badge, Button, Flex, SwipeAction, Tag } from 'antd-mobile';


const Card_Jade = (props) => {
    let obj = props.obj;
    let rowID = props.rowID;
    let product = props.product;

    return (

        <Badge text={'جديد'} corner>
            <div key={rowID} style={{ padding: '0 15px' }}>

                <SwipeAction
                    style={{ backgroundColor: 'white' }}

                    left={[
                        {
                            text: 'أشارة',
                            onPress: () => {
                                props.handler("FavorteMode");
                                props.setProduct(obj)
                            },
                            style: { backgroundColor: '#f96f6d', color: 'white', width: "100px" },
                        },
                    ]}
                >

                    <div style={{ display: 'flex', padding: '15px 0', direction: "rtl" }}>
                        <img style={{ height: '150px', marginLeft: '5px' }} src={`https://aljade.com/store/img/product/${obj.img}`} alt="" />
                        <div style={{ lineHeight: 1, width: "100%" }} className="flex-container">
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.name}</div>
                            <div style={{ marginBottom: '8px' }}>
                                <span style={{ fontSize: '15px', color: '#FF6E27' }}>{obj.store_name}
                                </span>
                            </div>
                            <Flex justify="between">
                                <span style={{ alignSelf: "flex-end", fontSize: '15px', color: '#000' }} className="inline">{obj.price}</span>
                                <Button type="warning" size="small" inline className="inline" onClick={props.showModal('BuyerListMode', obj)}>شراء</Button>

                            </Flex>
                            <div>
                                {
                                    (obj.attribute).map((v, i) => {
                                        return (
                                            <Flex wrap="wrap" key={i} className="tag-container">
                                                {
                                                    (v.config).map((option, index) =>
                                                        <Tag key={index} selected={(product.options ? product.options.id === option.id : false) && product.product.id === obj.id} onChange={() => props.onChangeTag(option, obj)} >{option.value}</Tag>
                                                    )}
                                            </Flex>)
                                    })

                                }
                            </div>
                        </div>
                    </div>
                </SwipeAction>
            </div>
        </Badge>
    );










}
export default Card_Jade;