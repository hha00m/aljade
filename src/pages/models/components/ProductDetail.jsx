import React from 'react';
import { Flex, Modal, List } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModelMethod, } from '../../models/store/actions/index';
const Item = List.Item;

const MyAccountModel = (props) => {

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

            <List
                style={{ direction: "rtl", textAlign: "center" }}
                renderHeader={() => 'التفاصيل'
                }>
                <Item>
                    <Flex>

                    </Flex>
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
        selectedProductGrid: state.selectedProductGrid,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            closeModelMethod: closeModelMethod,
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MyAccountModel);
