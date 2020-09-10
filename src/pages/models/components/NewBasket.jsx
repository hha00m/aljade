import React from 'react';
import { List, Button, InputItem, TextareaItem, View, Modal } from 'antd-mobile';
import { ContactsOutlined } from '@ant-design/icons';
import './_style.css';
import { bindActionCreators } from 'redux';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { createNewBasket, closeModelMethod, fetchingBasketsMethod } from './../store/actions';
import CityModel from './CitiesModels';
//----------------------------------------------------


class NewBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state }
  }

  onUpdate = () => {
    this.props.fetchingBasketsMethod(this.props.user.user.user.data.username, this.props.user.user.user.password, true)
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      value['city'] = this.props.activeCity.value;
      value['town'] = this.props.activeTown.value;
      if (value.city && value.town && value.phone) {
        this.props.createNewBasket(this.props.user.user.user.data.username, this.props.user.user.user.password, value);
      }

    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <View>
        <Modal
          popup
          closable={true}
          visible={this.props.ActiveModel.model.name === 'AddNewCustomer' && this.props.ActiveModel.action}
          onClose={() => {
            this.props.fetchingBasketsMethod(this.props.user.user.user.data.username, this.props.user.user.user.password, true)
            this.props.closeModelMethod(this.props.modelList[2]);
          }}
          animationType="slide-up"
        >
          <List className="my-list"
            style={{ direction: "rtl", textAlign: "center" }}
            renderHeader={() => 'أدخل معلومات المشتري'}>
            <InputItem
              clear
              ref={el => this.autoFocusInst = el}
              {...getFieldProps('name')}

            >
              الاسم :</InputItem>
            <InputItem
              type="phone"
              clear
              placeholder="07x xxx xxxx"
              {...getFieldProps('phone')}
              style={{ direction: "ltr", paddingLeft: "8px", paddingRight: "8px" }}
            >الموبايل:
          </InputItem>
            <CityModel />
            <TextareaItem
              {...getFieldProps('address')}
              title={"العنوان:"}
              rows={2}
              count={100}
            />

            <TextareaItem
              {...getFieldProps('note')}
              title={"ملاحظة:"}
              rows={2}
              count={100}

            />
            <List.Item>
              <Button type="warning" onClick={this.submit} >  <ContactsOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} />انشاء</Button>
            </List.Item>
          </List>
        </Modal>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    activeCity: state.activeCity,
    activeTown: state.activeTown,
    modelList: state.modelList,
    ActiveModel: state.ActiveModel,
    user: state.user,

  }

}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createNewBasket: createNewBasket,
      closeModelMethod: closeModelMethod,
      fetchingBasketsMethod: fetchingBasketsMethod

    }, dispatch);
}
const BasicInputExampleWrapper = createForm()(NewBasket);
export default connect(mapStateToProps, matchDispatchToProps)(BasicInputExampleWrapper)