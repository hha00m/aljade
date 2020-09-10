import React from "react";
import { Modal, View, List, Flex } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeModelMethod, } from '../store/actions';
import { closeModelMethod } from '../store/actions';

const RadioItem = List;

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

const onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
        e.preventDefault();
    }
}

class NewFlagsModels extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            id: '',
            listname: '',
            bg_color: '',
            font_color: ''
        }

    }
     onChangeFlag = (value) => {
        console.log('flag changed');
       this.state({
            id: value.id,
            listname: value.listname,
            bg_color: value.bg_color,
            font_color: value.font_color
        });
    };

    render() {
        return (
            <View>
                <Modal
                    visible={this.props.ActiveModel.model.name === 'newFlag' && this.props.ActiveModel.action}
                    transparent
                    maskClosable
                    onClose={() => this.props.closeModelMethod(this.props.modelList[6])}
                    footer={[{
                        text: 'تأكيد',
                        onPress: () => {
                            this.props.closeModelMethod(this.props.modelList[6]);
                            this.props.AddTheFlagToListMethod(this.props.user.user.data.username, this.props.user.user.password, this.props.activeProduct.product, this.state)
                        }
                    }]}
                    wrapProps={{ onTouchStart: onWrapTouchStart }}
                >
                    <List style={{ direction: "rtl", backgroundColor: "#fff" }} renderHeader={() => <div>أختر شعار جديد</div>}>
                        {this.props.newFlagList.map((val, index) => (
                            <RadioItem
                                key={index}
                                checked={this.state.bg_color === val.bg_color}
                                onChange={() => this.onChangeFlag(val)}
                            >
                                <Flex>
                                    <View
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: `#${val.bg_color}`,
                                            borderRadius: 2,
                                            color: `#${val.font_color}`,
                                            marginLeft: "35px",
                                            marginRight: "35px",
                                            marginTop: '5px',
                                            marginBottom: '5px',
                                        }}
                                    />        <span style={{ marginLeft: "35px", marginRight: "35px" }}> {val.listname}</span>
                                </Flex>
                            </RadioItem>
                        ))}
                    </List>
                </Modal>
            </View >
        )
    }
};

function mapStateToProps(state) {
    return {

        modelList: state.modelList,
        ActiveModel: state.ActiveModel,
        activeProduct: state.activeProduct,
        newFlagList: state.newFlagList,

    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            activeModelMethod: activeModelMethod,
            closeModelMethod: closeModelMethod,
        }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(NewFlagsModels);
