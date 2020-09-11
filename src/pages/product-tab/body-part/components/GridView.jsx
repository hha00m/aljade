/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React from "react";
import { Grid, View, ActivityIndicator, WhiteSpace } from "antd-mobile";
import { fetchingProductsMethod } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useEffect } from 'react'
import './style.css'
import { useState } from "react";
import { activeModelMethod, } from '../../../models/store/actions/index';
import {selectedProductMethod} from '../../store/actions/index'
let pageIndex = 1;
let _data = [];

const GridView = (props) => {
  const [loading, setLoading] = useState(true);
  const _onDataArrived = (newData) => {
    if (_data.length !== newData.length&&newData.length>0) {
      _data = newData;
    }
  }


  const onEndReached = event => {
    setLoading(true);
    ++pageIndex;
    props.fetchingProducts(props.user.user.user.data.username, props.user.user.user.password, pageIndex, _data);
    console.log("reach end", event);
  };





  useEffect(() => {
    if (props.products.fetched) {
      setLoading(false);
      _onDataArrived(props.products.products);
    }
  }, [props.products]);



  return (

    <View>
      <Grid data={_data}
        columnNum={3}
        itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }}
        square={false} className="not-square-grid"
        renderItem={dataItem => (
          <View style={{ padding: '0.5px' }}
            onClick={() => {
              props.selectedProductMethod(dataItem);
              props.activeModelMethod(props.modelList[11])}}>
            <img src={`https://aljade.com/store/img/product/${dataItem.img}`}
              style={{ width: '70px', height: '100px' }} alt="" />
            <View style={{ color: '#888', fontSize: '14px', marginTop: '0px' }}>
              <span>{dataItem.name}</span>
            </View>
          </View>
        )}
      />
      <WhiteSpace size='lg' />
      {!loading ?
        <View
          onClick={onEndReached}
          style={{ color: 'blue', textAlign: 'center', fontSize: '18px' }}
        >تحميل المزيد</View> :
        <View style={{ width: '100%', height: document.documentElement.clientHeight * 0.1, display: 'flex', justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      }
      <WhiteSpace size='lg' />

    </View>
  );
}


function mapStateToProps(state) {
  return {

    products: state.products,
    user: state.user,
    modelList: state.modelList,

  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchingProducts: fetchingProductsMethod,
      activeModelMethod: activeModelMethod,
      selectedProductMethod:selectedProductMethod
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GridView);