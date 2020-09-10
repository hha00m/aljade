import React from 'react';
import { Card, Flex, Stepper, View } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
     closeModelMethod
} from './../../../../models/store/actions/index'

const BasketCard = (props) => {

    return (
<View>
        <Card >
            <Card.Header
                title={<div><span>{props.selectedBasket.city} - </span>
                    <span>{props.selectedBasket.town}  </span></div>}
                extra={
                    <span>{props.selectedBasket.customer_name} </span>
                }
            />
            <Card.Body className='am-flexbox'>
                <div>
                    {props.selectedBasket.items ?
                        props.selectedBasket.items.map((value, index) => {
                            return (
                                <Flex key={index} style={{ direction: "rtl" }} justify="between">
                                    <span>  {value.sub_name}  </span>
                                    <Stepper style={{ Width: '20px' }} showNumber size="small" defaultValue={1} />
                                </Flex>
                            )
                        }) : <div>loading</div>

                    }
                </div>
            </Card.Body>
            <Card.Footer
                content={
                    <View align='center' style={{ backgroundColor: '#108ee9', Flex: '5', height: '30px', color:'#f5f5f9' , paddingTop:'8px'}}
                    >أرسال</View>
                }

                extra={
                    <View align='center' style={{ backgroundColor: '#ff5b05', Flex: '5', height: '30px', color:'#f5f5f9', paddingTop:'8px' }}
                    > الغاء</View>

                }
            />

        </Card>
        <div
        style={{
          backgroundColor: '#F5F5F9',
          height: 10,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
        </View>
    );
}

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        user: state.user.user,
        selectedBasket: state.selectedBasket,

    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            closeModelMethod: closeModelMethod,
            all_selectedBasketsMethod: all_selectedBasketsMethod
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(BasketCard);
