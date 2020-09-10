import React from 'react';
import { Flex, Modal, List } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModelMethod, } from '../../models/store/actions/index';
const Item = List.Item;

const MyAccountModel = (props) => {

    return (
        <Modal
            visible={props.ActiveModel.model.name === 'MyAccountModel' && props.ActiveModel.action}
            transparent
            maskClosable
            closable={true}
            popup
            animationType="slide-down"
            onClose={() => {
                props.closeModelMethod(props.modelList[10]);
            }}

        >

            <List
                style={{ direction: "rtl", textAlign: "center" }}
                renderHeader={() => 'معلومات حول حسابي'
                }>
                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>أسم  </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{props.user.user.data.user_details.name}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>رقم هاتف </Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{props.user.user.data.user_details.phone}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>الدور</Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{props.user.user.data.role===1?'مدير':'مندوب بيعات'}</Flex.Item>
                                    </Flex>
                                </Item> 
                                <Item>
                                    <Flex
                                        style={{ direction: 'rtl', height: '50px' }}>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>البريد الاكتروني</Flex.Item>
                                        <Flex.Item style={{ flex: '5', fontSize: '   16px' }}>{props.user.user.data.user_details.email}</Flex.Item>
                                    </Flex>
                                </Item>
                                <Item>
                                    <Flex
                                        >
                                            <img src={`https://albareqExpress.com/store/img/${props.user.user.data.user_details.id_copy}`} alt=""/>     </Flex>
                                </Item>



            </List>
        </Modal>
    );
}

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        user: state.user.user,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            closeModelMethod: closeModelMethod,
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MyAccountModel);
