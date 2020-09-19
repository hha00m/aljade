/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React from "react";
import ReactDOM from "react-dom";
import { PullToRefresh, ListView, ActivityIndicator, View, Toast } from "antd-mobile";
import { fetchingProductsMethod } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
let pageIndex = 1;

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchingProducts(this.props.user.user.user.data.username, this.props.user.user.user.password, this.props.searchForInfo.data, pageIndex, 10, this._data, false);

    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      search: '',
      dataSource: ds.cloneWithRows([]),
      isLoading: true,
      height: (document.documentElement.clientHeight * 3) / 4,
    };
  }
  _data = [];
  entered = true;
  _onDataArrived(newData, enter) {

    if (this._data.length !== newData.length) {
      const hei =
        document.documentElement.clientHeight -
        ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
      this._data = newData;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this._data),
        isLoading: false,
        height: hei
      });
      return true;
    }
    if (enter) {
      this.setState({
        ...this.state,
        isLoading: false
      });
      return false;
    }
  }

  componentDidUpdate() {
    if (this.state.search !== this.props.searchForInfo.data) {
      pageIndex = 1;
      this._data = [];
      this.entered = true;
      this.props.fetchingProducts(this.props.user.user.user.data.username, this.props.user.user.user.password, this.props.searchForInfo.data, pageIndex, 10, this._data, false);
      this.setState({ ...this.state, search: this.props.searchForInfo.data });
    }
    if (this.props.products.fetched && !this.props.products.fetching) {
      if (this.entered === undefined) this.entered = true;
      this.entered = this._onDataArrived(this.props.products.products, this.entered);
    }
  }
  onRefresh = () => {
    if (navigator.onLine) {

      // localStorage.clear();
      for (let i = 1; i <= pageIndex; i++) {
        localStorage.removeItem(`productsList:${i}`);
      }
      pageIndex = 1;
      this._data = [];
      this.entered = true;
      this.props.fetchingProducts(this.props.user.user.user.data.username, this.props.user.user.user.password, this.props.searchForInfo.data, pageIndex, 10, this._data, false);
      this.setState({ ...this.state, search: this.props.searchForInfo.data });
    } else {
      Toast.offline('لايوجد انترنيت حاول مجددا', 2, null, false);
    }
  };
  onEndReached = event => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    ++pageIndex;
    this.props.fetchingProducts(this.props.user.user.user.data.username, this.props.user.user.user.password, this.props.searchForInfo.data, pageIndex, 10, this._data, false);

    console.log("reach end", event);
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 10,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    const row = (rowData, rowID) => {
      return (
        <ProductCard rowID={rowID} obj={rowData} />
      )
    };
    return (
      <ListView
      
        ref={el => (this.lv = el)}
        dataSource={this.state.dataSource}
        renderFooter={() => (
          <View style={{ width: '100%', height: document.documentElement.clientHeight * 0.1, display: 'flex', justifyContent: 'center' }}>
            {this.state.isLoading ? <ActivityIndicator size="large" /> : "تم التحميل"}
          </View>
        )}
        renderRow={row}
        style={{
          height: this.state.height,
          overflow: "auto"
        }}
        renderSeparator={separator}

        pageSize={4}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.isLoading}
          onRefresh={this.onRefresh}
        />}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

function mapStateToProps(state) {
  return {

    products: state.products,
    user: state.user,
    searchForInfo: state.searchForInfo,

  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchingProducts: fetchingProductsMethod,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Body);