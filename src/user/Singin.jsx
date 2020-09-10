import React from "react";
import { InputItem, List, Button, WhiteSpace, LocaleProvider } from "antd-mobile";
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import { useState } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { singinWithServer } from './../user/store-singin/actions/actions'


function Singin(props) {
  const [state, setState] = useState({

    Local_loading: false,
    local_fetched: false,
    err: false,
    username: '',
    password: ''
  });

  const handleFieldChange = (e, fieldName) => {
    let data = state;
    data[fieldName] = e;
    setState(data);
  };
  const fetchData = () => {
    let username = state.username;
    let password = state.password;
    setState({ ...state, redirced: false, loading: true, err: false });
    props.singin(username, password);
  }
  const onClickSinginButton = () => {
    (state.username.length > 0 && state.password.length > 0)
      ? fetchData()
      : setState({ ...state, redirced: false, loading: false, err: true });
  }
  return (
      <LocaleProvider locale={enUS}>

        <h1>
          <span>قم بتسجيل دخول هنا</span>
        </h1>
        <List
          style={{ direction: 'rtl', textAlign: 'right' }}
          className='am-input-label'

        >
          <InputItem
            placeholder="078x xxx xxxx"
            style={{ width: '100%', border: !state.err ? '' : 'red 1px solid' }}
            onChange={(e) => handleFieldChange(e, "username")}
          >
            رقم الهاتف
      </InputItem>
          <InputItem
            type="password"
            placeholder="*****"
            style={{ width: '100%', border: !state.err ? '' : 'red 1px solid' }}
            onChange={(e) => handleFieldChange(e, "password")}
          >
            {state.Local_loading ? 'loading' :
              'كلمة المرور'}
          </InputItem>
          <WhiteSpace />

          <Button
            type="primary"
            inline
            style={{ width: "100%", marginRight: "4px" }}
            onClick={() => onClickSinginButton}
          >
            تسجيل دخول
      </Button>
      <WhiteSpace size='xl' />
      <WhiteSpace size='xl' />
              </List>
      </LocaleProvider>

  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      singinWithServer: dispatch(singinWithServer()),
      singin: singinWithServer,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Singin);
