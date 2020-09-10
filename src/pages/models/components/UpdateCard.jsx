import React from 'react';
import { List, Button, InputItem, TextareaItem,  Toast } from 'antd-mobile';
import { ContactsOutlined } from '@ant-design/icons';
import './_style.css';
import { bindActionCreators } from 'redux';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { updateBasketMethod, closeModelMethod, fetchingBasketsMethod } from './../store/actions';
import CityModel from './CitiesModels';


const UpdateCard = (props) => {

    const submit = () => {
        props.form.validateFields((error, value) => {
            value['city'] = props.activeCity.value ? props.activeCity.value : props.selectedBasket.city_id;
            value['town'] = props.activeTown.value ? props.activeTown.value : props.selectedBasket.town_id;
            value['phone'] = value['phone'] ? value['phone'] : props.selectedBasket.customer_phone;
            value['name'] = (value['name'] ? value['name'] : props.selectedBasket.customer_name);
            value['address'] = (value['address'] ? value['address'] : props.selectedBasket.address);
            value['note'] = (value['note'] ? value['note'] : props.selectedBasket.note);

            value['id'] = props.selectedBasket.id;
            if (value.city && value.town && value.phone) {
                props.updateBasketMethod(props.user.user.user.data.username, props.user.user.user.password, value);
            }else Toast.fail('خطاء بالادخال')

        });
    }


    const { getFieldProps } = props.form;

    return (

        <List className="my-list"
            style={{ direction: "rtl", textAlign: "center" }}
            renderHeader={() => 'أدخل معلومات المشتري'}>
            <InputItem
                clear
                type="text"
                {...getFieldProps('name', { initialValue:props.selectedBasket.customer_name ? props.selectedBasket.customer_name : ''  })}
                // defaultValue={props.selectedBasket.customer_name ? props.selectedBasket.customer_name : ''}
            >
                الاسم :</InputItem>
            <InputItem
                type="phone"
                clear
                placeholder="07x xxx xxxx"
                // defaultValue={props.selectedBasket.customer_phone}
                {...getFieldProps('phone', { initialValue:props.selectedBasket.customer_phone})}
                style={{ direction: "ltr", paddingLeft: "8px", paddingRight: "8px" }}
            >الموبايل:
          </InputItem>
            <CityModel />
            <TextareaItem
                {...getFieldProps('address')}
                title={"العنوان:"}
                defaultValue={props.selectedBasket.address}
                rows={2}
                count={100}
            />

            <TextareaItem
                {...getFieldProps('note')}
                title={"ملاحظة:"}
                defaultValue={(props.selectedBasket.note)}
                rows={2}
                count={100}

            />
            <List.Item>
                <Button type="warning" onClick={submit} >  <ContactsOutlined style={{ fontSize: '20px', marginLeft: "8px", marginRight: "8px" }} />تحديث</Button>
            </List.Item>
        </List>
    );

}
function mapStateToProps(state) {
    return {
        activeCity: state.activeCity,
        activeTown: state.activeTown,
        user: state.user,
        selectedBasket: state.selectedBasket,

    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            updateBasketMethod: updateBasketMethod,
            closeModelMethod: closeModelMethod,
            fetchingBasketsMethod: fetchingBasketsMethod

        }, dispatch);
}
const InputWrapper = createForm()(UpdateCard);
export default connect(mapStateToProps, matchDispatchToProps)(InputWrapper)